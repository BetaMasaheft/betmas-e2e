xquery version "3.1";

declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";
declare namespace t = "http://www.tei-c.org/ns/1.0";

import module namespace catalog = "https://www.betamasaheft.uni-hamburg.de/BetMasWeb/catalog" at "xmldb:exist:///db/apps/BetMasWeb/modules/catalog.xqm";

declare option output:method "json";
declare option output:media-type "application/json";

declare function local:label($id as xs:string, $backend as xs:string) as xs:string {
	normalize-space(string-join(catalog:label($id, $backend)!string(.), " "))
};

declare function local:label-mismatches($ids as xs:string*) as map(*)* {
	for $id in $ids
	let $legacy := local:label($id, "legacy")
	let $catalog := local:label($id, "catalog")
	where $legacy ne $catalog
	return map {"id": $id, "legacy": $legacy, "catalog": $catalog}
};

declare function local:institution-map($backend as xs:string) as map(*) {
	map:merge(
		for $item in catalog:institutions($backend)
		return map:entry(string($item/@xml:id), normalize-space(string($item)))
	)
};

let $persons := subsequence(collection("/db/apps/expanded")/t:TEI[@type = "pers"]/@xml:id/string(), 1, 250)
let $places := subsequence(collection("/db/apps/expanded")/t:TEI[@type = ("place", "ins")]/@xml:id/string(), 1, 250)
let $subids := subsequence(
	distinct-values(collection("/db/apps/expanded")//t:title[contains(@corresp, "#")]/@corresp/string()),
	1,
	400
)
let $retired := subsequence(doc("/db/apps/lists/deleted.xml")//t:item/string(), 1, 100)
let $preferred := distinct-values(($persons, $places, $subids, $retired))
let $fill := collection("/db/apps/expanded")/t:TEI[not(@xml:id = $preferred)]/@xml:id/string()
let $hp1-ids := subsequence(($preferred, $fill), 1, 1000)
let $textparts := subsequence(
	distinct-values(collection("/db/apps/expanded")//t:title[matches(@corresp, "#t[0-9]+$")]/@corresp/string()),
	1,
	250
)
let $hp3-ids := distinct-values(($persons, $places, $textparts))
let $hp1-mismatches := local:label-mismatches($hp1-ids)
let $legacy-institutions := local:institution-map("legacy")
let $catalog-institutions := local:institution-map("catalog")
let $institution-ids := distinct-values((map:keys($legacy-institutions), map:keys($catalog-institutions)))
let $hp2-mismatches :=
	for $id in $institution-ids
	let $legacy := $legacy-institutions($id)
	let $catalog := $catalog-institutions($id)
	where $legacy ne $catalog
	return map {"id": $id, "legacy": $legacy, "catalog": $catalog}
let $hp3-mismatches := local:label-mismatches($hp3-ids)
return serialize(map {
	"HP1": map {"compared": count($hp1-ids), "unreviewed": count($hp1-mismatches), "mismatches": array {$hp1-mismatches}},
	"HP2": map {"compared": count($institution-ids), "unreviewed": count($hp2-mismatches), "mismatches": array {$hp2-mismatches}},
	"HP3": map {
		"compared": count($hp3-ids),
		"textPartSubIds": count($textparts),
		"unreviewed": count($hp3-mismatches),
		"mismatches": array {$hp3-mismatches}
	}
}, map {"method": "json"})

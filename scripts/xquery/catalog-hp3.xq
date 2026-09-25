xquery version "3.1";

declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";
declare namespace t = "http://www.tei-c.org/ns/1.0";

import module namespace catalog = "https://www.betamasaheft.uni-hamburg.de/BetMasWeb/catalog" at "xmldb:exist:///db/apps/BetMasWeb/modules/catalog.xqm";

declare option output:method "json";
declare option output:media-type "application/json";

declare variable $backend external := "legacy";

let $persons := subsequence(collection("/db/apps/expanded")/t:TEI[@type = "pers"]/@xml:id/string(), 1, 250)
let $places := subsequence(collection("/db/apps/expanded")/t:TEI[@type = ("place", "ins")]/@xml:id/string(), 1, 250)
let $textparts := subsequence(
	distinct-values(collection("/db/apps/expanded")//t:title[matches(@corresp, "#t[0-9]+$")]/@corresp/string()),
	1,
	250
)
let $ids := distinct-values(($persons, $places, $textparts))
let $resolved :=
	for $id in $ids
	return exists(catalog:label($id, $backend))
return serialize(map {
	"backend": $backend,
	"requested": count($ids),
	"resolved": count($resolved[.]),
	"persons": count($persons),
	"places": count($places),
	"textparts": count($textparts),
	"textPartSubIds": count($textparts[matches(., "#t[0-9]+$")])
}, map {"method": "json"})

xquery version "3.1";

declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";
declare namespace t = "http://www.tei-c.org/ns/1.0";

import module namespace exptit = "https://www.betamasaheft.uni-hamburg.de/BetMasWeb/exptit" at "xmldb:exist:///db/apps/BetMasWeb/modules/exptit.xqm";

declare option output:method "json";
declare option output:media-type "application/json";

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
let $ids := subsequence(($preferred, $fill), 1, 1000)
let $resolved :=
	for $id in $ids
	return exists(exptit:printTitleID($id))
return serialize(map {
	"requested": count($ids),
	"resolved": count($resolved[.]),
	"persons": count($persons),
	"places": count($places),
	"subIds": count($subids),
	"retired": count($retired)
}, map {"method": "json"})

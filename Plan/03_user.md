# User Story BM

We collect necessary workflows for users of BM app here. Including steps that require external services or locations. 
## BM statistics

1. GO to https://betamasaheft.eu/ 
2. Scroll down to "Reuse the data"
3. Click on "Beta masaheft in numbers" button
4. Get the popup with the current number of records broke down by type ![image](https://user-images.githubusercontent.com/17987728/213142014-17e6dafe-c2f4-48c5-9eeb-7c3a00f15545.png)

## Open record when ID known

1. GO to http://betamasaheft.eu/ID 
2. The xqm knows what the prefix means so takes you to the correct landing page for each entry type, e.g. 
-- person ID PRS9429Tewodros so typing https://betamasaheft.eu/PRS9429Tewodros will resolve to https://betamasaheft.eu/persons/PRS9429Tewodros/main
-- work ID LIT1385Fekkar typing https://betamasaheft.eu/LIT1385Fekkar will resolve to https://betamasaheft.eu/works/LIT1385Fekkar/main
-- mss ID ESum040 typing https://betamasaheft.eu/ESum040 resolves to https://betamasaheft.eu/manuscripts/ESum040/main etc.

## View all records connected through ontology relations with a given ID

1. GO to http://betamasaheft.eu/ID or use search or browsing (see below) to open the needed record
2. Get the view  : manuscripts - e.g. AG0001 - https://betamasaheft.eu/resources/images/homepage/manuscript.jpg ; works - e.g. LIT1709Kebran - https://betamasaheft.eu/resources/images/homepage/texts.png etc.
3. In the top record menu click Relations; this redirects to "analytic" subpage, e.g. https://betamasaheft.eu/works/LIT1709Kebran/analytic with a graph (**NB not working in the new release**) and a list of relations ![image](https://user-images.githubusercontent.com/17987728/213405059-dc6a0de0-5c52-4ffa-8746-3d7357c8bbb1.png)

## Browse through manuscripts

1. GO to https://betamasaheft.eu/ (or any subpage), in the Navigation bar hover over Manuscripts and select Shelf marks (full list)
![image](https://user-images.githubusercontent.com/17987728/213405627-066ceaf7-f1e6-44be-a590-3487bb9d46c4.png)
2. This takes you to https://betamasaheft.eu/manuscripts/browse, a list of all mss arranged alphabetically by repositories ![image](https://user-images.githubusercontent.com/17987728/213405956-173f59c9-f0ab-44de-ae29-4c8b4b1054c5.png)
3. Clicking on a repository takes to the search results for manuscripts preserved in that repository. E.g. clicking on Bayerische Staatsbibliothek redirects to https://betamasaheft.eu/newSearch.html?searchType=text&mode=any&work-types=mss&reporef=INS0318BSB ![image](https://user-images.githubusercontent.com/17987728/213406246-a0bb95b1-4846-4b9e-8fb8-3b320359d6fa.png)

## Browse through additions in manuscripts
1. GO to https://betamasaheft.eu/additions
2. Get the results of a filtered search arranged by the addition @type; clicking on the type drops down the list of hits, showing shelfmark and the text of the addition when provided 
![image](https://user-images.githubusercontent.com/17987728/213426533-d1335f0d-3341-4d9a-9f7a-50d6c3fd9b66.png)

4. For types with more than 100 hits (more are not printed as otherwise we get a Time Out error https://github.com/BetaMasaheft/Documentation/issues/1944#issuecomment-1119696815 or whenever needed) apply additional filters on the left. 
5. E.g. to find Ownership Notes referring to Antoine d'Abbadie click Ownership Note and select d'Abbadie in the scroll-down menu for persons mentioned. Get the results at https://betamasaheft.eu/additions?type=OwnershipNote&termText=&otherText=&target-pers=https%3A%2F%2Fbetamasaheft.eu%2FPRS1071dAbbadi
![image](https://user-images.githubusercontent.com/17987728/213427940-b92727f7-725b-4888-a8c2-6e95130f54c3.png)


## Quick simple search

1. GO to https://betamasaheft.eu/ 
2. Insert the string in the search field in the middle (for a phrase, "" can be used, e.g. "Miracles of Mary")
3. Click the search button (symbol) OR press Enter 
4. Get to search results page, with the results broke down by entry type https://betamasaheft.eu/simpleSearch.html?query=%22miracles+of+mary%22
![image](https://user-images.githubusercontent.com/17987728/213134725-e44319ad-4cbb-47a5-9547-a6b67ff698a3.png)
5. Scroll to the result that you need and click on the link to get to the requested record  
6. **NB** this search mode was thought to be deprecated once the new Full search works properly, it was "reactivated" because of the issues with the new search after the new release, see https://github.com/BetaMasaheft/Documentation/issues/2219

## Advanced search 

1. GO to https://betamasaheft.eu/ 
2. Press the search symbol (Navigation bar top right) to get to the starting search page https://betamasaheft.eu/simpleSearch.html
3. Click the button Advanced search to get to https://betamasaheft.eu/as.html
4. Insert the string in the search field on the left (for a phrase, "" can be used, tested now with e.g. taammera)
5. Add a tick in "ignore homophones" (for homophones examples see https://betamasaheft.eu/help.html -> Search -> Input) in order to get also such spellings as Taʾammǝra
6. Apply filters as necessary, e.g. 
6a. Under "Search only a type of entity" tick off "Manuscripts" and under drop down menue select data type Manuscripts, for additional filters
6b. Select additional filter, e.g. Minimal number of codicological units -> enter 2
8. Click the SEARCH button (bottom) 
9. Get to search results page, with the results broke down by entry type if applicable https://betamasaheft.eu/as.html?query=%22miracles+of+mary%22&AttestedInType=1&xmlid= 
10. **NEGATIVE** the additional filter (here: Minimal number of codicological units) is not applied to search results in the new release; Many additional filters do not work in the new release (the date range earlier resulted in a scrollable selection of years that was then applied to results, cannot reproduce) 
11. **NB** this search mode was thought to be deprecated once the new Full search works properly, it was "reactivated" because of the issues with the new search after the new release, see https://github.com/BetaMasaheft/Documentation/issues/2219
![image](https://user-images.githubusercontent.com/17987728/213139080-27711862-8ee7-46f2-9487-11352594f294.png)

## New faceted search

1. GO to https://betamasaheft.eu/ 
2. Press the search symbol (Navigation bar top right) to get to the starting search page https://betamasaheft.eu/simpleSearch.html
3. Click the button Full search to get to https://betamasaheft.eu/newSearch.html
4. Select the search type (for text search - Simple search)
5. Insert the string in the search field in the middle, e.g. 'miracles' (for a phrase, "" can **NOT** be used, **one should select 'phrase' as the search mode, but this does not work**)
6. Click the SEARCH button (below the text field on the right)
7. Get to search results page (takes much longer than with the old simple or advanced search, probably because of the complex string) https://betamasaheft.eu/newSearch.html?searchType=text&clavistype=&query=miracles&defaultoperator=OR&mode=none&homophones=on&signature-operator-field=AND&signature-field=&handDesc-operator-field=AND&handDesc-field=&decoDesc-operator-field=AND&decoDesc-field=&binding-operator-field=AND&binding-field=&supportDesc-operator-field=AND&supportDesc-field=&msContent-operator-field=AND&msContent-field=&additions-operator-field=AND&additions-field=&incipit-operator-field=AND&incipit-field=&explicit-operator-field=AND&explicit-field=&colophon-operator-field=AND&colophon-field=&title-operator-field=AND&title-field=&text-operator-field=AND&text-field=&person-operator-field=AND&person-field=&place-operator-field=AND&place-field=
8. Apply filters on the left to limit the results, e.g. Item type -> tick Manuscripts -> click Refine search results
![image](https://user-images.githubusercontent.com/17987728/213146418-3de29547-8d82-40da-9880-f5f270e24a7f.png)
9. Get to the new filtered results page https://betamasaheft.eu/newSearch.html?handDesc-operator-field=AND&binding-operator-field=AND&defaultoperator=OR&signature-operator-field=AND&mode=none&msContent-operator-field=AND&place-operator-field=AND&explicit-operator-field=AND&person-operator-field=AND&supportDesc-operator-field=AND&searchType=text&additions-operator-field=AND&query=miracles&homophones=on&colophon-operator-field=AND&decoDesc-operator-field=AND&incipit-operator-field=AND&title-operator-field=AND&text-operator-field=AND&type-facet=manuscript
10. If needed, apply further filters, e.g. Number of codicological units, click Refine search results ![image](https://user-images.githubusercontent.com/17987728/213147641-9cf3cead-e65a-4f1d-800b-040041d98c49.png)
11. Get to https://betamasaheft.eu/newSearch.html?handDesc-operator-field=AND&supportDesc-operator-field=AND&searchType=text&additions-operator-field=AND&binding-operator-field=AND&query=miracles&homophones=on&defaultoperator=OR&signature-operator-field=AND&colophon-operator-field=AND&mode=none&msContent-operator-field=AND&place-operator-field=AND&decoDesc-operator-field=AND&explicit-operator-field=AND&incipit-operator-field=AND&title-operator-field=AND&text-operator-field=AND&person-operator-field=AND&msPartsCount-facet=2&msPartsCount-facet=24&msPartsCount-facet=3&msPartsCount-facet=4&msPartsCount-facet=6&msPartsCount-facet=7
12. **NB Negative** Does not work for phrases, so inserting 'miracles of mary' in the text field and selecting 'phrase' as search mode yields 0 results
https://betamasaheft.eu/newSearch.html?searchType=text&clavistype=&query=miracles+of+mary&defaultoperator=OR&mode=phrase&homophones=on&signature-operator-field=AND&signature-field=&handDesc-operator-field=AND&handDesc-field=&decoDesc-operator-field=AND&decoDesc-field=&binding-operator-field=AND&binding-field=&supportDesc-operator-field=AND&supportDesc-field=&msContent-operator-field=AND&msContent-field=&additions-operator-field=AND&additions-field=&incipit-operator-field=AND&incipit-field=&explicit-operator-field=AND&explicit-field=&colophon-operator-field=AND&colophon-field=&title-operator-field=AND&title-field=&text-operator-field=AND&text-field=&person-operator-field=AND&person-field=&place-operator-field=AND&place-field=
13. **NB Negative** The new search is over sensitive to spaces, if one adds a space at the end of the search string one gets error https://github.com/BetaMasaheft/Documentation/issues/2015

## Search in specific TEI tags

1. GO to https://betamasaheft.eu/ 
2. Press the search symbol (Navigation bar top right) to get to the starting search page https://betamasaheft.eu/simpleSearch.html
3. Click the button Full search to get to https://betamasaheft.eu/newSearch.html
4. Select the search type (for text search - Simple search)
5. Insert the string in the search field in the middle, e.g. 'miracles' (for a phrase, "" can **NOT** be used, **one should select 'phrase' as the search mode, but this does not work**)
6. Under the text field, click on the three-line-button to get additional options
7. Type additional search parameters (e.g. I want to look for "fine" in handDesc and "Mary" in msContent) ![image](https://user-images.githubusercontent.com/17987728/213151689-79229176-a7c3-4878-8084-11b7a1fb840c.png)
8. Click the search symbol and get the results https://betamasaheft.eu/newSearch.html?searchType=text&clavistype=&query=miracles&defaultoperator=OR&mode=none&homophones=on&signature-operator-field=AND&signature-field=&handDesc-operator-field=AND&handDesc-field=fine&decoDesc-operator-field=AND&decoDesc-field=&binding-operator-field=AND&binding-field=&supportDesc-operator-field=AND&supportDesc-field=&msContent-operator-field=AND&msContent-field=mary&additions-operator-field=AND&additions-field=&incipit-operator-field=AND&incipit-field=&explicit-operator-field=AND&explicit-field=&colophon-operator-field=AND&colophon-field=&title-operator-field=AND&title-field=&text-operator-field=AND&text-field=&person-operator-field=AND&person-field=&place-operator-field=AND&place-field=


## Search: ID lookup (when partial ID is known)

1. GO to https://betamasaheft.eu/ 
2. Press the search symbol (Navigation bar top right) to get to the starting search page https://betamasaheft.eu/simpleSearch.html
3. Click the button Full search to get to https://betamasaheft.eu/newSearch.html
4. In the dropdown, select Lookup Betamasaheft ID
5. In the text field, insert the ID (or its part)
6. Click the search symbol to get to the results https://betamasaheft.eu/newSearch.html?searchType=bmid&clavistype=&query=646&defaultoperator=OR&mode=none&homophones=on&signature-operator-field=AND&signature-field=&handDesc-operator-field=AND&handDesc-field=&decoDesc-operator-field=AND&decoDesc-field=&binding-operator-field=AND&binding-field=&supportDesc-operator-field=AND&supportDesc-field=&msContent-operator-field=AND&msContent-field=&additions-operator-field=AND&additions-field=&incipit-operator-field=AND&incipit-field=&explicit-operator-field=AND&explicit-field=&colophon-operator-field=AND&colophon-field=&title-operator-field=AND&title-field=&text-operator-field=AND&text-field=&person-operator-field=AND&person-field=&place-operator-field=AND&place-field= 
7. **NB NEGATIVE** in the new full search, the search string is always extremely long as contains all possible fields, even if these are not used, possibly resulting in issues such as https://github.com/BetaMasaheft/BetMasWeb/issues/3 ![image](https://user-images.githubusercontent.com/17987728/213144936-117c4dbd-34e8-441d-91f5-c19a4017bb00.png)

## Search: Other Claves lookup 

1. GO to full search page https://betamasaheft.eu/newSearch.html
4. In the dropdown, select Lookup other Clavis ID
5. In the new dropdown, select the Clavis (e.g. CPG) ![image](https://user-images.githubusercontent.com/17987728/213688093-1a013311-9ade-42f0-a577-114d6fb6129d.png)

6. In the text field, insert the ID (exact match only) (e.g. 6127)
7. Click the search symbol to get to the results https://betamasaheft.eu/newSearch.html?searchType=otherclavis&clavistype=CPG&query=6127&defaultoperator=OR&mode=none&homophones=on&signature-operator-field=AND&signature-field=&handDesc-operator-field=AND&handDesc-field=&decoDesc-operator-field=AND&decoDesc-field=&binding-operator-field=AND&binding-field=&supportDesc-operator-field=AND&supportDesc-field=&msContent-operator-field=AND&msContent-field=&additions-operator-field=AND&additions-field=&incipit-operator-field=AND&incipit-field=&explicit-operator-field=AND&explicit-field=&colophon-operator-field=AND&colophon-field=&title-operator-field=AND&title-field=&text-operator-field=AND&text-field=&person-operator-field=AND&person-field=&place-operator-field=AND&place-field= ![image](https://user-images.githubusercontent.com/17987728/213688185-4bc00dff-520d-439e-bd4c-1fce75f26aeb.png)


## Search: Clavis reference lookup (when Clavis reference is known)

1. GO to https://betamasaheft.eu/ 
2. Press the search symbol (Navigation bar top right) to get to the starting search page https://betamasaheft.eu/simpleSearch.html
3. Click the button Full search to get to https://betamasaheft.eu/newSearch.html
4. In the dropdown, select Lookup Clavis Aethiopica Number
5. In the text field, insert the number
6. Click the search symbol to get to the results https://betamasaheft.eu/newSearch.html?searchType=clavis&clavistype=&query=6666&defaultoperator=OR&mode=none&homophones=on&signature-operator-field=AND&signature-field=&handDesc-operator-field=AND&handDesc-field=&decoDesc-operator-field=AND&decoDesc-field=&binding-operator-field=AND&binding-field=&supportDesc-operator-field=AND&supportDesc-field=&msContent-operator-field=AND&msContent-field=&additions-operator-field=AND&additions-field=&incipit-operator-field=AND&incipit-field=&explicit-operator-field=AND&explicit-field=&colophon-operator-field=AND&colophon-field=&title-operator-field=AND&title-field=&text-operator-field=AND&text-field=&person-operator-field=AND&person-field=&place-operator-field=AND&place-field=

## Compare text of a work in manuscripts (when work ID is known)

1. Go to page of the work by inserting its ID in the URL after typing betamasaheft.eu/: betamasaheft.eu/LIT1631Homily
2. Look at red box on the right "This unit, or parts of it, is contained in 13 manuscript records 13 times"
3. Scroll through the list, noting of which manuscripts images are available
4. Open one result in new tab after having noted the number of the msItem of the work, i.e. https://betamasaheft.eu/manuscripts/ESdz010/main / ms_i1.10.3
5. On https://betamasaheft.eu/manuscripts/ESdz010/main, click on "contents" to expand view
6. Scroll until ms_i1.10.3 is found 
7. Note Folio numbers of the msItem: Fols 181va–186vb
8. Open viewer by scrolling to the upper menu and clicking on "images"
9. Go to image 182 to look at text 

## Identify the work ID through text search (when text is available)

1.  Go to https://betamasaheft.eu/ 
2.  Type characteristic 1-3 word combinations from the beginning of the work, i.e. "አንጋረ፡ ፈላስፋ፡" https://betamasaheft.eu/simpleSearch.html?query=%22%E1%8A%A0%E1%8A%95%E1%8C%8B%E1%88%A8%E1%8D%A1+%E1%8D%88%E1%88%8B%E1%88%B5%E1%8D%8B%22
3.  Open one of the manuscripts listed among the results in new tab, i.e. https://betamasaheft.eu/manuscripts/BNFet205/main?hi=%22%E1%8A%A0%E1%8A%95%E1%8C%8B%E1%88%A8%E1%8D%A1%20%E1%8D%88%E1%88%8B%E1%88%B5%E1%8D%8B%22
4.  Scroll the description until the occurence is found ("Fols 26v and following Sentences of the wise philosophers (አንጋረ፡ ፈላስፋ፡ ዘውእቶሙ፡ ጠቢባን።)") 
5.  Go to viewer by clicking on "images" in the upper menu and go to page 27 to read the text
6.  also open the work records referred in other places in the manuscript description (by opening linked title in new tab, i.e. Fols 3r–16r መጽሐፈ፡ ፈላስፋ፡ ጠቢባን፡ (CAe 1925) to got to https://betamasaheft.eu/works/LIT1925Mashaf/main) to compare their info with available text, i.e.  

## Check whether there already is a record for a person named in a manuscript NOT FINISHED :)

1. I have a manuscript in which a Mātewos and his son Kǝnfa Mikāʾel are mentioned. I want to check whether records exist for them, and if not, create them
2. Go to https://betamasaheft.eu/ 
3. Search for Matewos in simple search https://betamasaheft.eu/simpleSearch.html?query=matewos
4. I open all all person records for persons called Matewos in new tab
5. I go to each of the pages and check whether the person might be identical to my Matewos: 

# User Story Lexicon (Dillmann = gez-en)

We collect necessary workflows for users of BM app here. Including steps that require external services or locations. 

## Search for a lemma in the dictionary

1. GO to https://betamasaheft.eu/Dillmann 
2. In the search field, enter the string in Ethiopic, e.g. ሀሰሰ
3. Specify search mode (standard is Normal with homophones) and click on the search icon OR click enter
4. Get search results with all occurrences and a short preview, here https://betamasaheft.eu/Dillmann/?q=%E1%88%80%E1%88%B0%E1%88%B0&mode=none 
![image](https://user-images.githubusercontent.com/17987728/213470593-785821ea-ff5a-49ce-a76d-75d990f3906f.png)
5. Click on the needed lemma (highlighted by a blue background) to get to the record, e.g. clicking on the first suggested lemma gets to https://betamasaheft.eu/Dillmann/?mode=none&q=%E1%88%80%E1%88%B0%E1%88%B0&id=La28f0d661a324ba5a2364e70e63ef317
![image](https://user-images.githubusercontent.com/17987728/213470992-fad4acf1-d6ec-476c-9a46-3de81d9181e0.png)
6. To see attestations in the texts encoded by the Beta masaheft project: click the green button "Load" at the bottom of the entry, under "Attestations in the Beta maṣāḥǝft corpus"
![image](https://user-images.githubusercontent.com/17987728/213471506-1acb5944-ecba-4cb8-8eec-5937d9c1a920.png)



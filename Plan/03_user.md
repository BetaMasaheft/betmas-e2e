# User Story BM

We collect necessary workflows for users of BM app here. Including steps that require external services or locations. 

## 1 BM statistics

1. GO to `https://betamasaheft.eu/` 
2. Scroll down to "Reuse the data"
3. Click on "Beta masaheft in numbers" button
4. Get the popup with the current number of records broke down by type ![image](https://user-images.githubusercontent.com/17987728/213142014-17e6dafe-c2f4-48c5-9eeb-7c3a00f15545.png)

- [x] done

## 2 Open record when ID known

1. GO to `http://betamasaheft.eu/ID` 
2. The xqm knows what the prefix means so takes you to the correct landing page for each entry type, e.g. 
-- person ID PRS9429Tewodros so typing https://betamasaheft.eu/PRS9429Tewodros will resolve to https://betamasaheft.eu/persons/PRS9429Tewodros/main
-- work ID LIT1385Fekkar typing https://betamasaheft.eu/LIT1385Fekkar will resolve to https://betamasaheft.eu/works/LIT1385Fekkar/main
-- mss ID ESum040 typing https://betamasaheft.eu/ESum040 resolves to https://betamasaheft.eu/manuscripts/ESum040/main etc.

- [x] done

## 3 View all records connected through ontology relations with a given ID

1. GO to http://betamasaheft.eu/ID or use search or browsing (see below) to open the needed record
2. Get the view  : manuscripts - e.g. AG0001 - https://betamasaheft.eu/resources/images/homepage/manuscript.jpg ; works - e.g. LIT1709Kebran - https://betamasaheft.eu/resources/images/homepage/texts.png etc.
3. In the top record menu click Relations; this redirects to "analytic" subpage, e.g. https://betamasaheft.eu/works/LIT1709Kebran/analytic with a graph (**NB not working in the new release**) and a list of relations ![image](https://user-images.githubusercontent.com/17987728/213405059-dc6a0de0-5c52-4ffa-8746-3d7357c8bbb1.png)

- [x] done

## 4 Browse through manuscripts

1. GO to https://betamasaheft.eu/ (or any subpage), in the Navigation bar hover over Manuscripts and select Shelf marks (full list)
![image](https://user-images.githubusercontent.com/17987728/213405627-066ceaf7-f1e6-44be-a590-3487bb9d46c4.png)
2. This takes you to https://betamasaheft.eu/manuscripts/browse, a list of all mss arranged alphabetically by repositories ![image](https://user-images.githubusercontent.com/17987728/213405956-173f59c9-f0ab-44de-ae29-4c8b4b1054c5.png)
3. Clicking on a repository takes to the search results for manuscripts preserved in that repository. E.g. clicking on Bayerische Staatsbibliothek redirects to https://betamasaheft.eu/newSearch.html?searchType=text&mode=any&work-types=mss&reporef=INS0318BSB ![image](https://user-images.githubusercontent.com/17987728/213406246-a0bb95b1-4846-4b9e-8fb8-3b320359d6fa.png)

- [x] Done

## 5 Browse through additions in manuscripts

1. GO to https://betamasaheft.eu/additions
2. Get the results of a filtered search arranged by the addition @type; clicking on the type drops down the list of hits, showing shelfmark and the text of the addition when provided 
![image](https://user-images.githubusercontent.com/17987728/213426533-d1335f0d-3341-4d9a-9f7a-50d6c3fd9b66.png)

4. For types with more than 100 hits (more are not printed as otherwise we get a Time Out error https://github.com/BetaMasaheft/Documentation/issues/1944#issuecomment-1119696815 ) - or whenever needed - apply additional filters on the left. 
5. E.g. to find Ownership Notes referring to Antoine d'Abbadie click Ownership Note and select d'Abbadie in the scroll-down menu for persons mentioned. Get the results at https://betamasaheft.eu/additions?type=OwnershipNote&termText=&otherText=&target-pers=https%3A%2F%2Fbetamasaheft.eu%2FPRS1071dAbbadi
![image](https://user-images.githubusercontent.com/17987728/213427940-b92727f7-725b-4888-a8c2-6e95130f54c3.png)

- [ ] Done


## 6 Quick simple search

1. GO to https://betamasaheft.eu/ 
2. Insert the string in the search field in the middle (for a phrase, "" can be used, e.g. "Miracles of Mary")
3. Click the search button (symbol) OR press Enter 
4. Get to search results page, with the results broke down by entry type https://betamasaheft.eu/simpleSearch.html?query=%22miracles+of+mary%22
![image](https://user-images.githubusercontent.com/17987728/213134725-e44319ad-4cbb-47a5-9547-a6b67ff698a3.png)
5. Scroll to the result that you need and click on the link to get to the requested record  
6. **NB** this search mode was thought to be deprecated once the new Full search works properly, it was "reactivated" because of the issues with the new search after the new release, see https://github.com/BetaMasaheft/Documentation/issues/2219

- [ ] Done

## 7 Advanced search 

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

- [ ] Done

## 8 New faceted search

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

- [ ] Done

## 9 Search in specific TEI tags

1. GO to Full search https://betamasaheft.eu/newSearch.html
2. Select the search type (for text search - Simple search)
3. Insert the string in the search field in the middle, e.g. 'miracles' (for a phrase, "" can **NOT** be used, **one should select 'phrase' as the search mode, but this does not work**)
4. Under the text field, click on the three-line-button to get additional options
5. Type additional search parameters (e.g. I want to look for "fine" in handDesc and "Mary" in msContent) ![image](https://user-images.githubusercontent.com/17987728/213151689-79229176-a7c3-4878-8084-11b7a1fb840c.png)
6. Click the search symbol and get the results https://betamasaheft.eu/newSearch.html?searchType=text&clavistype=&query=miracles&defaultoperator=OR&mode=none&homophones=on&signature-operator-field=AND&signature-field=&handDesc-operator-field=AND&handDesc-field=fine&decoDesc-operator-field=AND&decoDesc-field=&binding-operator-field=AND&binding-field=&supportDesc-operator-field=AND&supportDesc-field=&msContent-operator-field=AND&msContent-field=mary&additions-operator-field=AND&additions-field=&incipit-operator-field=AND&incipit-field=&explicit-operator-field=AND&explicit-field=&colophon-operator-field=AND&colophon-field=&title-operator-field=AND&title-field=&text-operator-field=AND&text-field=&person-operator-field=AND&person-field=&place-operator-field=AND&place-field=

- [ ] Done

## 10 Search: ID lookup (when partial ID is known)

1. GO Full search at https://betamasaheft.eu/newSearch.html
2. In the dropdown, select Lookup Betamasaheft ID
3. In the text field, insert the ID (or its part)
4. Click the search symbol to get to the results https://betamasaheft.eu/newSearch.html?searchType=bmid&clavistype=&query=646&defaultoperator=OR&mode=none&homophones=on&signature-operator-field=AND&signature-field=&handDesc-operator-field=AND&handDesc-field=&decoDesc-operator-field=AND&decoDesc-field=&binding-operator-field=AND&binding-field=&supportDesc-operator-field=AND&supportDesc-field=&msContent-operator-field=AND&msContent-field=&additions-operator-field=AND&additions-field=&incipit-operator-field=AND&incipit-field=&explicit-operator-field=AND&explicit-field=&colophon-operator-field=AND&colophon-field=&title-operator-field=AND&title-field=&text-operator-field=AND&text-field=&person-operator-field=AND&person-field=&place-operator-field=AND&place-field= 
5. **NB NEGATIVE** in the new full search, the search string is always extremely long as contains all possible fields, even if these are not used, possibly resulting in issues such as https://github.com/BetaMasaheft/BetMasWeb/issues/3 ![image](https://user-images.githubusercontent.com/17987728/213144936-117c4dbd-34e8-441d-91f5-c19a4017bb00.png)

- [ ] Done

## 11 Search: Clavis Aethiopica reference lookup (when Clavis reference is known)

1. GO to Full search page https://betamasaheft.eu/newSearch.html
2. In the dropdown, select Lookup Clavis Aethiopica Number
3. In the text field, insert the number, e.g. 6666
6. Click the search symbol to get to the results https://betamasaheft.eu/newSearch.html?searchType=clavis&clavistype=&query=6666&defaultoperator=OR&mode=none&homophones=on&signature-operator-field=AND&signature-field=&handDesc-operator-field=AND&handDesc-field=&decoDesc-operator-field=AND&decoDesc-field=&binding-operator-field=AND&binding-field=&supportDesc-operator-field=AND&supportDesc-field=&msContent-operator-field=AND&msContent-field=&additions-operator-field=AND&additions-field=&incipit-operator-field=AND&incipit-field=&explicit-operator-field=AND&explicit-field=&colophon-operator-field=AND&colophon-field=&title-operator-field=AND&title-field=&text-operator-field=AND&text-field=&person-operator-field=AND&person-field=&place-operator-field=AND&place-field=

- [ ] Done

## 12 Search: Other Claves lookup 

1. GO to full search page https://betamasaheft.eu/newSearch.html
4. In the dropdown, select Lookup other Clavis ID
5. In the new dropdown, select the Clavis (e.g. CPG) ![image](https://user-images.githubusercontent.com/17987728/213688093-1a013311-9ade-42f0-a577-114d6fb6129d.png)

6. In the text field, insert the ID (exact match only) (e.g. 6127)
7. Click the search symbol to get to the results https://betamasaheft.eu/newSearch.html?searchType=otherclavis&clavistype=CPG&query=6127&defaultoperator=OR&mode=none&homophones=on&signature-operator-field=AND&signature-field=&handDesc-operator-field=AND&handDesc-field=&decoDesc-operator-field=AND&decoDesc-field=&binding-operator-field=AND&binding-field=&supportDesc-operator-field=AND&supportDesc-field=&msContent-operator-field=AND&msContent-field=&additions-operator-field=AND&additions-field=&incipit-operator-field=AND&incipit-field=&explicit-operator-field=AND&explicit-field=&colophon-operator-field=AND&colophon-field=&title-operator-field=AND&title-field=&text-operator-field=AND&text-field=&person-operator-field=AND&person-field=&place-operator-field=AND&place-field= ![image](https://user-images.githubusercontent.com/17987728/213688185-4bc00dff-520d-439e-bd4c-1fce75f26aeb.png)

- [ ] Done

## 13 View manuscript images

1. Go to the page of a manuscript e.g. https://betamasaheft.eu/ESap028
2. In the top menu, click Images
3. The page https://betamasaheft.eu/manuscripts/ESap028/viewer opens, with MIRADOR viewer and images visible
4. To get to the main entry view, select Entry in the top menu, you will be redirected to https://betamasaheft.eu/manuscripts/ESap028/main

- [ ] Done

## 14 View work text

1. Go to the page of a work record e.g. https://betamasaheft.eu/works/LIT1709Kebran/main
2. In the top menu, click Text
3. The page  https://betamasaheft.eu/works/LIT1709Kebran/text opens ![image](https://user-images.githubusercontent.com/17987728/213690747-1932659a-ea06-4f5e-aa3d-3bc888d9f1e7.png)

- [ ] Done

## 15 See the witnesses of a work

1. Go to page of the work e.g. https://betamasaheft.eu/works/LIT1631Homily/main
2. See the red box on the right "This unit, or parts of it, is contained in 13 manuscript records 13 times"
3. For more details on the witness, click on the underlined shelfmark in the list ![image](https://user-images.githubusercontent.com/17987728/213691491-f9800406-4217-4a2f-9372-0b7cab6d65e8.png)
4. The manuscript page opens https://betamasaheft.eu/manuscripts/ESdz010/main

- [ ] Done

## 16 View manuscript table of content

1. Open manuscript page, e.g. https://betamasaheft.eu/manuscripts/ESdz010/main 
2. Click on "contents" to expand view ![image](https://user-images.githubusercontent.com/17987728/213691920-fa5669c9-cfc3-48b4-a1c0-57a36bde7fcf.png)
3. Click other eventual boxes to expand view ![image](https://user-images.githubusercontent.com/17987728/213692081-8d35b9b2-c583-468f-b5b1-416146a88252.png)
4. To get more information about a work contained, click on the underlined work title ![image](https://user-images.githubusercontent.com/17987728/213692227-07a5aca4-2a9e-4a3e-951c-6148f8bb278e.png)
5. You are redirected to the work, here https://betamasaheft.eu/works/LIT1544Gebrah/main 

- [ ] Done

# User Story Guidelines

## 17 Look up transcription guidelines

1. Go to https://betamasaheft.eu/Guidelines/
2. In the search field (top right) type *transcription* and click Search
3. Get to https://betamasaheft.eu/Guidelines/?q=transcription 
4. Scroll (and go to second page) to find the fitting title, here Transliteration Principles, click to get to https://betamasaheft.eu/Guidelines/?q=transcription&start=6&id=transliteration-principles 

# User Story Lexicon (Dillmann = gez-en)

We collect necessary workflows for users of BM app here. Including steps that require external services or locations. 

## 18 Search for a lemma in the dictionary

1. GO to https://betamasaheft.eu/Dillmann 
2. In the search field, enter the string in Ethiopic, e.g. ሀሰሰ
3. Specify search mode (standard is Normal with homophones) and click on the search icon OR click enter
4. Get search results with all occurrences and a short preview, here https://betamasaheft.eu/Dillmann/?q=%E1%88%80%E1%88%B0%E1%88%B0&mode=none 
![image](https://user-images.githubusercontent.com/17987728/213470593-785821ea-ff5a-49ce-a76d-75d990f3906f.png)
5. Click on the needed lemma (highlighted by a blue background) to get to the record, e.g. clicking on the first suggested lemma gets to https://betamasaheft.eu/Dillmann/?mode=none&q=%E1%88%80%E1%88%B0%E1%88%B0&id=La28f0d661a324ba5a2364e70e63ef317
![image](https://user-images.githubusercontent.com/17987728/213470992-fad4acf1-d6ec-476c-9a46-3de81d9181e0.png)

- [ ] Done

## 19 View attestations

1. Go to the page of the lemma https://betamasaheft.eu/Dillmann/lemma/La28f0d661a324ba5a2364e70e63ef317
2. Under "Attestations in the Beta maṣāḥǝft corpus": click "Load" 
![image](https://user-images.githubusercontent.com/17987728/213471506-1acb5944-ecba-4cb8-8eec-5937d9c1a920.png)

- [ ] Done

## 20 View the lemma in the scan of Dillmann's Lexicon

1. Go to the page of the lemma https://betamasaheft.eu/Dillmann/lemma/La28f0d661a324ba5a2364e70e63ef317
2. On top, click on the symbol with the book and page numbers ![image](https://user-images.githubusercontent.com/17987728/213696358-45670d05-c85a-4533-a905-a2a526439a68.png)
3. You are redirected to the relevant page (external domain) https://www.tau.ac.il/~hacohen/Lexicon/pp583.html

- [ ] Done

## 21 Parsing and linking

1. In Ethiopic examples in the lemma or in the attestations, hover over any word in Ethiopic to see the list of further options ![image](https://user-images.githubusercontent.com/17987728/213689018-43cd1a75-86ca-4fd6-bce6-cac390c7f081.png)
2. Click on "search in the Online Lexicon" to get to the search results for this lemma https://betamasaheft.eu/Dillmann/?mode=fuzzy&q=%E1%88%88%E1%8A%AA  OR
3. Click on "Geez Morphological Parser" to get to the parser page at https://betamasaheft.eu/morpho?query=%E1%88%B0%E1%88%8B%E1%88%9B ![image](https://user-images.githubusercontent.com/17987728/213695502-8f1921dd-1013-4f03-a8d9-5116e4e99a50.png)
 OR
4. Doublie click on the term to get Alpheios results ![image](https://user-images.githubusercontent.com/17987728/213695287-1b849032-98ca-4cd9-94ad-ca43a98af7da.png)

- [ ] Done



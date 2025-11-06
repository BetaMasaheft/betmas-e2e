# BM Admin User Story

We collect necessary workflows for admin users here. Including steps that require external services or locations.

**NOTE**: Admin tests introduce side effects (create/edit users) and should not be automated in E2E tests. These scenarios are documented for manual testing only. 

## 1 Create new user

1. GO to exist dashboard http://betamasaheft.eu:8080/exist/apps/dashboard/index.html
2. Login in as admin
3. Open User Manager
4. Add user (Username, Password), assigning relevant groups (Cataloguers, Editors, lexicon)
5. Save

- [ ] Done

## 2 Edit user (NEGATIVE)

1. GO to exist dashboard http://betamasaheft.eu:8080/exist/apps/dashboard/index.html
2. Login in as admin
3. Open User Manager
4. Select User
5. Change groups / password etc.
6. Save
7. **GET ERROR MESSAGE** - and a broken user as a result https://github.com/BetaMasaheft/jinntec/issues/1

- [ ] Done

## 3 Manual expand

1. Make sure that the XML file version in BetMasData is the same as in GitHub master
2. In Oxygen or in Exide, open makeExpand module (located in BetMasService)
3. Change the path in the context for the collection or the document (e.g. let $context :=

(doc('/db/apps/BetMasData/manuscripts/ParisBNF/abb/BNFabb66B.xml')//t:TEI
)
3. Run the script; this generates the relevant XML in "expanded" repo on the production server

- [ ] Done
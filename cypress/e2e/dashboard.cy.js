describe('Dashboard', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://www.cheapshark.com/api/1.0/stores", { fixture: "allStores.json" })

    cy.intercept("GET", "https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=5", { fixture: "store1.json" })
    cy.intercept("GET", "https://www.cheapshark.com/api/1.0/deals?storeID=7&pageSize=5", { fixture: "store7.json" })
    cy.intercept("GET", "https://www.cheapshark.com/api/1.0/deals?storeID=8&pageSize=5", { fixture: "store8.json" })
    cy.intercept("GET", "https://www.cheapshark.com/api/1.0/deals?storeID=11&pageSize=5", { fixture: "store11.json" })
    cy.intercept("GET", "https://www.cheapshark.com/api/1.0/deals?storeID=25&pageSize=5", { fixture: "store25.json" })
    cy.intercept("GET", "https://www.cheapshark.com/api/1.0/deals?storeID=27&pageSize=5", { fixture: "store27.json" })
    
    cy.visit('http://localhost:3000/')

  })

  it('User should be able to view dashboard', () => {
  })
})
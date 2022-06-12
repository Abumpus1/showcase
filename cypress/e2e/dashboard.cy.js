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
    cy.get("nav")
      .contains("SaveGame")
      .get("a")
        .eq(0).contains("HOME")
      .get("a")
        .eq(1).contains("SEARCH")

    cy.contains("Top Deals by Store")
    
    cy.get(".dashboard")
      .get(".store-deal-box")
        .should("have.length", 6)
      .get(".dash-game-card")
        .should("have.length", 30)

    cy.get(".store-deal-box").eq(0).children(".dash-game-card")
        .should("have.length", 5)

    cy.get(".store-deal-box").eq(0).children("img")
      .should("have.attr", "src").should("eq", "https://www.cheapshark.com/img/stores/banners/0.png")

    cy.get(".dash-game-card").eq(0)
      .contains("Deadly Premonition 2: A Blessing in Disguise")
    cy.get(".dash-game-card").eq(0)
      .contains("$39.99")
    cy.get(".dash-game-card").eq(0)
      .contains("$27.99")
  })

  
})
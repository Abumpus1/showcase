describe('Dashboard', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://www.cheapshark.com/api/1.0/stores", { fixture: "allStores.json" })

    cy.intercept("GET", "https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=5", { fixture: "store1.json" })
    cy.intercept("GET", "https://www.cheapshark.com/api/1.0/deals?storeID=7&pageSize=5", { fixture: "store7.json" })
    cy.intercept("GET", "https://www.cheapshark.com/api/1.0/deals?storeID=8&pageSize=5", { fixture: "store8.json" })
    cy.intercept("GET", "https://www.cheapshark.com/api/1.0/deals?storeID=11&pageSize=5", { fixture: "store11.json" })
    cy.intercept("GET", "https://www.cheapshark.com/api/1.0/deals?storeID=25&pageSize=5", { fixture: "store25.json" })
    cy.intercept("GET", "https://www.cheapshark.com/api/1.0/deals?storeID=27&pageSize=5", { fixture: "store27.json" })

    cy.intercept("GET", "https://www.cheapshark.com/api/1.0/deals?pageSize=30", { fixture: "searchDefault.json" })

    cy.visit('http://localhost:3000/')

  })

  it('User should be able to view dashboard', () => {
    cy.get("nav")
      .get("img").should("have.attr", "alt").should("eq", "Save Game icon")
    cy.contains("SaveGame")
      .get("a")
        .eq(0).contains("HOME")
      .get("a")
        .eq(1).contains("SEARCH")

    cy.contains("Top Deals by Store")
    
    cy.get(".dashboard")
      .children(".store-deal-box")
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

  it("Should be able to navigate between dashboard and search page", () => {
    cy.get(".active").contains("HOME")

      cy.get("a").eq(1).click()
      cy.contains("Search All Deals")

    cy.get(".active").contains("SEARCH")

      cy.get("a").eq(0).click()
      cy.contains("Top Deals by Store")

    cy.get(".active").contains("HOME")
  })

  it("Each game title should have a link to redirect to a store page", () => {
    cy.get("h4").eq(0).parent("a")
      .should("have.attr", "href").should("eq", "https://www.cheapshark.com/redirect?dealID=JgjbtVkgfWGW3AzYrPr6yyqxR2R1FZ3n4F9UrN2ZGJc%3D")
  })

  it("Should see a 404 page on a bad url", () => {
    cy.visit("http://localhost:3000/fake/url/path")

    cy.contains("Error 404, Page not found.")
  })
})
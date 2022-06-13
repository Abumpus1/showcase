describe('Search', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://www.cheapshark.com/api/1.0/stores", { fixture: "allStores.json" })

    cy.intercept("GET", "https://www.cheapshark.com/api/1.0/deals?pageSize=30", { fixture: "searchDefault.json" })
    cy.intercept("GET", "https://www.cheapshark.com/api/1.0/deals?title=witcher&pageSize=30", { fixture: "searchTitle.json" })
    cy.intercept("GET", "https://www.cheapshark.com/api/1.0/deals?upperPrice=10&pageSize=30", { fixture: "searchPrice.json" })
    cy.intercept("GET", "https://www.cheapshark.com/api/1.0/deals?title=xcom&upperPrice=10&pageSize=30", { fixture: "searchBoth.json" })
    
    cy.visit('http://localhost:3000/search')
  })

  it('User should be able to view search page', () => {
    cy.get("h2").contains("Search All Deals")

    cy.get(".search-page").children().should("have.length", 2)

    cy.get(".title-search").should("exist")
    cy.get(".title-search-label").contains("TITLE:")
    cy.get(".price-limit-box").contains("Price Limit: No limit")
    cy.get(".price-slider").should("have.value", 50)
    cy.get(".apply-filters-btn").contains("APPLY")
    cy.get(".search-game-card").should("have.length", 5)
    
    cy.get(".store-icon").eq(0)
      .should("have.attr", "src").should("eq", "https://www.cheapshark.com/img/stores/icons/24.png")
    cy.get(".game-image").eq(0)
      .should("have.attr", "src").should("eq", "https://cdn.cloudflare.steamstatic.com/steam/apps/629820/capsule_sm_120.jpg?t=1649877867")
    cy.get(".search-game-card").eq(0)
      .contains("Maneater")
    cy.get(".game-old-price").eq(0)
      .contains("$39.99")
    cy.get(".game-sale-price").eq(0)
      .contains("$0.00")
    cy.get(".sale-percent").eq(0)
      .contains("-100%")

  })

  it("Should be able to search by game title", () => {

  })

  it("Should also be able to sort by price limit", () => {
    
  })

  it("Should show error message if no results found", () => {
    
  })
})
describe('Search', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://www.cheapshark.com/api/1.0/stores", { fixture: "allStores.json" })

    cy.intercept("GET", "https://www.cheapshark.com/api/1.0/deals?pageSize=30", { fixture: "searchDefault.json" })
    cy.intercept("GET", "https://www.cheapshark.com/api/1.0/deals?title=witcher&pageSize=30", { fixture: "searchTitle.json" })
    cy.intercept("GET", "https://www.cheapshark.com/api/1.0/deals?title=fakeGameTitle&pageSize=30", { body: [] })
    
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
    cy.get(".title-search").type("witcher").type("{enter}")

    cy.get(".search-game-card").should("have.length", 5)
    
    cy.get(".store-icon").eq(0)
      .should("have.attr", "src").should("eq", "https://www.cheapshark.com/img/stores/icons/10.png")
    cy.get(".game-image").eq(0)
      .should("have.attr", "src").should("eq", "https://cdn.cloudflare.steamstatic.com/steam/apps/20920/capsule_sm_120.jpg?t=1646335562")
    cy.get(".search-game-card").eq(0)
      .contains("The Witcher 2: Assassins of Kings Enhanced Edition")
    cy.get(".game-old-price").eq(0)
      .contains("$19.99")
    cy.get(".game-sale-price").eq(0)
      .contains("$2.99")
    cy.get(".sale-percent").eq(0)
      .contains("-85%")

  })

  it.skip("Should also be able to sort by price limit", () => {
 /*
    Ok so, it seems I can't mess with sliders at all in cypress, 
    there is documentation on how to adjust sliders, does not seem to work for me

    I think the cause is because react holds the value of the slider in state,
    so when I adjust it via how cypress suggests, it just resets to value of state.

    due to time constrains, I will just leave this for now

    below are a handful of the many variations of things I tried
 */


    // const arrows = '{leftArrow}'.repeat(40); 
    
    // cy.get('.price-slider')
    // .click({ release: false })
    // .type(arrows)


    // cy.get('input[type=range]').invoke('val', 10).trigger('change', {force: true})

    // cy.get(".price-slider").trigger("mousedown").trigger("mousemove", {clientX: 0})
    
  })

  it("Should show error message if no results found", () => {
    cy.get(".title-search").type("fakeGameTitle").type("{enter}")
    cy.contains("No results found! Please consider adjusting your search filters.")
  })
})
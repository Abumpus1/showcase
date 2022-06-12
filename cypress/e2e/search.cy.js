describe('Search', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://www.cheapshark.com/api/1.0/stores", { fixture: "allStores.json" })
    
    cy.visit('http://localhost:3000/search')
  })

  it('passes', () => {
  })
})
// describe('empty spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })



describe("Checking the counter application", ()=>{
  it("should go to application URL", ()=>{
    cy.visit("http://localhost:3000");
  })

  it("should render my application", ()=>{
    cy.visit("http://localhost:3000");
    cy.get("h3").should("exist") //expect (h3Tag).toBeInTheDocument()
    cy.get(".increament").should("exist");
    cy.get(".decreament").should("exist");
  });


  it("should be able to increamnent the counter", ()=>{

    cy.visit("http://localhost:3000");
    cy.get("h3").should("have.text", " The current count is 0");
    cy.get(".increament").click();
    cy.get("h3").should("have.text", "The current count is 1");

  });

  it("should be able to increament the counter by 3", ()=>{
    cy.visit("http://localhost:3000");
    cy.get("h3").should("have.text", "The current count is 0");
    cy.get(".increament").click();
    cy.get(".increament").click();
    cy.get(".increament").click();
    cy.get("h3").should("have.text", "The current count is 3")
  });


});


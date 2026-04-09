describe("Authentication Test", () => {

  it("User can login", () => {

    cy.visit("https://my-portfolio-frontend-ur2g.onrender.com/#/signup")

    cy.get("input[placeholder='firstname']").type("Test")
    cy.get("input[placeholder='lastname']").type("User")
    cy.get("input[placeholder='email']").type("test100@test.com")
    cy.get("input[placeholder='password']").type("123456")

    cy.get("button").click()


    cy.visit("https://my-portfolio-frontend-ur2g.onrender.com/#/signin")

    cy.get("input[placeholder='email']").type("test100@test.com")
    cy.get("input[placeholder='password']").type("123456")

    cy.get("button").click()


    cy.visit("https://my-portfolio-frontend-ur2g.onrender.com/#/dashboard")

    cy.contains("Dashboard")

  })

})
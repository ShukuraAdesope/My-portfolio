describe("Authentication Test", () => {

  it("User can login", () => {

    cy.visit("https://my-portfolio-frontend-ur2g.onrender.com/signin")

    cy.get("input")
      .first()
      .type("test@test.com")

    cy.get("input[type='password']")
      .type("123456")

    cy.get("button")
      .click()

    cy.contains("login success")

  })

})
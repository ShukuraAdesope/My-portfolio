describe("Authentication Test", () => {

 it("User can signup and login", () => {

  const email = `user${Date.now()}@test.com`

  // SIGNUP
  cy.visit("https://my-portfolio-frontend-ur2g.onrender.com/#/signup")

  cy.get("input[placeholder='firstname']").type("Test")

  cy.get("input[placeholder='lastname']").type("User")

  cy.get("input[placeholder='email']").type(email)

  cy.get("input[placeholder='password']").type("123456")

  cy.contains("Signup").click()


  // manually go to login page (no redirect needed)
  cy.visit("https://my-portfolio-frontend-ur2g.onrender.com/#/signin")


  // LOGIN
  cy.get("input[placeholder='email']").type(email)

  cy.get("input[placeholder='password']").type("123456")

  cy.contains("Login").click()


  // go to dashboard
  cy.visit("https://my-portfolio-frontend-ur2g.onrender.com/#/dashboard")

  cy.contains("Dashboard")

 });

});
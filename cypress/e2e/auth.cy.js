describe("Authentication Test", () => {

 it("User can signup and login", () => {

  const email = "user" + Date.now() + "@test.com";

  // signup
  cy.visit("https://my-portfolio-frontend-ur2g.onrender.com/#/signup");

  cy.get("input[placeholder='firstname']").type("Test");
  cy.get("input[placeholder='lastname']").type("User");
  cy.get("input[placeholder='email']").type(email);
  cy.get("input[placeholder='password']").type("123456");

  cy.contains("Signup").click();


  // login
  cy.visit("https://my-portfolio-frontend-ur2g.onrender.com/#/signin");

  cy.get("input[placeholder='email']").type(email);
  cy.get("input[placeholder='password']").type("123456");

  cy.contains("Login").click();


  // dashboard
  cy.visit("https://my-portfolio-frontend-ur2g.onrender.com/#/dashboard");

  cy.contains("Dashboard");

 });

});
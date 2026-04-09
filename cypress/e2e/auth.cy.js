describe("Authentication Test", () => {

 it("User can signup and login", () => {

  const email = "test" + Date.now() + "@mail.com";
  const password = "123456";

  // SIGNUP
  cy.visit("https://my-portfolio-frontend-ur2g.onrender.com/#/signup");

  cy.get("input[placeholder='firstname']")
   .should("exist")
   .clear()
   .type("Test");

  cy.get("input[placeholder='lastname']")
   .should("exist")
   .clear()
   .type("User");

  cy.get("input[placeholder='email']")
   .should("exist")
   .clear()
   .type(email);

  cy.get("input[placeholder='password']")
   .should("exist")
   .clear()
   .type(password);

  cy.contains("button","Signup")
   .should("exist")
   .click();


  // SIGNIN
  cy.visit("https://my-portfolio-frontend-ur2g.onrender.com/#/signin");

  cy.get("input[placeholder='email']")
   .should("exist")
   .clear()
   .type(email);

  cy.get("input[placeholder='password']")
   .should("exist")
   .clear()
   .type(password);

  cy.contains("button","Login")
   .should("exist")
   .click();


  // DASHBOARD
  cy.visit("https://my-portfolio-frontend-ur2g.onrender.com/#/dashboard");

  cy.contains("Dashboard")
   .should("be.visible");

 });

});
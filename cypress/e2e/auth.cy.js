describe("Authentication Test", () => {

  it("User can access dashboard when logged in", () => {

    // visit signin page first
    cy.visit("https://my-portfolio-frontend-ur2g.onrender.com/#/signin")

    // simulate login by saving token
    cy.window().then((win) => {
      win.localStorage.setItem("token", "fake-test-token")
    })

    // go to dashboard
    cy.visit("https://my-portfolio-frontend-ur2g.onrender.com/#/dashboard")

    // confirm dashboard loads
    cy.contains("Dashboard")

    // confirm login message shows
    cy.contains("Login successful")

  })

})
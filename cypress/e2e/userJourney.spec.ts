describe('user journey', () => {


    it('user travel into the app...', () => {

        cy.visit('http://localhost:3000');
        
        // entering a valid city name
        cy.getByData("intro-search-input").as("s-input").should("exist").type("tehran{enter}").wait(10000)
        cy.getByData("main").should("exist")

        // navigate between heads
            //default hour show up
        cy.getByData("hourly").should("exist")
            //navigate to daily
        cy.getByData("main-bottom-head2").click()
        cy.getByData("daily").should("exist")
            //navigate to detail
        cy.getByData("main-bottom-head3").click()
        cy.getByData("detail").should("exist")
            //navigate to hourly
        cy.getByData("main-bottom-head1").click()
        cy.getByData("hourly").should("exist")

        //lets try another city and hit the button
        cy.getByData("main-section-top-button").click()
        cy.get("@s-input").should("exist")

        //enter invalid city name
        cy.get("@s-input").type("belbelbela{enter}").wait(10000)
        cy.getByData("intro-error").should("exist").contains("city")
        
        //enter valid 
        cy.get("@s-input").type("los angles{enter}").wait(10000)
        cy.getByData("main").should("exist")
    });




})
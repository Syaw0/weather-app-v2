import InputSearch from "../../src/components/input-search"

describe('search input', () => { 

    beforeEach(()=>{
        cy.mount(<InputSearch/>)
    })

    it('when click on the icon search box , if input was empty show the error', () => {
        
        cy.getByData("intro-search-icon").click()
        cy.getByData("intro-error").should("be.visible")
    });


    it('when Press Enter on the input , if input was empty show the error', () => {
        
        cy.getByData("intro-search-input").type("{enter}")
        cy.getByData("intro-error").should("be.visible")
    });

    it('if error exist then user type and enter , error msg will fade out', () => {
        cy.getByData("intro-search-input").type("{enter}")
        cy.getByData("intro-error").should("be.visible")
        cy.getByData("intro-search-input").type("helllooo {enter}")
        cy.getByData("intro-error").should("not.be.visible")
    });

})
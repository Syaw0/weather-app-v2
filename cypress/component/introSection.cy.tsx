import IntroSection from "../../src/components/introSection"



describe('intro section', () => {

    beforeEach(()=>{
        cy.mount(<IntroSection/>)
    })

    it('if user type something in input and then click or press enter input fade and loader show up', () => {
        cy.getByData("intro-search-input").type("hellllo{enter}").should("not.exist")
    });


})
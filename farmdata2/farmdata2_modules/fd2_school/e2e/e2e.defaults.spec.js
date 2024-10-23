describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })
      
    it("Check the page header", () => {
        cy.get("[data-cy=page-header]")
            .should("have.text","Harvest Report")
    })

    it("Check the default start and end dates", () => {
        cy.get("[data-cy=start-date]")
            .should("have.value", "2020-05-05")
        cy.get("[data-cy=end-date]")
            .should("have.value", "2020-05-15")
    })

    it("Check the crop dropdown contents", () => {
        // Check first crop (index 0)
        cy.get("[data-cy=crop-select]")
            .children()
            .eq(0)
            .invoke('text')
            .then(text => text.trim())
            .should('eq', 'ARUGULA')
        
        // Check fifth crop (index 4)
        cy.get("[data-cy=crop-select]")
            .children()
            .eq(4)
            .invoke('text')
            .then(text => text.trim())
            .should('eq', 'BEAN-FAVA')
        
        // Check last crop
        cy.get("[data-cy=crop-select]")
            .children()
            .then($children => {
                const lastIndex = $children.length - 1
                cy.get("[data-cy=crop-select]")
                    .children()
                    .eq(lastIndex)
                    .invoke('text')
                    .then(text => text.trim())
                    .should('eq', 'ZUCCHINI')  // Note: We may need to verify this value too
            })
    })
})
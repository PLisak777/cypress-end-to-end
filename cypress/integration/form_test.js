describe('Testing form inputs', () => { 
    // context and describe are interchangeable
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('adding text to inputs and submitting form', () => {
        cy.get('[data-cy=name]')
        .type('Phil')
        .should('have.value', 'Phil'); //Assertion is the 'core' of the test
        // Create test for email
        cy.get('[data-cy=email]')
        .type('test@email.com')
        .should('have.value', 'test@email.com');
        // Create test for text area
        cy.get('[data-cy=motivation]')
        .type('I want to help')
        .should('have.value', 'I want to help')
        // Create test for dropdown
        cy.get('[data-cy=positions]')
        .select('Tabling')
        .should('have.value', 'Tabling');
        // Create test for checkbox
        cy.get('[data-cy=terms]')
        .check()
        .should('be.checked');
        // Create test for button
        cy.get('[data-cy=submit]')
        .click()
        })
    });

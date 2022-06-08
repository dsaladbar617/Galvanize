describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    // cy.visit('https://example.cypress.io')

    // cy.contains('type').click()

    // cy.url().should('include', '/commands/actions')

    // cy.get('.action-email')
    //   .type('fake@email.com')
    //   .should('have.value', 'fake@email.com')

    cy.visit('http://www.google.com')

    cy.get('input[name="q"').type('Platform One');

    cy.get('form').submit();

    cy.url().should('include', 'search');
  })
})
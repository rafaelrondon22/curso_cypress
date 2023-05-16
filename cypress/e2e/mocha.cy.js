describe('Primera suite de pruebas', () => {
    const profesor = 'Fabrizio'

    it('Primer test con mocha', () => {
        cy.log('Primer test con cypress con ' + profesor)
    })

    it('Segundo test con mocha', () => {
        cy.log('Segundo test con cypress  con ' + profesor)
    })

    it('Tercer test con mocha', () => {
        cy.log('Tercer test con cypress  con ' + profesor)
    })
})

it.skip('Tercer test con mocha', () => {
    cy.log('Tercer test con cypress  con ' + profesor)
})


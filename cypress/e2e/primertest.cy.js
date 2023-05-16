/// <reference types="cypress" />

describe('Primer test con cypress', () => {
    const numeroRandom = Math.floor(Math.random() * 1000)

    it('Deberia registrarse satisfactoriamente en la aplicacion', () => {
        cy.log(numeroRandom)
        cy.log(`${numeroRandom}`)
        cy.visit('/')
        cy.get('#user').type(`pushingit${numeroRandom}`)
        cy.get('#pass').type('123456!')
        cy.get('[value="Male"]').check({ force: true })
        cy.get('#day').select('11')
        cy.get('#month').select('March')
        cy.get('#year').select(40)
        cy.get('#submitForm').click()
    })
})

describe('Busca por voos', () => {

    context('Não logado', () => {

        const massaVoos = require('../../fixtures/massaVoos')

        beforeEach(() => {
            cy.visit('/')
        })

        it('Buscar voos entre São Paolo e Cairo - Simples', () => {

            cy.title().should('eq', 'BlazeDemo')

            cy.get('select.form-inline')
                .eq(0)
                .select('São Paolo')

            cy.get('select.form-inline')
                .eq(1)
                .select('Cairo')

            cy.get('.btn.btn-primary')
                .click()


            cy.title().should('eq', 'BlazeDemo - reserve')

            cy.get('.container h3')
                .should('have.text', 'Flights from São Paolo to Cairo: ')

        })

        massaVoos.array.forEach(({ origem, destino }) => {
            it(`Buscar voos entre ${origem} e ${destino} - Data Driven`, () => {
                cy.title().should('eq', 'BlazeDemo')

                cy.get('select.form-inline')
                    .eq(0)
                    .select(origem)

                cy.get('select.form-inline')
                    .eq(1)
                    .select(destino)

                cy.get('.btn.btn-primary')
                    .click()


                cy.title().should('eq', 'BlazeDemo - reserve')

                cy.get('.container h3')
                    .should('have.text', `Flights from ${origem} to ${destino}: `)
            })
        });

    })
})
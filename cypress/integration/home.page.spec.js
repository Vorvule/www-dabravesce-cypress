/// <reference types='cypress' />

context('dabravesce.by base page main content', () => {

    specify('Home page main content', () => {

        cy.visit('https://dabravesce.by')
        cy.title().should('eq', 'Дабравесце – Мф. 1')

        cy.get('#MenuView p').should('have.text', 'ДАБРАВЕСЦЕ')
        cy.get('#WrapperLeft p').should('have.text', 'ЗМЕСТ')

        cy.get('#MenuIcon').should('contain.text', 'Меню')
        cy.get('#ShareIcon').should('contain.text', 'Шырыць')

        cy.get('[onclick="site.page.next(false)"]').should('contain.text', 'Назад')
        cy.get('[onclick="site.page.next(true)"]').should('contain.text', 'Далей')

        cy.get('#SearchIcon').should('contain.text', 'Пошук')

    })

})

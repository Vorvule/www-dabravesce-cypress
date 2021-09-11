/// <reference types='cypress' />

context('dabravesce.by side menu and chapter content', () => {

    specify('Gospel\'s of Matthew tome, book and item visible content', () => {
        for (let i = 0; i < 28; i++) {
            cy.visit('https://dabravesce.by/index.html?i=0-0-' + i.toString())
            cy.get('#TomeInfo').should('have.text', 'Новы Запавет')
            cy.get('#BookInfo').should('have.text', 'Святое Евангелле паводле Матфея')
            cy.get('#ItemInfo').should('have.text', 'Раздзел ' + (i + 1).toString())
        }
    })

    specify('Gospel\'s of Mark tome, book and item visible content', () => {
        for (let i = 0; i < 16; i++) {
            cy.visit('https://dabravesce.by/index.html?i=0-1-' + i.toString())
            cy.get('#TomeInfo').should('have.text', 'Новы Запавет')
            cy.get('#BookInfo').should('have.text', 'Святое Евангелле паводле Марка')
            cy.get('#ItemInfo').should('have.text', 'Раздзел ' + (i + 1).toString())
        }
    })

    specify('Gospel\'s of Luke tome, book and item visible content', () => {
        for (let i = 0; i < 24; i++) {
            cy.visit('https://dabravesce.by/index.html?i=0-2-' + i.toString())
            cy.get('#TomeInfo').should('have.text', 'Новы Запавет')
            cy.get('#BookInfo').should('have.text', 'Святое Евангелле паводле Лукі')
            cy.get('#ItemInfo').should('have.text', 'Раздзел ' + (i + 1).toString())
        }
    })

    specify('Gospel\'s of John tome, book and item visible content', () => {
        for (let i = 0; i < 21; i++) {
            cy.visit('https://dabravesce.by/index.html?i=0-3-' + i.toString())
            cy.get('#TomeInfo').should('have.text', 'Новы Запавет')
            cy.get('#BookInfo').should('have.text', 'Святое Евангелле паводле Іаана')
            cy.get('#ItemInfo').should('have.text', 'Раздзел ' + (i + 1).toString())
        }
    })

})
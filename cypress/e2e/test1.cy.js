describe('QAuto login and header/footer check', () => {
  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto'
      }
    });
  });
  it('should find all header buttons', () => {
    cy.get('header').within(() => {
      cy.contains('Home').should('be.visible');
      cy.contains('About').should('be.visible');
      cy.contains('Contacts').should('be.visible');
      cy.contains('Guest log in').should('be.visible');
      cy.contains('Sign In').should('be.visible');
    });
  });
  it('should find all footer links and buttons', () => {
  cy.scrollTo('bottom');
  cy.get('a[href="https://www.facebook.com/Hillel.IT.School"]').should('exist');
  cy.get('a[href="https://t.me/ithillel_kyiv"]').should('exist');
  cy.get('a[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]').should('exist');
  cy.get('a[href="https://www.instagram.com/hillel_itschool/"]').should('exist');
  cy.get('a[href="https://www.linkedin.com/school/ithillel/"]').should('exist');
  cy.contains('a', 'ithillel.ua').should('be.visible');
  cy.contains('a', 'support@ithillel.ua').should('be.visible');
});
  });
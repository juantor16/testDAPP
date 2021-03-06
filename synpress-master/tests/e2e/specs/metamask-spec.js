describe('Metamask', () => {
  context('Test commands', () => {
    // todo: clear the state of extension and test different combinations of setupMetamask with private key & custom network
    it(`setupMetamask should finish metamask setup using secret words`, () => {
      cy.setupMetamask(
        'gym change type surround seat craft snow sock slot quick gas snap',
        'rinkeby',
        'SomeTest',
      ).then(setupFinished => {
        expect(setupFinished).to.be.true;
      });
    });
    it(`acceptMetamaskAccess should accept connection request to metamask`, () => {
      cy.visit('https://metamask.github.io/test-dapp/');
      cy.get('#connectButton').click();
      cy.acceptMetamaskAccess().then(connected => {
      expect(connected).to.be.true;
      });
      cy.get('#signTypedDataV3').click(); 
      cy.confirmMetamaskSignatureRequest()     
    });
    
  });
});

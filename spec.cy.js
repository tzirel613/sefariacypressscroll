describe('Sefaria Scrolling Test', () => {
  it('visits the Sefaria page, scrolls down, and makes sure the HTML TITLE has changed', () => {
    cy.visit('https://www.sefaria.org.il/Leviticus.15.1')

/************************************************************** 
    Akiva, I purposefully left in some artifacts (commented out) that I didn't end up using, just so that you could see some of my thought process. The first thing I noticed was that the url changes when you scroll, so I used that in the assertion. But ultimately, the HTML TITLE tag is, IMHO, a more obvious thing to check.
*****************************************************************/
 
    // Set the current URL - NOT IN USE
    // let currentUrl;
    // cy.url().then(url => {
    //   currentUrl = url;

    // Set a variable to the current HTML TITLE, for comparison in the assertion.
    let currentTitle;  // Declare the variable
    cy.title().then(title => {
      currentTitle = title; // get the title and set a variable with the value



/************************************************************** 
    Scrolling doesn't always cause the title to change in Cypress. I have read that Cypress works asynchronously, and it might be that the assertion is happening before the scrolling action is completed. I stuck in an extra scroll and a wait to allow the title change to catch up with the assertion. Perhaps not the most elegant, but, hey, it worked.
*****************************************************************

    Another fun bit: scrollTo('bottom') didn't work because the window isn't scrollable. I found the scrollable element (.textColumn) and then the scrolling worked.
*****************************************************************/


      // Scroll Down
      cy.get('.textColumn').scrollTo(100,1000) // Scroll a bit 
      cy.wait(8000)  // wait a bit
      cy.get('.textColumn').scrollTo(0,5000).then(($textcol) => {
      debugger }) // scroll some more - by now the title will have changed. I used the debugger along the way just to see what it does.

      // Set the new URL and compare - NOT IN USE
      // cy.url().should(newUrl => {
      //   expect(currentUrl).to.not.equal(newUrl);

      // Set the new title and compare. New title should not be the same as the original title if the page has successfully scrolled.
      cy.title().should(newTitle => {
        expect(currentTitle).to.not.equal(newTitle); 

      });
    });
  })
})

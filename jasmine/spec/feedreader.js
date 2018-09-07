/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('has a URL defined', () => {
           /*for(let feed of allFeeds) {
             expect(feed.url).toBeDefined();
             expect(feed.url.lrngth).not.toBe(0);
           }*/

           //trying to use forEach for practice
           allFeeds.forEach(feed => {
             expect(feed.url).toBeDefined();
             expect(feed.url.lrngth).not.toBe(0);
           })
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('has a name defined', () => {
           allFeeds.forEach(feed => {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           })
         });
    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', () => {

      /* TODO: Write a test that ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */

       it('element is hidden by default', () => {
         const element = document.querySelector('body');
         expect(element.classList.contains('menu-hidden')).toBe(true);
       });

       /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */

        it('changes visibility', () => {
          const element = document.querySelector('body');
          const visibility = document.querySelector('.menu-icon-link');

          // ensures menu is displayed
          visibility.click();
          expect(element.classList.contains('menu-hidden')).toBe(false);

          //ensures menu is hidden
          visibility.click();
          expect(element.classList.contains('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', () => {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         beforeEach(done => {

           // empty out all previous entries

           const feed = $('.feed');
           feed.empty();

           //ensures that loadfeed will complete before the test
           loadFeed(0, done);
         });

         // there is at least a single entry element within the feed container

         it('at least single entry element', () => {
           const enteryElement = $('.entry');
           expect(enteryElement.length).toBeGreaterThan(0);
         });
       });

    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', () => {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    });

}());

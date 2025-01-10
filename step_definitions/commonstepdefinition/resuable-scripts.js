const { I } = inject();
const { appConfig } = require("../../helpers/envHelper.js");
const locators = require("../../locators/commonLocators.js");

Given('navigate to ebay homepage', async() => {
  I.amOnPage(appConfig.appUrl);
  I.waitForVisible(locators.fields.shopByCategory,30);
});


When('search for {string}', async (searchTitle) => {
  I.fillField(locators.fields.searchBox,searchTitle);
});

When('select first book from search results', async () => {
  I.click(locators.fields.firstBook);
});

Then('verify cart has been updated and displays the number of items as {string}', async (itemCount) => {
  const modifiedLocator = locators.fields.cartWithItems(itemCount);
  I.waitForElement(modifiedLocator, 10);
  I.seeElement(modifiedLocator);
});

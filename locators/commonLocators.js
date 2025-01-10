module.exports = {
  fields: {
    shopByCategory: "//button[contains(text(),'Shop by category')]",
    searchBox: "//input[@aria-label='Search for anything']",
    firstBook: "//ul[contains(@class,'srp-results')]/li[1]/div/div",
    cartWithItems: (itemCount) => `//a[@alt="Your shopping cart contains ${itemCount} item${itemCount === '1' ? '' : 's'}"]`
  }
};

const { I } = inject();
const { appConfig } = require("../../helpers/envHelper.js");
const axios = require('axios');
const assert = require('assert');


When('I send a GET request to the Coindesk API', async () => {
    const url = appConfig.apiUrl;
    const response = await axios.get(url);
    I.storeResponse = response.data;
});

When('I extract the BPI data from the response', () => {
    const { bpi } = I.storeResponse;
    I.bpiData = bpi;
});

When('I verify the response contains exactly 3 BPIs', () => {
    const bpiKeys = Object.keys(I.bpiData);
    I.assertEqual(bpiKeys.length, 3, 'There should be 3 BPIs');
});

When('I verify the BPIs include USD, GBP, and EUR', () => {
    const bpiKeys = Object.keys(I.bpiData);
    I.say(bpiKeys);
    assert(bpiKeys.includes('USD'), 'BPI should include USD');
    assert(bpiKeys.includes('GBP'), 'BPI should include GBP');
    assert(bpiKeys.includes('EUR'), 'BPI should include EUR');
});

When('I verify the GBP description is {string}', (expectedDescription) => {
    I.assertEqual(I.bpiData.GBP.description, expectedDescription, `GBP description should match '${expectedDescription}'`);
});
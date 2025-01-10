const { parsed: appConfig } = require('dotenv').config();
Before((test) =>{
    const noOfRetries = appConfig.numberOfRetries;
    test.retries(noOfRetries);
});
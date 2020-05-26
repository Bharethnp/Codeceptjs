Feature('Launch');
Before((I) => {
    I.amOnPage("https://www.google.com");
})
Scenario('test google page', (I) => {

    
    I.waitForElement("#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input");
    I.saveScreenshot("save.jpg");
    I.fillField("#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input","Favicon");
    I.pressKey("Enter");
    I.waitForElement("#rso > div:nth-child(1) > div > div.r > a > h3");
    I.moveCursorTo("#rso > div:nth-child(1) > div > div.r > a > h3");
    I.click("#rso > div:nth-child(1) > div > div.r > a > h3");
    I.saveScreenshot("save1.jpg");
    
});

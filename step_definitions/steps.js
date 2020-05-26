const { I } = inject();
// Add in your custom step files

Given('I launch google chrome', () => {
  
    I.amOnPage("https://www.google.com");
});

Then('I type something in google search', () =>{

    I.waitForElement("#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input");
    I.saveScreenshot("save.jpg");
    I.fillField("#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input","Favicon");
});

Then('I press enter', () => {

    I.pressKey('Enter');
});

const { I } = inject();

When('click on {string} button by exact text', async (text) => {
  I.say(`Clicking on button with text: ${text}`)
  I.click(text);
});

When('press key {string}', async (key) => {
  I.pressKey(key);
});

When('verify page contains {string}', async (text) => {
  I.say(text);
  I.waitForText(text, 30);
  I.see(text);
});

When('wait till new window appears', async () => {
  I.waitForNumberOfTabs(1, 30);
  I.switchToNextTab(1);
});

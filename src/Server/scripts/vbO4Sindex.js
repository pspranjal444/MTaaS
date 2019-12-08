const wdio = require("webdriverio");
const assert = require("assert");

const db = require('./database');
const f = require('./file');
console.log('HERE');
const opts = {
    port: 4723,
    capabilities: {
    platformName: "Android",
    platformVersion: "8",
    deviceName: "Android Emulator",
    app: __dirname + '/apps/' + 'ApiDemos-debug.apk',
    appPackage: "io.appium.android.apis",
    appActivity: ".view.TextFields",
    automationName: "UiAutomator2"
  }
};


async function main () {
  // console.log('Reached')
  var fileName = f.createFile(123, 123, 123, 'hello');
  // console.log('FILE NAMEEEEEEEEE', fileName.name);
  // console.log('RESULTTTTTT', fileName.result);
  const client = await wdio.remote(opts);
  const field = await client.$("android.widget.EditText");
  await field.setValue("Hello World!");
  // let screenshot = await client.takeScreenshot();
  const value = await field.getText();
  assert.equal(value,"Hello World!");
  if(value=="Hello World!"){
    console.log(true);
    db.store(fileName, "Check Text for text field", true);
  }
  //console.log('HELLOHELLOHELLO', assert.equal(value,"Hello World!"));
  await client.deleteSession();
  process.exit();
}

main();
return;

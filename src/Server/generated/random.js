const wdio = require("webdriverio");
const assert = require("assert");
const db = require("./database");
const f = require("./file");
const opts = {
port: 4723,
   capabilities: {
   platformName: "Android",
platformVersion: "8",
deviceName: "Android Emulator",
app: __dirname + "/apps/" + "ApiDemos-debug.apk",
appPackage: "io.appium.android.apis",
appActivity: ".view.TextFields",
automationName: "UiAutomator2"
}
};

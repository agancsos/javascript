function toggleFreeze() {
    var badgeTextObject = browser.browserAction.getBadgeText({});
    badgeTextObject.then(extractBadgeText);    
}

function extractBadgeText(text) {
    if(text == "OFF" || text == "") {
        browser.browserAction.setBadgeText({text : "ON"});
        browser.browserAction.setBadgeBackgroundColor({color : "green"});
        stopLoad();
    }
    else {
        browser.browserAction.setBadgeText({text : "OFF"});
        browser.browserAction.setBadgeBackgroundColor({color : "red"});
        enableLoad();
    }

}

function stopLoad() {
    var myCode = "window.stop()";
    var windowInfo = browser.tabs.executeScript({
        code: myCode
      });
      windowInfo.then(dummy);
}

function enableLoad() {
    var myCode = "location.reload()";
    var windowInfo = browser.tabs.executeScript({
        code: myCode
      });
      windowInfo.then(dummy);
}

function dummy(result) {

}
browser.browserAction.onClicked.addListener(toggleFreeze);
document.addEventListener("DOMContentLoaded", function(){
    browser.browserAction.setBadgeText({text : "OFF"});
    browser.browserAction.setBadgeBackgroundColor({color : "red"});
});
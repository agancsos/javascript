function toggleFreeze() {
    var badgeText = chrome.browserAction.getBadgeText({}, function(text){
        if(text == "OFF" || text == "") {
            chrome.browserAction.setBadgeText({text : "ON"});
            chrome.browserAction.setBadgeBackgroundColor({color : "green"});
            stopLoad();
        }
        else {
            chrome.browserAction.setBadgeText({text : "OFF"});
            chrome.browserAction.setBadgeBackgroundColor({color : "red"});
            enableLoad();
        }    
    });
}

function stopLoad() {
    var myCode = "window.stop()";
    var windowInfo = chrome.tabs.executeScript({
        code: myCode
      });
}

function enableLoad() {
    var myCode = "location.reload()";
    var windowInfo = chrome.tabs.executeScript({
        code: myCode
      });
}

chrome.browserAction.onClicked.addListener(toggleFreeze);
document.addEventListener("DOMContentLoaded", function(){
    chrome.browserAction.setBadgeText({text : "OFF"});
    chrome.browserAction.setBadgeBackgroundColor({color : "red"});
});
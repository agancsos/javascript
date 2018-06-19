function toggleBlackout() {
    var myCode = `
        if(document.getElementsByTagName('body')[0].style.backgroundColor != ''){
            document.getElementsByTagName('body')[0].style.backgroundColor=''

            var tags = ['div', 'li', 'table', 'form', p, span, a];

            for(tag in tags) {
                for(instance in document.getElementsByTagName(tags[tag])){
                    document.getElementsByTagName(tags[tag])[instance].style.backgroundColor = '';
                    document.getElementsByTagName(tags[tag])[instance].style.color = '';
                }
            }
        }
        else{
            document.getElementsByTagName('body')[0].style.backgroundColor='black'

            var tags = ['div', 'li', 'table', 'form', p, span, a];

            for(tag in tags) {
                for(instance in document.getElementsByTagName(tags[tag])){
                    document.getElementsByTagName(tags[tag])[instance].style.backgroundColor = 'black';
                    document.getElementsByTagName(tags[tag])[instance].style.color = 'black';
                }
            }
        }`;
    var windowInfo = browser.tabs.executeScript({
        code: myCode,
        allFrames: true        
      });
      windowInfo.then(dummy);
}
function dummy() {

}
browser.browserAction.onClicked.addListener(toggleBlackout);

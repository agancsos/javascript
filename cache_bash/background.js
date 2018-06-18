/**
 * This method clears the cache for the browser
 */
function clearCache(){
	console.log("Clearing cache...");
	CacheStorage.open();
	CacheStorage.delete();
	CacheStorage.close();
	localStorage.clear();
	console.log("Cache cleared...");
}

browser.browserAction.onClicked.addListener(clearCache);

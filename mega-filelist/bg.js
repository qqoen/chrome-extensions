window.onload = main;

function main() {
	chrome.browserAction.onClicked.addListener((tab) => {
		sendMsg();
	});
}

function sendMsg(msg) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, msg);
	});
}


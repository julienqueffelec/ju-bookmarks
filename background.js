chrome.browserAction.onClicked.addListener(function(tab) {
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
			let urls = xmlhttp.responseText.split('\n');
			urls.forEach(url =>
				chrome.tabs.create({
					url
				})
			);
		}
	};
	xmlhttp.open('GET', 'urls.txt', true);
	xmlhttp.send();
});

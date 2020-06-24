chrome.extension.onMessage.addListener((_, sender) => {
	const linksStr = getMegaLinks();
	const str = location.href + ':\n\n' + linksStr;
	console.log(str);
});


function getMegaLinks() {
	const node = document.querySelector('.text');
	const re = /https:\/\/mega\.nz\/[\d\w#!\-_]+/g;

	const links = node.innerHTML.match(re);

	let str = ''

	links.forEach((link) => {
		let fmt;

		if (link.length > 70) {
			fmt = link.slice(0, 70);
		} else {
			fmt = link;
		}

		str += fmt + '\n';
	});

	return str;
}


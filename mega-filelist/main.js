chrome.extension.onMessage.addListener((_, sender) => {
	const filenames = getFileList();
	//const str = location.href + ':\n\n' + filenames.join('\n');
	//console.log(str);
	console.log('(' + filenames.join(',') + ')');
});


function getFileList() {
	const cls = 'tranfer-filetype-txt';
	const nodes = document.querySelectorAll('.' + cls);
	const filenames = [];
	const rjCodeRe = /RJ\d{6}/g;

	nodes.forEach((node) => {
		if (node.innerText != null && node.innerText !== '') {
			const codeParts = node.innerText.match(rjCodeRe);

			if (codeParts != null && codeParts.length > 0) {
				filenames.push('\'' + codeParts[0] + '\'');
			}
			//filenames.push(node.innerText);
		}
	});

	return filenames;
}

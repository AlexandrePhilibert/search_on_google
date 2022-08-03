let url = new URL(window.location.href);
let params = new URLSearchParams(url.search);
let q = params.get('q');

if (window.location.host.startsWith('duckduckgo.com')) {
	let duckbar = document.getElementById('duckbar_static');
	
	let duckbarItem = document.createElement('li');
	duckbarItem.className = 'zcm__item';
	
	let searchGoogleLink = document.createElement('a');
	searchGoogleLink.className = 'zcm__link  js-zci-link';
	searchGoogleLink.innerText = 'Search on Google';
	searchGoogleLink.href = `https://www.google.com/search?q=${q}`;
	
	duckbarItem.appendChild(searchGoogleLink);
	duckbar.appendChild(duckbarItem);
}

if (window.location.host.startsWith('www.google.com')) {
    const bar = document.getElementsByClassName('MUFPAc')[0];

	const item = document.createElement('div');	
	item.className = 'hdtb-mitem';
	
	const itemLink = document.createElement('a');
	itemLink.innerText = 'Search on DuckDuckGo';
	itemLink.href = `https://duckduckgo.com/?q=${q}`;

	item.appendChild(itemLink);
	bar.appendChild(item);
}

// Keyboard navigation
document.body.addEventListener("keypress", function(e) {
	if (e.key === "g") {
		window.location.href= `https://www.google.com/search?q=${q}`;
	}
	if (e.key === "d") {
		window.location.href = `https://duckduckgo.com/?q=${q}`;
	}
});

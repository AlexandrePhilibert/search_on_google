let duckbar = document.getElementById('duckbar_static');

let duckbarItem = document.createElement('li');
duckbarItem.className = 'zcm__item';

let url = new URL(window.location.href);
let params = new URLSearchParams(url.search);
let q = params.get('q');

let searchGoogleLink = document.createElement('a');
searchGoogleLink.className = 'zcm__link  js-zci-link';
searchGoogleLink.innerText = 'Search on Google';
searchGoogleLink.href = `https://www.google.com/search?q=${q}`;

duckbarItem.appendChild(searchGoogleLink);
duckbar.appendChild(duckbarItem);
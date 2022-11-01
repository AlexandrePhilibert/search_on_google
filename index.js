const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const q = params.get("q").replace(/site:.*/, "");

if (window.location.host.startsWith("www.google.com")) {
  const bar = document.getElementsByClassName("MUFPAc")[0];

  const item = document.createElement("div");
  item.className = "hdtb-mitem";

  const itemLink = document.createElement("a");
  itemLink.innerText = "Search on DuckDuckGo";
  itemLink.href = `https://duckduckgo.com/?q=${q}`;

  item.appendChild(itemLink);
  bar.appendChild(item);
}

if (window.location.host.startsWith("duckduckgo.com")) {
  const duckbar = document.getElementById("duckbar_static");

  const duckbarItem = document.createElement("li");
  duckbarItem.className = "zcm__item";

  const searchGoogleLink = document.createElement("a");
  searchGoogleLink.className = "zcm__link  js-zci-link";
  searchGoogleLink.innerText = "Search on Google";
  searchGoogleLink.href = `https://www.google.com/search?q=${q}`;

  duckbarItem.appendChild(searchGoogleLink);
  duckbar.appendChild(duckbarItem);
}

const commandContainer = document.createElement("div");
commandContainer.style.backgroundColor = "#333";
commandContainer.style.left = 0;
commandContainer.style.bottom = 0;
commandContainer.style.padding = "4px";
commandContainer.style.position = "fixed";

const commands = {
  gg: () => {
    window.location.href = `https://www.google.com/search?q=${q}`;
  },
  gs: () => {
    window.location.href = `https://www.google.com/search?q=${q}+site:stackoverflow.com`;
  },
  gr: () => {
    window.location.href = `https://www.google.com/search?q=${q}+site:reddit.com`;
  },
  dd: () => {
    window.location.href = `https://duckduckgo.com/?q=${q}`;
  },
  ds: () => {
    window.location.href = `https://duckduckgo.com/?q=${q}+site:stackoverflow.com`;
  },
  dr: () => {
    window.location.href = `https://duckduckgo.com/?q=${q}+site:reddit.com`;
  },
};

let pressedKeys = [];

document.body.addEventListener("keyup", (e) => {
  // Do not register the keyboard event if the user is typing in an input
  if (e.target.nodeName === "INPUT") {
    return;
  }

  if (e.key === "Escape") {
    pressedKeys = "";
  } else {
    pressedKeys += e.key;
  }

  if (commands[pressedKeys]) {
    commands[pressedKeys]();

    pressedKeys = "";
  }

  commandContainer.innerText = pressedKeys;
  if (pressedKeys === "") {
    document.body.removeChild(commandContainer);
  } else {
    document.body.appendChild(commandContainer);
  }
});

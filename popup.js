document.addEventListener("DOMContentLoaded", async () => {
  const button = document.getElementById("toggle");

  chrome.storage.sync.get("shortcutsEnabled", ({ shortcutsEnabled }) => {
    button.style.backgroundColor = shortcutsEnabled ? "green" : "red";
  });

  button.addEventListener("click", () => {
    chrome.storage.sync.get("shortcutsEnabled", ({ shortcutsEnabled }) => {
      chrome.storage.sync.set({ shortcutsEnabled: !shortcutsEnabled });

      button.style.backgroundColor = !shortcutsEnabled ? "green" : "red";
    });
  });
});

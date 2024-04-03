// ==UserScript==
// @name        MUO Anti Ad
// @description Removes the anti ad block
// @match       *://*.makeuseof.com/*
// @version      1.0
// @author       edrf12
// @updateURL    https://github.com/edrf12/userscripts/raw/main/MUO-Anti-Ad.user.js
// @downloadURL  https://github.com/edrf12/userscripts/raw/main/MUO-Anti-Ad.user.js
// ==/UserScript==

window.addEventListener("keydown", (input) => {
	if (input.key == "Escape") {
		document.querySelector("body > div.fEy1Z2XT")?.remove();
		document.body.removeAttribute("style");
		document.documentElement.removeAttribute("style");
	}
});

// ==UserScript==
// @name        Image rotator
// @description Rotate images in browser by pressing [ and ]
// @include     /^https?:\/\/[a-z0-9./_=?&-]*(jpg|png)[a-z0-9./_=?&-]*/
// @version      1.0
// @author       edrf12
// @updateURL    https://github.com/edrf12/userscripts/raw/main/Image-rotator.user.js
// @downloadURL  https://github.com/edrf12/userscripts/raw/main/Image-rotator.user.js
// ==/UserScript==

let current = 0;

let states = [
	[0, 0],
	[-90, 10],
	[180, 0],
	[90, -10],
];

if (document.querySelector("body > img") == null) {
	return;
}

window.addEventListener("keydown", (input) => {
	if (input.key == "[") {
		current == 3 ? (current = 0) : (current += 1);
		document.querySelector(
			"body > img"
		).style.transform = `rotate(${states[current][0]}deg) translate(${states[current][1]}%, 0)`;
	} else if (input.key == "]") {
		current == 0 ? (current = 3) : (current -= 1);
		document.querySelector(
			"body > img"
		).style.transform = `rotate(${states[current][0]}deg) translate(${states[current][1]}%, 0)`;
	}
});

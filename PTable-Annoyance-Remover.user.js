// ==UserScript==
// @name        PTable Annoyance Remover
// @description Removes the don't like ads banner and the bottom bar
// @match       *://ptable.com/*
// @version      1.0
// @author       edrf12
// @updateURL    https://github.com/edrf12/userscripts/raw/main/PTable-Annoyance-Remover.user.js
// @downloadURL  https://github.com/edrf12/userscripts/raw/main/PTable-Annoyance-Remover.user.js
// ==/UserScript==

let elements = document.querySelectorAll(
	"#Notice, body > header > label:nth-child(7), #Wide, body > header > label:nth-child(9), #TopbarToggle, body > header > label:nth-child(11), #SidebarToggle, body > header > label:nth-child(13), #DarkButton, body > footer"
);

elements.forEach((elmnt) => {
	elmnt.style.setAttribute("visibility", "hidden")
});

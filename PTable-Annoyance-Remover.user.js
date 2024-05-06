// ==UserScript==
// @name        PTable Annoyance Remover
// @description Removes the don't like ads banner and the bottom bar
// @match       *://ptable.com/*
// @version      1.2
// @author       edrf12
// @updateURL    https://github.com/edrf12/userscripts/raw/main/PTable-Annoyance-Remover.user.js
// @downloadURL  https://github.com/edrf12/userscripts/raw/main/PTable-Annoyance-Remover.user.js
// ==/UserScript==

let elements = document.querySelectorAll(
	"body > header > label:nth-child(7), #Wide, body > header > label:nth-child(9), #TopbarToggle, body > header > label:nth-child(11), #SidebarToggle, body > header > label:nth-child(13), #DarkButton"
);

document.querySelector("#Notice").remove()
document.querySelector("body > footer").remove()

elements.forEach((elmnt) => {
	elmnt.style.setProperty("visibility", "hidden")
});

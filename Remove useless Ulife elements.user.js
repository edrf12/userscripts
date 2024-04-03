// ==UserScript==
// @name        Remove useless Ulife elements
// @description Removes elements I find useless in Ulife to avoid me getting annoyed
// @include       /https?:\/\/(social|student|aluno).(ulife|unp).*/
// @require https://gist.githubusercontent.com/edrf12/e81c1a9ab12a7b9046f0b6cc592b59ba/raw/70cd866df8f8b60879c667194d736004ae5b6eae/waitForElement.js
// @version      1.0
// @author       edrf12
// @updateURL    https://github.com/edrf12/userscripts/raw/main/Remove-useless-Ulife-elements.user.js
// @downloadURL  https://github.com/edrf12/userscripts/raw/main/Remove-useless-Ulife-elements.user.js
// ==/UserScript==

const elements = [
	"#helphero-dom",
	"#recommended_container",
	"#spot",
	"#QSIFeedbackButton-target-container",
	"body>div.QSIFeedbackButton",
	"body>div:nth-child(97)",
	"body>div.ht-skip",
	"#bot_zenvia",
	"div.hlp-modal.hlp-modal-overlay",
];

for (var i in elements) {
	waitForElement(elements[i]).then((elm) => {
		elm.remove();
	});
}

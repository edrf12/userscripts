// ==UserScript==
// @name        Fix Ulife login
// @description Will fix Ulife login when Ulife is accessed through student.ulife.com and will redirect if already logged in
// @include       /https?://(www\.)?ulife.com.br/*/
// @version      1.0
// @author       edrf12
// @updateURL    https://github.com/edrf12/userscripts/raw/main/Fix-Ulife-Login.user.js
// @downloadURL  https://github.com/edrf12/userscripts/raw/main/Fix-Ulife-Login.user.js
// ==/UserScript==

if (
	window.location.toString().toLowerCase().includes("login") &&
	window.location.search != ""
) {
	window.location.href = "https://www.ulife.com.br/LOGIN.aspx";
} else if (
	window.location.toString().includes("login") ||
	window.location.toString().includes("Login")
) {
	window.location.href = "https://student.ulife.com.br/StudentHome#pageIndex=1";
}

"use strict";
window.onload = function() {
	if (!location.search) location.search = Date.now();
	if (typeof(_i) == "undefined" || _i.length != 4) return;
	let d = "溪雨";
	let w = `收集者：<a style="text-decoration:underline"target="_blank"href="https://space.bilibili.com/2043336670">${d}</a>`;
	for (const i of document.querySelectorAll(".title")) i.innerHTML = `${_i[0]}&nbsp;v${_i[1].join('.')}`;
	for (const i of document.querySelectorAll(".info"))
	document.getElementById("main").style.display = "";
	function cnymd(time) {
		let d = new Date(time * 1e3);
		return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
	}
};

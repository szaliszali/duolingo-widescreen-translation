// ==UserScript==
// @name         Duolingo widescreen translation
// @namespace    http://your.homepage/
// @version      0.1
// @description  Duolingo translation optimized for widescreen displays
// @author       You
// @match        https://www.duolingo.com/translation/*
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('div#zendesk-wrapper {display:none;}');
addGlobalStyle('div#document-hider {width:100% !important;}');

addGlobalStyle('#app.wiki-translation.wide main.main-left {max-width:100%;; padding: 0 10px 0 10px;}');
addGlobalStyle('#app.wiki-translation.wide main.main-left section div.responsive-container {max-width:100%; }');
addGlobalStyle('#app.wiki-translation.wide main.main-left section div.document-header-new {width:98%;width:calc(100% - 20px); }');

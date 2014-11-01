// ==UserScript==
// @name         Duolingo widescreen translation
// @namespace    http://your.homepage/
// @version      0.1
// @description  Duolingo translation optimized for widescreen displays
// @author       You
// @match        https://www.duolingo.com/*
// @grant        none
// ==/UserScript==

var root='#app.wiki-translation.wide ';
var mroot=root + 'main.main-left ';
var iroot=root + '.lesson-like-document.hide-instructions.view-original ';

var mt='div.machine-translation';

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle(root + 'div#zendesk-wrapper {display:none;}');

addGlobalStyle(root + 'div#document-hider {width:100%;}');

addGlobalStyle(mroot + '{max-width:100%; padding: 0 10px 0 10px;}');
addGlobalStyle(mroot + 'section div.responsive-container {max-width:100%; }');
addGlobalStyle(mroot + 'section div.document-header-new {width:98%;width:calc(100% - 20px); }');

addGlobalStyle(iroot + '.document-header-new { height: 72px; }');
addGlobalStyle(iroot + '#document-omnibox { margin-top: 92px; }');
addGlobalStyle(iroot + '#document-omnibox hr { display:none; }');

$('body').on("focus","div.no-translation",function() {
    var h4=$(this).find('h4.toggle-machine-translation');
    if(h4.length===0) return;

    var machine=$(this).find(mt);
    if(machine.length>0) return;

    if(!h4.hasClass("active")) {
        h4.click();
    }
});

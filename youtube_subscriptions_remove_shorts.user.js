// ==UserScript==
// @name         Youtube Subscriptions Remove Shorts
// @namespace
// @version      0.1
// @description  Remove Shorts from Youtube Subscriptions
// @author       @nekvinder
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

function hideShorts () {

    var shorts = document.querySelectorAll('ytd-grid-video-renderer');
    for (var i = 0; i < shorts.length; i++) {
        var short = shorts[i];
        var title = short.querySelector('a#video-title').title;
        var link = short.querySelector(".yt-simple-endpoint").href
        if (title.indexOf('Shorts') > -1 || link.indexOf('shorts') > -1) {
            short.remove();
        }
    }

}

document.addEventListener('DOMContentLoaded', hideShorts);
document.addEventListener('yt-navigate-finish', hideShorts);
document.addEventListener('scroll', hideShorts);

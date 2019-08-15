// 'use strict';
const DOMNodeCollection = require("./dom_node_collection.js");

// document.addEventListener("DOMContentLoaded", function () {
window.fns = [];    
// [1, 2, 3]
window.$l = function (element, fn) {
    if (fn) {
        window.fns.push(fn);
    }
    const items = [];
    const dnc = new DOMNodeCollection();

    if (element instanceof HTMLElement) {
        items.push(element);
        dnc.HTMLElements = items;
        
    } else {
        const selected = document.querySelectorAll(element);
        const arrayItems = Array.from(selected);
        dnc.HTMLElements = arrayItems;
    }  
    if (window.fns.length === 0) {
        alert('the document is ready');
    }
    return dnc;
}

window.DOMNodeCollection = DOMNodeCollection;



// $(".inner").append("<p>Test</p>");

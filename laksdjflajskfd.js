// ==UserScript==
// @name         amazon_90
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://www.amazon.co.jp/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require      https://cdn.jsdelivr.net/gh/localforage/localforage/dist/localforage.min.js
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  let page = document.querySelectorAll(".s-pagination-strip a");
  let last = page[page.length - 1];
  if (last && last.innerText === "下一页") {
     setTimeout(function(){window.open(last.href,'_parent')}, 2000);
  } else {
    localStorage.wife = new Date().toLocaleDateString();
  }
  localforage
    .getItem("allWife")
    .then(function (v) {
      return v ? new Set(v) : new Set([]);
    })
    .then(function (v) {
      localforage.getItem("wife").then(function (value) {
        value = value ? new Set(value) : new Set([]);
        let imgs = document.querySelectorAll("img.s-image");
        for (let img of imgs) {
          let src = img.src.replace(/\._AC\S+_/, "");
          src = src.split("/").reverse()[0];
          if (!v.has(src)) {
            value.add(src);
          }
          v.add(src);
        }
        localforage.setItem("allWife", Array.from(v));
        localforage.setItem("wife", Array.from(value));
      });
    });
  //  let obj = {};
  //  localforage
  //    .iterate(function (value, key, iterationNumber) {
  //      obj[key] = value;
  //    })
  //    .then(function () {
  //      console.log(Object.keys(obj).length);
  //      console.log(obj);
  //    });
})();

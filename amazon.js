// ==UserScript==
// @name         amazon_all
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://www.amazon.co.jp/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
// Tampermonkey
(function () {
  "use strict";
  window.onload = function () {
            console.log('OK')
          function pageHandler(e) {
      e.preventDefault();
     // window.location = e.target.href;
           //   console.log(e.target.href)
              window.open(e.target.href, '_parent')
    }
    let page = document.querySelectorAll(".s-pagination-strip a");
     let last = page[page.length-1];
      let result = document.querySelector('.s-no-outline')
      let a = document.createElement('a')
      a.setAttribute('href', last.href)
a.setAttribute('target', '_parent')
a.setAttribute('class', 'a-size-medium-plus a-color-base a-text-bold')
      let atext = document.createTextNode('下一页')
      a.appendChild(atext)
      result.appendChild(a)
 //     if(last.innerText === '下一页')  { setTimeout(function(){window.open(last.href,'_parent')}, 2000);}
    for (let a of page) {
      if (a.href) {
        a.onclick = pageHandler;
      }
    }
    let ele = document.querySelectorAll(".s-image");
    let wife = localStorage.wife;
    // console.log("当前:", wife);
    let old = (localStorage[localStorage.wife] &&
      localStorage[localStorage.wife].split("\n")) || [""];
    if (old[0] === "") old.shift();
    let imgs = document.querySelectorAll("img.s-image");
    let set = new Set(old);
    for (let img of imgs) {
      let src = img.src.replace(/\._AC\S+_/, "");
      set.add(src);
      let links = Array.from(set).join("\n");
      localStorage[wife] = links;
    }
    console.log(`${wife}现在有${Array.from(set).length}张照片`);
  };
})();

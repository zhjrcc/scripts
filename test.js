// ==UserScript==
// @name         avmeta
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.javbus.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=javbus.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  let code = document.title.split(" ")[0];
  if (document.title.indexOf("製作商") !== -1) {
    let links = document.querySelectorAll(".masonry-brick a");
    for (let i = 0; i < links.length; i++) {
      window.open(links[i].href);
    }
    let nextPage = document.querySelector(
      ".pagination-lg li.active"
    ).nextElementSibling;
     setInterval(function(){
      if (nextPage && localStorage.count == links.length) {
        localStorage.count = 0;
      setTimeout(window.open(nextPage.childNodes[0].href, "_self"), 0);
    }
     }, 1000)
    
  } else {
    localStorage[code] = ""
      let infos = document.querySelectorAll('div.info p')
      localStorage[code] += '标题,'+ document.title.split(' - ')[0] + '|';
      for (let i = 0; i < infos.length; i++) {
        let arr = infos[i].textContent.replaceAll('\n','').replaceAll('\t','').replaceAll(':','').split(' ').filter(function(v){return !['多選提交', ''].includes(v)})
        localStorage[code] += arr + '|';
        // localStorage[code].slice(0, -1);
      }
      let cover = document.querySelector('div.screencap img').src;
      localStorage[code] += '封面,'+ cover.split('/').reverse()[0];
      localStorage[code] += '|预览,'
      let pimg = document.querySelectorAll('div#sample-waterfall a')
      for (let i = 0;i < pimg.length; i++) {
       localStorage[code] += pimg[i].href.split('/').reverse()[1] +'/' + pimg[i].href.split('/').reverse()[0] +','
      }
      localStorage[code] = localStorage[code].slice(0,-1);
      localStorage[code] += '|磁力链接,'
      // window.close();
    let i = 0;
    let n = setInterval(function () {
      let magnets = document.querySelectorAll("#magnet-table a[href]");
      if (magnets.length !== 0) {
        clearInterval(n);
        for (; i < magnets.length; i += 3) {
          localStorage[code] += `${magnets[i]},`;
        }
        if (i === magnets.length) {
          localStorage[code] = localStorage[code].slice(0,-1);
          localStorage.count = Number(localStorage.count) + 1;
          window.close();
        }
      }
    }, 1000);
  }
})();

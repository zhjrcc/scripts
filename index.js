// ==UserScript==
// @name         avdanyuwiki
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://avdanyuwiki.com/tag/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  function avidHandler(avid, rulers) {
    for (let i = 0; i < rulers.length; i++) {
      avid =
        avid.indexOf(rulers[i]) === 0 ? avid.slice(rulers[i].length) : avid;
    }
    return avid;
  }
  let missav = "https://missav.com/cn/";
  let njav = "https://njav.tv/zh/v/";
  let javbus = "https://www.javbus.com/";
  let btsow = "https://btsow.motorcycles/search/";
  let yihua = "https://yhgyhg57.buzz/search-";
  let missavLink = document.createElement("a");
  let njavLink = document.createElement("a");
  let javbusiLink = document.createElement("a");
  let btsowLink = document.createElement("a");
  let yihuaLink = document.createElement("a");

  missavLink.textContent = "missav";
  njavLink.textContent = "njav";
  javbusiLink.textContent = "javbus";
  btsowLink.textContent = "btsow";
  yihuaLink.textContent = "移花宫";

  let articles = document.querySelectorAll("#list article");
  let avid = "";
  for (let i = 0; i < articles.length; i++) {
    let textContent = articles[i].innerHTML;
    let index = textContent.indexOf("品番") + 4;
    avid = textContent.slice(index).match(/\w+-?\w+/)[0];
    let matchPrefix = avid.match(/^(\d+)|^(h_)\d+/) || [{ length: 0 }];

    avid = avid.slice(matchPrefix[0].length);
    if (avid.indexOf("-") === -1) {
      avid = avid.replace(/^0([0-9])/, (match, p1) => {
        return p1 === "0" ? "-" : `-${p1}`;
      });
    }
    avid = avid.replace((/([A-Za-z])(\d)/,'$1-$2'));
    articles[i].querySelector("h2").innerHTML += `
      <a href = ${yihua}${avid}-0-3-1.html style="text-decoration: none;" id = 'yhg' target = '_blank'>移花宫\n</a>
      <a href = ${btsow}${avid} style="text-decoration: none;">btsow\n</a>
      <a href = ${missav}${avid} style="text-decoration: none;">missav\n</a>
      <a href = ${njav}${avid} style="text-decoration: none;">njav\n</a>
      <a href = ${javbus}${avid} style="text-decoration: none;">javbus\n</a>
      `;
    if (articles[i].querySelector("a img")) {
      articles[i].querySelector(
        "a img"
      ).parentNode.href = `${yihua}${avid}-0-3-1.html`;
    }
  }
  let yhgs = document.querySelectorAll("#yhg");
  for (let i = 0; i < yhgs.length; i++) {
    // window.open(yhgs[i].href, "_blank");
  }
  let nextHref = document.querySelector(".current").nextElementSibling.href;
  if (nextHref) {
    //  setTimeout(window.open(nextHref, "_self"), 3000)
  }
})();

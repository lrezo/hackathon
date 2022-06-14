document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-39872b2714d6.css">')
document.write('<link rel="stylesheet" href="/css/style.css">')
document.write('<div id=\"gist116816011\" class=\"gist\">\n    <div class=\"gist-file\" translate=\"no\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-c-ino\" class=\"file my-2\">\n    \n    <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-c  \">\n\n        \n<div class=\"js-check-bidi js-blob-code-container blob-code-content\">\n\n  <template class=\"js-file-alert-template\">\n  <div data-view-component=\"true\" class=\"flash flash-warn flash-full d-flex flex-items-center\">\n  <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path fill-rule=\"evenodd\" d=\"M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z\"><\/path>\n<\/svg>\n  \n    <span>\n      This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.\n      <a href=\"https://github.co/hiddenchars\" target=\"_blank\">Learn more about bidirectional Unicode characters<\/a>\n    <\/span>\n\n\n  <div data-view-component=\"true\" class=\"flash-action\">      <a href=\"{{ revealButtonHref }}\" data-view-component=\"true\" class=\"btn-sm btn\">  Show hidden characters\n  \n<\/a>\n<\/div>\n<\/div><\/template>\n<template class=\"js-line-alert-template\">\n  <span aria-label=\"This line has hidden Unicode characters\" data-view-component=\"true\" class=\"line-alert tooltipped tooltipped-e\">\n    <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path fill-rule=\"evenodd\" d=\"M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z\"><\/path>\n<\/svg>\n<\/span><\/template>\n\n  <table class=\"highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file\" data-tab-size=\"8\" data-paste-markdown-skip data-tagsearch-lang=\"C++\" data-tagsearch-path=\"c.ino\">\n        <tr>\n          <td id=\"file-c-ino-L1\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"1\"><\/td>\n          <td id=\"file-c-ino-LC1\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L2\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"2\"><\/td>\n          <td id=\"file-c-ino-LC2\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">include<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&lt;<\/span>IRremote.h<span class=\"pl-pds\">&gt;<\/span><\/span> <\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L3\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"3\"><\/td>\n          <td id=\"file-c-ino-LC3\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L4\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"4\"><\/td>\n          <td id=\"file-c-ino-LC4\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">define<\/span> <span class=\"pl-en\">RECV_PIN<\/span> <span class=\"pl-c1\">2<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L5\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"5\"><\/td>\n          <td id=\"file-c-ino-LC5\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">define<\/span> <span class=\"pl-en\">LEDRGB_GREEN<\/span> <span class=\"pl-c1\">4<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L6\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"6\"><\/td>\n          <td id=\"file-c-ino-LC6\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">define<\/span> <span class=\"pl-en\">LEDRGB_BLUE<\/span> <span class=\"pl-c1\">7<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L7\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"7\"><\/td>\n          <td id=\"file-c-ino-LC7\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">define<\/span> <span class=\"pl-en\">LEDRGB_RED<\/span> <span class=\"pl-c1\">12<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L8\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"8\"><\/td>\n          <td id=\"file-c-ino-LC8\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L9\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"9\"><\/td>\n          <td id=\"file-c-ino-LC9\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">define<\/span> <span class=\"pl-en\">OKBUTTON<\/span> <span class=\"pl-c1\">64<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L10\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"10\"><\/td>\n          <td id=\"file-c-ino-LC10\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L11\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"11\"><\/td>\n          <td id=\"file-c-ino-LC11\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">define<\/span> <span class=\"pl-en\">ZERO<\/span> <span class=\"pl-c1\">82<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L12\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"12\"><\/td>\n          <td id=\"file-c-ino-LC12\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">define<\/span> <span class=\"pl-en\">ONE<\/span> <span class=\"pl-c1\">22<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L13\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"13\"><\/td>\n          <td id=\"file-c-ino-LC13\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">define<\/span> <span class=\"pl-en\">TWO<\/span> <span class=\"pl-c1\">25<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L14\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"14\"><\/td>\n          <td id=\"file-c-ino-LC14\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">define<\/span> <span class=\"pl-en\">THREE<\/span> <span class=\"pl-c1\">13<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L15\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"15\"><\/td>\n          <td id=\"file-c-ino-LC15\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">define<\/span> <span class=\"pl-en\">FOUR<\/span> <span class=\"pl-c1\">12<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L16\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"16\"><\/td>\n          <td id=\"file-c-ino-LC16\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">define<\/span> <span class=\"pl-en\">FIVE<\/span> <span class=\"pl-c1\">24<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L17\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"17\"><\/td>\n          <td id=\"file-c-ino-LC17\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">define<\/span> <span class=\"pl-en\">SIX<\/span> <span class=\"pl-c1\">94<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L18\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"18\"><\/td>\n          <td id=\"file-c-ino-LC18\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">define<\/span> <span class=\"pl-en\">SEVEN<\/span> <span class=\"pl-c1\">8<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L19\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"19\"><\/td>\n          <td id=\"file-c-ino-LC19\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">define<\/span> <span class=\"pl-en\">EIGHT<\/span> <span class=\"pl-c1\">28<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L20\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"20\"><\/td>\n          <td id=\"file-c-ino-LC20\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">define<\/span> <span class=\"pl-en\">NINE<\/span> <span class=\"pl-c1\">90<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L21\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"21\"><\/td>\n          <td id=\"file-c-ino-LC21\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L22\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"22\"><\/td>\n          <td id=\"file-c-ino-LC22\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">define<\/span> <span class=\"pl-en\">HASHTAG<\/span> <span class=\"pl-c1\">74<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L23\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"23\"><\/td>\n          <td id=\"file-c-ino-LC23\" class=\"blob-code blob-code-inner js-file-line\">#<span class=\"pl-k\">define<\/span> <span class=\"pl-en\">STAR<\/span> <span class=\"pl-c1\">66<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L24\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"24\"><\/td>\n          <td id=\"file-c-ino-LC24\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L25\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"25\"><\/td>\n          <td id=\"file-c-ino-LC25\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">const<\/span> <span class=\"pl-k\">long<\/span> code[<span class=\"pl-c1\">3<\/span>] = {THREE, FIVE, EIGHT};<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L26\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"26\"><\/td>\n          <td id=\"file-c-ino-LC26\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L27\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"27\"><\/td>\n          <td id=\"file-c-ino-LC27\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">int<\/span> count = <span class=\"pl-c1\">0<\/span>;<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L28\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"28\"><\/td>\n          <td id=\"file-c-ino-LC28\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L29\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"29\"><\/td>\n          <td id=\"file-c-ino-LC29\" class=\"blob-code blob-code-inner js-file-line\">boolean lollo = <span class=\"pl-c1\">true<\/span>;<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L30\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"30\"><\/td>\n          <td id=\"file-c-ino-LC30\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L31\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"31\"><\/td>\n          <td id=\"file-c-ino-LC31\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">long<\/span> arrayNumber[<span class=\"pl-c1\">3<\/span>];<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L32\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"32\"><\/td>\n          <td id=\"file-c-ino-LC32\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L33\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"33\"><\/td>\n          <td id=\"file-c-ino-LC33\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L34\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"34\"><\/td>\n          <td id=\"file-c-ino-LC34\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">void<\/span> <span class=\"pl-en\">setup<\/span>() {<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L35\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"35\"><\/td>\n          <td id=\"file-c-ino-LC35\" class=\"blob-code blob-code-inner js-file-line\">  Serial.<span class=\"pl-c1\">begin<\/span>(<span class=\"pl-c1\">115200<\/span>);<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L36\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"36\"><\/td>\n          <td id=\"file-c-ino-LC36\" class=\"blob-code blob-code-inner js-file-line\">  IrReceiver.<span class=\"pl-c1\">begin<\/span>(RECV_PIN, ENABLE_LED_FEEDBACK);<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L37\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"37\"><\/td>\n          <td id=\"file-c-ino-LC37\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c1\">pinMode<\/span>(LEDRGB_GREEN,OUTPUT);<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L38\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"38\"><\/td>\n          <td id=\"file-c-ino-LC38\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c1\">pinMode<\/span>(LEDRGB_BLUE,OUTPUT);<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L39\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"39\"><\/td>\n          <td id=\"file-c-ino-LC39\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c1\">pinMode<\/span>(LEDRGB_RED,OUTPUT);<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L40\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"40\"><\/td>\n          <td id=\"file-c-ino-LC40\" class=\"blob-code blob-code-inner js-file-line\">}<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L41\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"41\"><\/td>\n          <td id=\"file-c-ino-LC41\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L42\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"42\"><\/td>\n          <td id=\"file-c-ino-LC42\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">void<\/span> <span class=\"pl-en\">loop<\/span>() {<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L43\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"43\"><\/td>\n          <td id=\"file-c-ino-LC43\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">if<\/span> (IrReceiver.<span class=\"pl-c1\">decode<\/span>() &amp;&amp; lollo) {<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L44\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"44\"><\/td>\n          <td id=\"file-c-ino-LC44\" class=\"blob-code blob-code-inner js-file-line\">    arrayNumber[count] = IrReceiver.<span class=\"pl-smi\">decodedIRData<\/span>.<span class=\"pl-smi\">command<\/span>;<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L45\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"45\"><\/td>\n          <td id=\"file-c-ino-LC45\" class=\"blob-code blob-code-inner js-file-line\">    Serial.<span class=\"pl-c1\">println<\/span>(IrReceiver.<span class=\"pl-smi\">decodedIRData<\/span>.<span class=\"pl-smi\">command<\/span>);<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L46\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"46\"><\/td>\n          <td id=\"file-c-ino-LC46\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c1\">digitalWrite<\/span>(LEDRGB_RED,HIGH);<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L47\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"47\"><\/td>\n          <td id=\"file-c-ino-LC47\" class=\"blob-code blob-code-inner js-file-line\">    count++; <\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L48\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"48\"><\/td>\n          <td id=\"file-c-ino-LC48\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c1\">delay<\/span>(<span class=\"pl-c1\">200<\/span>);<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L49\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"49\"><\/td>\n          <td id=\"file-c-ino-LC49\" class=\"blob-code blob-code-inner js-file-line\">    IrReceiver.<span class=\"pl-c1\">resume<\/span>();<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L50\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"50\"><\/td>\n          <td id=\"file-c-ino-LC50\" class=\"blob-code blob-code-inner js-file-line\">  }<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L51\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"51\"><\/td>\n          <td id=\"file-c-ino-LC51\" class=\"blob-code blob-code-inner js-file-line\">     <span class=\"pl-c1\">digitalWrite<\/span>(LEDRGB_RED,LOW);<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L52\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"52\"><\/td>\n          <td id=\"file-c-ino-LC52\" class=\"blob-code blob-code-inner js-file-line\">  <\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L53\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"53\"><\/td>\n          <td id=\"file-c-ino-LC53\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">if<\/span> (count == <span class=\"pl-c1\">3<\/span>){<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L54\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"54\"><\/td>\n          <td id=\"file-c-ino-LC54\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">if<\/span>(arrayNumber[<span class=\"pl-c1\">0<\/span>] == code[<span class=\"pl-c1\">0<\/span>] &amp;&amp; arrayNumber[<span class=\"pl-c1\">1<\/span>] == code[<span class=\"pl-c1\">1<\/span>] &amp;&amp; arrayNumber[<span class=\"pl-c1\">2<\/span>] == code[<span class=\"pl-c1\">2<\/span>]){<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L55\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"55\"><\/td>\n          <td id=\"file-c-ino-LC55\" class=\"blob-code blob-code-inner js-file-line\">      Serial.<span class=\"pl-c1\">println<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>The code is right<span class=\"pl-pds\">&quot;<\/span><\/span>);<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L56\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"56\"><\/td>\n          <td id=\"file-c-ino-LC56\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-c1\">digitalWrite<\/span>(LEDRGB_GREEN,HIGH);<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L57\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"57\"><\/td>\n          <td id=\"file-c-ino-LC57\" class=\"blob-code blob-code-inner js-file-line\">      lollo = <span class=\"pl-c1\">false<\/span>;<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L58\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"58\"><\/td>\n          <td id=\"file-c-ino-LC58\" class=\"blob-code blob-code-inner js-file-line\">    }<span class=\"pl-k\">else<\/span>{<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L59\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"59\"><\/td>\n          <td id=\"file-c-ino-LC59\" class=\"blob-code blob-code-inner js-file-line\">      Serial.<span class=\"pl-c1\">println<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>The code is wrong retry again :D<span class=\"pl-pds\">&quot;<\/span><\/span>);<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L60\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"60\"><\/td>\n          <td id=\"file-c-ino-LC60\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-c1\">analogWrite<\/span>(LEDRGB_RED,<span class=\"pl-c1\">255<\/span>);<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L61\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"61\"><\/td>\n          <td id=\"file-c-ino-LC61\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-c1\">analogWrite<\/span>(LEDRGB_GREEN,<span class=\"pl-c1\">255<\/span>);<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L62\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"62\"><\/td>\n          <td id=\"file-c-ino-LC62\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-c1\">analogWrite<\/span>(LEDRGB_BLUE,<span class=\"pl-c1\">255<\/span>);<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L63\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"63\"><\/td>\n          <td id=\"file-c-ino-LC63\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-c1\">delay<\/span>(<span class=\"pl-c1\">2000<\/span>);<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L64\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"64\"><\/td>\n          <td id=\"file-c-ino-LC64\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-c1\">analogWrite<\/span>(LEDRGB_RED,<span class=\"pl-c1\">0<\/span>);<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L65\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"65\"><\/td>\n          <td id=\"file-c-ino-LC65\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-c1\">analogWrite<\/span>(LEDRGB_GREEN,<span class=\"pl-c1\">0<\/span>);<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L66\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"66\"><\/td>\n          <td id=\"file-c-ino-LC66\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-c1\">analogWrite<\/span>(LEDRGB_BLUE,<span class=\"pl-c1\">0<\/span>);<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L67\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"67\"><\/td>\n          <td id=\"file-c-ino-LC67\" class=\"blob-code blob-code-inner js-file-line\">    }<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L68\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"68\"><\/td>\n          <td id=\"file-c-ino-LC68\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c1\">delay<\/span>(<span class=\"pl-c1\">1000<\/span>);<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L69\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"69\"><\/td>\n          <td id=\"file-c-ino-LC69\" class=\"blob-code blob-code-inner js-file-line\">    count = <span class=\"pl-c1\">0<\/span>;<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L70\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"70\"><\/td>\n          <td id=\"file-c-ino-LC70\" class=\"blob-code blob-code-inner js-file-line\">  }<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L71\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"71\"><\/td>\n          <td id=\"file-c-ino-LC71\" class=\"blob-code blob-code-inner js-file-line\">                  <\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L72\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"72\"><\/td>\n          <td id=\"file-c-ino-LC72\" class=\"blob-code blob-code-inner js-file-line\">  <\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-c-ino-L73\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"73\"><\/td>\n          <td id=\"file-c-ino-LC73\" class=\"blob-code blob-code-inner js-file-line\">}<\/td>\n        <\/tr>\n  <\/table>\n<\/div>\n\n\n    <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      \n')

if(!self.define){let e,i={};const o=(o,n)=>(o=new URL(o+".js",n).href,i[o]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=i,document.head.appendChild(e)}else e=o,importScripts(o),i()})).then((()=>{let e=i[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(n,a)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let c={};const s=e=>o(e,d),r={module:{uri:d},exports:c,require:s};i[d]=Promise.all(n.map((e=>r[e]||s(e)))).then((e=>(a(...e),c)))}}define(["./workbox-543c38d3"],(function(e){"use strict";e.setCacheNameDetails({prefix:"CasaVue"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/demo/config.json",revision:"dbf84110ddd063c7f64b3b751ffa3e26"},{url:"/demo/css/app.d3de637e.css",revision:null},{url:"/demo/img/icons_bak/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"/demo/img/icons_bak/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"/demo/img/icons_bak/android-chrome-maskable-192x192.png",revision:"845a39478d0e2d4d5d32a092de2de250"},{url:"/demo/img/icons_bak/android-chrome-maskable-512x512.png",revision:"2695f5feb66cdb0c6f09d0e415824cf9"},{url:"/demo/img/icons_bak/apple-touch-icon-120x120.png",revision:"936d6e411cabd71f0e627011c3f18fe2"},{url:"/demo/img/icons_bak/apple-touch-icon-152x152.png",revision:"1a034e64d80905128113e5272a5ab95e"},{url:"/demo/img/icons_bak/apple-touch-icon-180x180.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"/demo/img/icons_bak/apple-touch-icon-60x60.png",revision:"9a2b5c0f19de617685b7b5b42464e7db"},{url:"/demo/img/icons_bak/apple-touch-icon-76x76.png",revision:"af28d69d59284dd202aa55e57227b11b"},{url:"/demo/img/icons_bak/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"/demo/img/icons_bak/favicon-16x16.png",revision:"4bb1a55479d61843b89a2fdafa7849b3"},{url:"/demo/img/icons_bak/favicon-32x32.png",revision:"98b614336d9a12cb3f7bedb001da6fca"},{url:"/demo/img/icons_bak/msapplication-icon-144x144.png",revision:"b89032a4a5a1879f30ba05a13947f26f"},{url:"/demo/img/icons_bak/mstile-150x150.png",revision:"058a3335d15a3eb84e7ae3707ba09620"},{url:"/demo/img/icons_bak/safari-pinned-tab.svg",revision:"4e857233cbd3bb2d2db4f78bed62a52f"},{url:"/demo/index.html",revision:"9ac02a8b913af6c9ad43809038ef3c4a"},{url:"/demo/js/app.a6548683.js",revision:null},{url:"/demo/js/chunk-vendors.8f82b34c.js",revision:null},{url:"/demo/manifest.json",revision:"06c68026dd903b84fd3aba29e3b5546f"},{url:"/demo/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map

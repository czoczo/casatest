if(!self.define){let i,e={};const n=(n,o)=>(n=new URL(n+".js",o).href,e[n]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=e,document.head.appendChild(i)}else i=n,importScripts(n),e()})).then((()=>{let i=e[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(o,a)=>{const c=i||("document"in self?document.currentScript.src:"")||location.href;if(e[c])return;let s={};const r=i=>n(i,c),b={module:{uri:c},exports:s,require:r};e[c]=Promise.all(o.map((i=>b[i]||r(i)))).then((i=>(a(...i),s)))}}define(["./workbox-543c38d3"],(function(i){"use strict";i.setCacheNameDetails({prefix:"CasaVue"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/config.json",revision:"dbf84110ddd063c7f64b3b751ffa3e26"},{url:"/css/app.a5473375.css",revision:null},{url:"/img/icons_bak/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"/img/icons_bak/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"/img/icons_bak/android-chrome-maskable-192x192.png",revision:"845a39478d0e2d4d5d32a092de2de250"},{url:"/img/icons_bak/android-chrome-maskable-512x512.png",revision:"2695f5feb66cdb0c6f09d0e415824cf9"},{url:"/img/icons_bak/apple-touch-icon-120x120.png",revision:"936d6e411cabd71f0e627011c3f18fe2"},{url:"/img/icons_bak/apple-touch-icon-152x152.png",revision:"1a034e64d80905128113e5272a5ab95e"},{url:"/img/icons_bak/apple-touch-icon-180x180.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"/img/icons_bak/apple-touch-icon-60x60.png",revision:"9a2b5c0f19de617685b7b5b42464e7db"},{url:"/img/icons_bak/apple-touch-icon-76x76.png",revision:"af28d69d59284dd202aa55e57227b11b"},{url:"/img/icons_bak/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"/img/icons_bak/favicon-16x16.png",revision:"4bb1a55479d61843b89a2fdafa7849b3"},{url:"/img/icons_bak/favicon-32x32.png",revision:"98b614336d9a12cb3f7bedb001da6fca"},{url:"/img/icons_bak/msapplication-icon-144x144.png",revision:"b89032a4a5a1879f30ba05a13947f26f"},{url:"/img/icons_bak/mstile-150x150.png",revision:"058a3335d15a3eb84e7ae3707ba09620"},{url:"/img/icons_bak/safari-pinned-tab.svg",revision:"4e857233cbd3bb2d2db4f78bed62a52f"},{url:"/index.html",revision:"932740ce85bb9c3831962b872a8e5d35"},{url:"/js/app.b4b868c9.js",revision:null},{url:"/js/chunk-vendors.8f82b34c.js",revision:null},{url:"/manifest.json",revision:"06c68026dd903b84fd3aba29e3b5546f"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map

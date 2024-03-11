(function(){"use strict";var e={8046:function(e,t,n){var s=n(4919),a=n(9744);const i={id:"container"},o={id:"content"};function r(e,t,n,r,l,u){const c=(0,a.up)("TopArea"),d=(0,a.up)("ThemeSettings"),m=(0,a.up)("DashBoard"),h=(0,a.up)("PWAPrompt"),p=(0,a.up)("BottomArea");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",o,[(0,a.Wm)(c,{onShowSettings:u.showSettings},null,8,["onShowSettings"]),(0,a.Wm)(s.uT,{name:"fade"},{default:(0,a.w5)((()=>[l.settingsVisible?((0,a.wg)(),(0,a.j4)(d,{key:0,settingsVisible:l.settingsVisible,onShowSettings:u.showSettings},null,8,["settingsVisible","onShowSettings"])):(0,a.kq)("",!0)])),_:1}),(0,a.Wm)(m),(0,a.Wm)(h)]),(0,a.Wm)(p)])}var l=n(5600);const u=(0,l.iH)({h:205,s:79,l:13,bgs:18,bgl:80}),c=(0,l.iH)("#07263B"),d=(e,t,n)=>{t/=100,n/=100;let s=(1-Math.abs(2*n-1))*t,a=s*(1-Math.abs(e/60%2-1)),i=n-s/2,o=0,r=0,l=0;return 0<=e&&e<60?(o=s,r=a,l=0):60<=e&&e<120?(o=a,r=s,l=0):120<=e&&e<180?(o=0,r=s,l=a):180<=e&&e<240?(o=0,r=a,l=s):240<=e&&e<300?(o=a,r=0,l=s):300<=e&&e<360&&(o=s,r=0,l=a),o=Math.round(255*(o+i)),r=Math.round(255*(r+i)),l=Math.round(255*(l+i)),{r:o,g:r,b:l}},m=(e,t,n)=>{e/=255,t/=255,n/=255;let s,a,i=Math.max(e,t,n),o=Math.min(e,t,n),r=(i+o)/2;if(i==o)s=a=0;else{let l=i-o;switch(a=r>.5?l/(2-i-o):l/(i+o),i){case e:s=(t-n)/l+(t<n?6:0);break;case t:s=(n-e)/l+2;break;case n:s=(e-t)/l+4;break}s/=6}const l=u.value.bgs,c=u.value.bgl;return{h:360*s,s:100*a,l:100*r,bgs:l,bgl:c}},h=(e,t,n)=>"#"+[e,t,n].map((e=>{const t=e.toString(16);return 1===t.length?"0"+t:t})).join(""),p=e=>{let t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),s=parseInt(e.slice(5,7),16);return{r:t,g:n,b:s}},v=()=>{var e=d(u.value.h,u.value.s,u.value.l);c.value=h(e["r"],e["g"],e["b"]),document.documentElement.style.setProperty("--theme-color-h",u.value.h),document.documentElement.style.setProperty("--theme-color-s",u.value.s+"%"),document.documentElement.style.setProperty("--theme-color-l",u.value.l+"%"),document.documentElement.style.setProperty("--base-color-s",u.value.bgs+"%"),document.documentElement.style.setProperty("--base-color-l",u.value.bgl+"%"),e=d(u.value.h,u.value.s,u.value.l>50?6:94),document.documentElement.style.setProperty("--theme-color-contrast",h(e["r"],e["g"],e["b"])),e=d(u.value.h,.8*u.value.s,Math.max(Math.min((u.value.l+50)%100,85),10)),document.documentElement.style.setProperty("--base-text-color",h(e["r"],e["g"],e["b"])),e=d(u.value.h,u.value.bgs,u.value.bgl>50?6:94),document.documentElement.style.setProperty("--base-color-contrast",h(e["r"],e["g"],e["b"]))},g=()=>{c.value.startsWith("#")||(c.value="#"+c.value),c.value.length>7&&(c.value=c.value.substring(0,7));const e=/^#[A-Fa-f0-9]{6}$/;if(!e.test(c.value))return;const{r:t,g:n,b:s}=p(c.value);u.value=m(t,n,s),document.documentElement.style.setProperty("--theme-color-h",u.value.h),document.documentElement.style.setProperty("--theme-color-s",u.value.s+"%"),document.documentElement.style.setProperty("--theme-color-l",u.value.l+"%")};(0,a.YP)(u,v),(0,a.YP)(c,g);var f={hsl:u,hex:c,updateRGB:v,updateHSL:g},b=n(4361);const w={id:"top"},y={id:"topLogo"},Q={id:"title"},_={id:"iconsTopRight"};function S(e,t,n,s,i,o){const r=(0,a.up)("TopLogo"),l=(0,a.up)("font-awesome-icon");return(0,a.wg)(),(0,a.iD)("div",w,[(0,a._)("div",y,[(0,a.Wm)(r)]),(0,a._)("div",Q,(0,b.zw)(e.config.branding.name),1),(0,a._)("div",_,[(0,a.Wm)(l,{icon:"fa-solid fa-brush",onClick:t[0]||(t[0]=t=>e.$emit("show-settings",!0))})])])}const k={xmlns:"http://www.w3.org/2000/svg",version:"1.2",baseProfile:"tiny",viewBox:"0.00 0.00 637.00 555.00"},C=(0,a._)("path",{fill:"#07263c",d:"\n      M 314.84 0.00\n      L 321.09 0.00\n      Q 335.06 1.05 344.25 5.53\n      Q 351.76 9.19 358.76 13.78\n      Q 382.12 29.11 405.30 43.67\n      Q 406.52 44.44 406.59 43.01\n      C 407.14 32.01 411.86 21.97 420.61 15.48\n      Q 428.58 9.57 436.74 8.14\n      Q 449.77 5.87 459.81 9.28\n      Q 481.03 16.50 484.86 38.08\n      Q 485.88 43.86 485.69 51.76\n      C 485.32 66.59 485.49 81.82 485.51 96.02\n      A 2.47 2.44 -72.8 0 0 486.56 98.04\n      Q 491.01 101.17 494.08 103.16\n      Q 546.39 137.06 598.54 170.95\n      C 602.97 173.82 607.45 176.13 612.08 178.46\n      Q 624.56 184.75 631.66 196.81\n      Q 636.24 204.59 637.00 214.58\n      L 637.00 219.11\n      Q 635.94 232.40 627.92 241.68\n      Q 616.64 254.72 597.98 255.20\n      C 592.12 255.35 586.08 255.38 580.17 255.06\n      C 573.91 254.72 569.05 257.28 569.04 264.35\n      Q 568.92 374.01 569.07 478.61\n      Q 569.09 490.20 567.87 496.92\n      C 562.23 527.97 536.38 552.16 504.65 554.50\n      Q 501.31 554.74 497.96 555.00\n      L 137.95 555.00\n      Q 101.48 553.23 81.37 525.72\n      C 73.92 515.53 69.18 503.34 68.28 491.10\n      Q 67.89 485.78 67.86 480.00\n      Q 67.71 454.19 67.95 421.75\n      Q 67.96 421.13 67.96 420.50\n      Q 68.00 344.25 68.06 268.00\n      Q 68.07 263.24 66.65 259.71\n      C 64.80 255.08 60.11 255.05 55.77 255.14\n      Q 46.58 255.35 36.10 255.15\n      Q 22.26 254.89 11.71 244.80\n      Q 1.62 235.15 0.00 219.86\n      L 0.00 214.70\n      Q 2.60 191.64 22.74 179.93\n      Q 26.16 177.94 30.30 176.10\n      Q 34.66 174.17 37.74 172.16\n      Q 86.63 140.26 131.46 110.94\n      Q 170.83 85.19 208.52 60.48\n      Q 241.76 38.69 279.06 14.08\n      Q 286.32 9.29 294.05 5.31\n      Q 302.17 1.14 314.84 0.00\n      Z\n      M 335.22 84.23\n      C 328.12 80.09 320.56 78.15 312.32 79.82\n      Q 305.66 81.17 299.12 85.36\n      Q 284.77 94.55 270.23 103.66\n      Q 255.26 113.04 255.25 130.86\n      Q 255.25 145.49 255.27 160.49\n      C 255.28 171.56 260.24 179.98 269.32 185.96\n      Q 274.97 189.68 280.01 192.74\n      Q 280.95 193.31 281.90 192.75\n      Q 297.02 183.92 314.34 182.75\n      C 329.33 181.74 343.14 185.29 355.95 192.78\n      Q 356.47 193.08 356.99 192.79\n      Q 368.01 186.53 373.47 181.38\n      Q 381.39 173.92 381.87 163.97\n      Q 382.53 150.41 382.20 130.72\n      Q 381.91 113.25 369.60 105.20\n      Q 356.50 96.64 335.22 84.23\n      Z\n      M 472.40 195.04\n      A 34.70 34.70 0.0 0 0 437.70 160.34\n      A 34.70 34.70 0.0 0 0 403.00 195.04\n      A 34.70 34.70 0.0 0 0 437.70 229.74\n      A 34.70 34.70 0.0 0 0 472.40 195.04\n      Z\n      M 233.89 195.08\n      A 34.67 34.67 0.0 0 0 199.22 160.41\n      A 34.67 34.67 0.0 0 0 164.55 195.08\n      A 34.67 34.67 0.0 0 0 199.22 229.75\n      A 34.67 34.67 0.0 0 0 233.89 195.08\n      Z\n      M 369.56 257.92\n      A 50.88 50.88 0.0 0 0 318.68 207.04\n      A 50.88 50.88 0.0 0 0 267.80 257.92\n      A 50.88 50.88 0.0 0 0 318.68 308.80\n      A 50.88 50.88 0.0 0 0 369.56 257.92\n      Z\n      M 396.34 287.60\n      C 388.17 292.95 383.75 301.76 383.75 311.51\n      Q 383.76 331.22 383.82 351.78\n      Q 383.87 368.51 398.21 377.54\n      Q 414.41 387.75 429.96 397.24\n      Q 447.02 407.65 464.34 397.06\n      Q 477.73 388.87 495.05 377.96\n      C 500.83 374.32 506.20 369.30 508.46 362.74\n      Q 509.98 358.35 510.01 351.33\n      Q 510.12 322.77 509.85 310.48\n      Q 509.51 294.55 494.92 285.86\n      Q 485.09 280.00 472.81 272.51\n      Q 459.81 264.59 455.38 263.19\n      Q 443.48 259.42 431.05 265.79\n      Q 424.70 269.04 396.34 287.60\n      Z\n      M 139.28 288.31\n      C 132.71 292.67 127.74 300.66 127.62 308.56\n      Q 127.28 331.49 127.29 352.04\n      Q 127.29 368.46 141.19 377.21\n      Q 158.09 387.85 174.05 397.54\n      C 186.26 404.95 197.92 403.43 209.47 396.27\n      Q 224.61 386.87 240.32 376.84\n      Q 253.71 368.28 253.55 351.97\n      Q 253.37 333.85 253.58 317.66\n      C 253.76 303.62 251.35 293.91 239.18 286.24\n      Q 225.90 277.87 211.51 269.32\n      Q 205.64 265.84 200.52 263.76\n      C 191.41 260.05 180.91 262.31 172.24 267.44\n      Q 158.41 275.64 139.28 288.31\n      Z\n      M 336.53 494.05\n      Q 348.66 486.92 362.18 478.67\n      Q 368.04 475.10 371.99 471.92\n      C 379.47 465.88 382.07 457.90 382.19 448.55\n      Q 382.43 427.53 382.11 409.91\n      Q 382.07 407.56 381.81 404.91\n      C 380.85 394.74 375.34 387.94 367.02 382.78\n      Q 355.96 375.92 343.87 368.47\n      Q 331.20 360.66 326.15 359.26\n      Q 314.13 355.93 303.02 362.42\n      Q 291.78 368.98 279.96 376.71\n      C 274.62 380.20 268.93 383.23 264.27 387.44\n      C 257.21 393.82 255.02 402.42 255.40 411.93\n      C 255.86 423.36 255.54 435.11 255.41 446.81\n      Q 255.31 454.98 257.04 460.00\n      Q 260.14 469.01 268.91 474.47\n      Q 284.47 484.14 299.73 493.59\n      Q 318.03 504.92 336.53 494.05\n      Z"},null,-1),x=[C];function A(e,t){return(0,a.wg)(),(0,a.iD)("svg",k,x)}var D=n(955);const P={},N=(0,D.Z)(P,[["render",A]]);var I=N,B={components:{TopLogo:I}};const M=(0,D.Z)(B,[["render",S]]);var T=M;function V(e,t,n,s,i,o){return(0,a.wg)(),(0,a.iD)("footer",null," CasaVue ver. "+(0,b.zw)(i.version),1)}var E={data(){return{version:"a.b.c"}},mounted(){this.version=this.config.version}};const U=(0,D.Z)(E,[["render",V]]);var j=U;const W=e=>((0,a.dD)("data-v-d72bf1d6"),e=e(),(0,a.Cn)(),e),O={id:"toolbox"},L=(0,a.Uk)(" | "),Z={id:"items"},R={class:"namespace-header"},G={class:"namespace-name"},q={class:"input-wrap"},H={class:"switch"},$=["onUpdate:modelValue"],z=W((()=>(0,a._)("span",{class:"slider round"},null,-1)));function F(e,t,n,i,o,r){const l=(0,a.up)("font-awesome-icon"),u=(0,a.up)("ErrorBox"),c=(0,a.up)("NamespaceItem");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",O,[(0,a.wy)((0,a._)("input",{id:"searchInput","onUpdate:modelValue":t[0]||(t[0]=e=>o.searchText=e),placeholder:"Search by name",autofocus:""},null,512),[[s.nr,o.searchText]]),L,(0,a._)("button",{onClick:t[1]||(t[1]=(...e)=>r.showAllNamespaces&&r.showAllNamespaces(...e))},[(0,a.Wm)(l,{icon:"fa-solid fa-eye"})]),(0,a._)("button",{onClick:t[2]||(t[2]=(...e)=>r.hideAllNamespaces&&r.hideAllNamespaces(...e))},[(0,a.Wm)(l,{icon:"fa-solid fa-eye-slash"})])]),r.dataMissing?((0,a.wg)(),(0,a.j4)(u,{key:0})):(0,a.kq)("",!0),(0,a._)("div",Z,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.sortedNamespaces,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e,class:"namespace-container"},[(0,a._)("div",R,[(0,a._)("div",G,(0,b.zw)(e),1),(0,a._)("div",q,[(0,a._)("label",H,[(0,a.wy)((0,a._)("input",{type:"checkbox","onUpdate:modelValue":t=>o.visibleNamespaces[e]=t},null,8,$),[[s.e8,o.visibleNamespaces[e]]]),z])])]),(0,a._)("div",{class:(0,b.C_)(["namespace-items",{hidden:!r.isNamespaceVisible(e)}])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.groupedData[e],(e=>((0,a.wg)(),(0,a.j4)(c,{key:e.name,item:e,itemsStatus:o.itemsStatus},null,8,["item","itemsStatus"])))),128))],2)])))),128))])],64)}n(7495);var Y=n(3490);const K={id:"error-box-container"},X=(0,a._)("div",{id:"error-box-text"},[(0,a._)("div",{id:"error-text-main"}," No items to display "),(0,a._)("div",{id:"error-text-msg"}," Is CasaVue server available? ")],-1),J=[X];function ee(e,t){return(0,a.wg)(),(0,a.iD)("div",K,J)}const te={},ne=(0,D.Z)(te,[["render",ee]]);var se=ne;const ae=["href"],ie={class:"item-content"},oe={class:"image-container"},re=["src"],le={class:"item-text"},ue={class:"item-name"},ce={class:"item-description"},de={class:"circle-status"},me={key:0,class:"status-icon"},he=(0,a._)("span",{class:"tooltiptext"},"No TLS encryption",-1),pe={key:1,class:"status-icon"},ve=(0,a._)("span",{class:"tooltiptext"},"Site unavailable",-1),ge={key:2,class:"status-icon"},fe=(0,a._)("span",{class:"tooltiptext"},"Status unknow",-1);function be(e,t,n,s,i,o){const r=(0,a.up)("font-awesome-icon");return(0,a.wg)(),(0,a.iD)("a",{class:"item",target:"_blank",href:n.item.data.url},[(0,a._)("div",ie,[(0,a._)("div",oe,[(0,a._)("img",{src:n.item.data.iconURL,alt:"🖻"},null,8,re)]),(0,a._)("div",le,[(0,a._)("div",ue,(0,b.zw)(n.item.name),1),(0,a._)("div",ce,(0,b.zw)(n.item.data.description),1)]),(0,a._)("div",de,[o.isTLS(n.item.data.url)?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",me,[(0,a.Wm)(r,{icon:"fa-solid fa-lock-open"}),he])),o.isSiteUnavailable(n.item.name)?((0,a.wg)(),(0,a.iD)("div",pe,[(0,a.Wm)(r,{icon:"fa-solid fa-exclamation-triangle"}),ve])):(0,a.kq)("",!0),o.isStatusUnavailable(n.item.name)?((0,a.wg)(),(0,a.iD)("div",ge,[(0,a.Wm)(r,{icon:"fa-solid fa-circle-question"}),fe])):(0,a.kq)("",!0)])])],8,ae)}var we={props:{item:Object,itemsStatus:Object},methods:{isTLS(e){return e.startsWith("https")},isStatusUnavailable(e){return"gray"==this.itemsStatus[e].status},isSiteUnavailable(e){return"red"==this.itemsStatus[e].status}}};const ye=(0,D.Z)(we,[["render",be]]);var Qe=ye,_e={data(){return{apiBaseUrl:"/api/v1",data:{},searchText:"",visibleNamespaces:{},itemsStatus:{},refreshCounter:0}},components:{NamespaceItem:Qe,ErrorBox:se},computed:{filteredData(){if(!this.searchText)return this.data;const e=this.searchText.toLowerCase(),t={};for(const n in this.data)n.toLowerCase().includes(e)&&(t[n]=this.data[n]);return t},groupedData(){const e={};for(var t in this.filteredData)e[this.filteredData[t].namespace]||(e[this.filteredData[t].namespace]=[]),e[this.filteredData[t].namespace].push({name:t,data:this.filteredData[t]});return e},sortedNamespaces(){const e=new Set;for(const n in this.data)Object.prototype.hasOwnProperty.call(this.data,n)&&this.groupedData[this.data[n].namespace]&&e.add(this.data[n].namespace);const t=Array.from(e).sort();return t},dataMissing(){return!Object.keys(this.data).length}},methods:{fetchData(){Y.Z.get(`${this.apiBaseUrl}`).then((e=>{for(var t in this.data=e.data,this.data)null==this.visibleNamespaces[this.data[t].namespace]&&(this.visibleNamespaces[this.data[t].namespace]=!0),this.itemsStatus[t]||(this.itemsStatus[t]={name:t,url:this.data[t].url,status:"gray"});this.refreshCounter%36==0&&this.checkSiteAvailability(),this.refreshCounter++})).catch((e=>{console.error("Error fetching data:",e)}))},hideAllNamespaces(){Object.keys(this.visibleNamespaces).forEach((e=>{this.visibleNamespaces[e]=!1}))},showAllNamespaces(){Object.keys(this.visibleNamespaces).forEach((e=>{this.visibleNamespaces[e]=!0}))},isNamespaceVisible(e){return this.visibleNamespaces[e]},async checkSiteAvailability(){for(const t in this.itemsStatus)try{const e=await Y.Z.head("/statusCheck/?url="+this.itemsStatus[t].url);this.updateSiteStatus(t,e.status)}catch(e){this.updateSiteStatus(t,e.response?e.response.status:"unknown")}},updateSiteStatus(e,t){const n=[200,401],s=n.includes(t)?"green":"red";this.itemsStatus[e]={name:e,url:this.data[e].url,status:s}}},created(){this.fetchData(),setInterval(this.fetchData,5e3)}};const Se=(0,D.Z)(_e,[["render",F],["__scopeId","data-v-d72bf1d6"]]);var ke=Se;const Ce={key:0,class:"pwa-prompt"},xe=(0,a.Uk)(" Add app to home screen? ");function Ae(e,t,n,s,i,o){return e.shown?((0,a.wg)(),(0,a.iD)("div",Ce,[xe,(0,a._)("button",{onClick:t[0]||(t[0]=(...e)=>o.installPWA&&o.installPWA(...e))}," Install! "),(0,a._)("button",{onClick:t[1]||(t[1]=(...e)=>o.dismissPrompt&&o.dismissPrompt(...e))}," No, thanks ")])):(0,a.kq)("",!0)}var De={data:()=>({shown:!1}),beforeMount(){window.addEventListener("beforeinstallprompt",(e=>{e.preventDefault(),this.installEvent=e,this.shown=!0}))},methods:{dismissPrompt(){this.shown=!1},installPWA(){this.installEvent.prompt(),this.installEvent.userChoice.then((e=>{this.dismissPrompt(),e.outcome}))}}};const Pe=(0,D.Z)(De,[["render",Ae]]);var Ne=Pe;const Ie={id:"settings"},Be={class:"iconsTopRight"},Me=(0,a._)("h2",null,"Theme color:",-1),Te={class:"form-items"},Ve=(0,a._)("label",null,"RGB:",-1),Ee=(0,a._)("label",null,"Hue:",-1),Ue=(0,a._)("label",null,"Saturation:",-1),je=(0,a._)("label",null,"Lightness:",-1),We=(0,a._)("h2",null,"Items look:",-1),Oe={class:"form-items"},Le=(0,a._)("label",null,"Saturation:",-1),Ze=(0,a._)("label",null,"Lightness:",-1),Re=(0,a._)("hr",null,null,-1),Ge={class:"input-wrap"},qe=(0,a._)("h3",null,"Branding config:",-1),He=(0,a._)("p",null,[(0,a.Uk)("Use to persist branding changes."),(0,a._)("br"),(0,a.Uk)("Paste to CasaVue config.")],-1);function $e(e,t,n,i,o,r){const l=(0,a.up)("font-awesome-icon");return(0,a.wg)(),(0,a.iD)("div",Ie,[(0,a._)("div",Be,[(0,a._)("button",{onClick:t[0]||(t[0]=t=>e.$emit("show-settings",!1))},[(0,a.Wm)(l,{icon:"fa-solid fa-xmark"})])]),Me,(0,a._)("div",Te,[Ve,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.hex=t),onInput:t[2]||(t[2]=(...t)=>e.updateHSL&&e.updateHSL(...t))},null,544),[[s.nr,e.hex]]),Ee,(0,a.wy)((0,a._)("input",{type:"range",min:"0",max:"359","onUpdate:modelValue":t[3]||(t[3]=t=>e.hsl.h=t),onInput:t[4]||(t[4]=(...t)=>e.updateRGB&&e.updateRGB(...t))},null,544),[[s.nr,e.hsl.h]]),Ue,(0,a.wy)((0,a._)("input",{type:"range",min:"0",max:"100","onUpdate:modelValue":t[5]||(t[5]=t=>e.hsl.s=t),onInput:t[6]||(t[6]=(...t)=>e.updateRGB&&e.updateRGB(...t))},null,544),[[s.nr,e.hsl.s]]),je,(0,a.wy)((0,a._)("input",{type:"range",min:"0",max:"100","onUpdate:modelValue":t[7]||(t[7]=t=>e.hsl.l=t),onInput:t[8]||(t[8]=(...t)=>e.updateRGB&&e.updateRGB(...t))},null,544),[[s.nr,e.hsl.l]])]),We,(0,a._)("div",Oe,[Le,(0,a.wy)((0,a._)("input",{type:"range",min:"0",max:"100","onUpdate:modelValue":t[9]||(t[9]=t=>e.hsl.bgs=t),onInput:t[10]||(t[10]=(...t)=>e.updateRGB&&e.updateRGB(...t))},null,544),[[s.nr,e.hsl.bgs]]),Ze,(0,a.wy)((0,a._)("input",{type:"range",min:"0",max:"100","onUpdate:modelValue":t[11]||(t[11]=t=>e.hsl.bgl=t),onInput:t[12]||(t[12]=(...t)=>e.updateRGB&&e.updateRGB(...t))},null,544),[[s.nr,e.hsl.bgl]])]),Re,(0,a._)("div",Ge,[qe,He,(0,a.wy)((0,a._)("textarea",{id:"w3review",name:"w3review",rows:"6",cols:"50","onUpdate:modelValue":t[13]||(t[13]=e=>r.settingsConfig=e),readonly:""},null,512),[[s.nr,r.settingsConfig]])])])}var ze={setup(){return f},computed:{settingsConfig(){return`branding:\n  colors:\n    theme: "${this.hex}"\n    items:\n      saturation: ${this.hsl.bgs}\n      lightness: ${this.hsl.bgl}`}}};const Fe=(0,D.Z)(ze,[["render",$e]]);var Ye=Fe,Ke={data(){return{settingsVisible:!1}},name:"App",components:{TopArea:T,BottomArea:j,DashBoard:ke,PWAPrompt:Ne,ThemeSettings:Ye},methods:{showSettings(e){this.settingsVisible=e}},mounted(){this.hex=this.config.branding.colors.theme,this.hsl.bgs=this.config.branding.colors.items.saturation,this.hsl.bgl=this.config.branding.colors.items.lightness},setup(){return f}};const Xe=(0,D.Z)(Ke,[["render",r]]);var Je=Xe,et=n(4191);(0,et.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var tt=n(3078),nt=n(7421),st=n(8936);tt.vI.add(st.Mdf),tt.vI.add(st.Aq),tt.vI.add(st.TXx),tt.vI.add(st.gr5),tt.vI.add(st.WA2),tt.vI.add(st.g82),tt.vI.add(st.u8Q),tt.vI.add(st.byT),tt.vI.add(st.ik8),tt.vI.add(st._1N),tt.vI.add(st.FDd);const at=(0,s.ri)(Je);fetch("/config.json").then((e=>e.json())).then((e=>{window.config=e,at.config.globalProperties.config=e,at.component("font-awesome-icon",nt.GN),at.mount("#app")}))}},t={};function n(s){var a=t[s];if(void 0!==a)return a.exports;var i=t[s]={exports:{}};return e[s].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,s,a,i){if(!s){var o=1/0;for(c=0;c<e.length;c++){s=e[c][0],a=e[c][1],i=e[c][2];for(var r=!0,l=0;l<s.length;l++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](s[l])}))?s.splice(l--,1):(r=!1,i<o&&(o=i));if(r){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[s,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,i,o=s[0],r=s[1],l=s[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(l)var c=l(n)}for(t&&t(s);u<o.length;u++)i=o[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},s=self["webpackChunkCasaVue"]=self["webpackChunkCasaVue"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(8046)}));s=n.O(s)})();
//# sourceMappingURL=app.b4b868c9.js.map
(()=>{"use strict";const t=function(t,e){const s=document.querySelector('div[id="main-container"]');return s.addEventListener("click",(()=>{const s=e.length;t.classList.value.slice(-s)===e&&t.classList.toggle(e)})),s},e=({classListVal:t,element:e})=>({toggleClassList:()=>{e.classList.toggle(t)}}),s=()=>{const t=[];return{lengthGetter:function(){return t.length},lastGetter:function(){return t.slice(-1).at(-1)},secondLastGetter:function(){return t.slice(-2).reverse().slice(-1).at(-1)},adder:function(e){return t.push(e)}}},a=({classListValues:s,elementToAddInArrays:a,elementsInArray:l})=>{const n=()=>{e({classListVal:s,element:l.lastGetter()}).toggleClassList()},r=function(t,a,r,i){t>=2&&a.classList.value===i&&r.classList.value===i&&(e({classListVal:s,element:l.secondLastGetter()}).toggleClassList(),((t,e)=>{t.classList.value===e.classList.value&&n()})(a,r))};return{toggleClass:()=>{l.adder(a),n();const e=l.lengthGetter(),i=l.lastGetter(),o=l.secondLastGetter(),c=a.classList.value;r(e,i,o,c),t(i,s)}}},l=s(),n=s(),r=({elementToListen:t,itsDataAttribute:e,subElement:s,classListValue:r,togglerClassListValue:i})=>({dropDownElement:()=>{t.forEach((t=>{t.addEventListener("click",(o=>{o.stopPropagation();const c=(({elementToGetAttribute:t,dataAttributeValue:e})=>({getDataAttribute:()=>t.getAttribute(e)}))({elementToGetAttribute:t,dataAttributeValue:e}).getDataAttribute(),u=document.querySelector(`${s}="${c}"]`);u.addEventListener("click",(t=>t.stopPropagation())),a({classListValues:r,elementToAddInArrays:u,elementsInArray:l}).toggleClass(),a({classListValues:i,elementToAddInArrays:t,elementsInArray:n}).toggleClass()}))}))}});window.addEventListener("load",(()=>{const t=document.querySelectorAll("div[data-nav-bar-item]");r({elementToListen:t,itsDataAttribute:"data-nav-bar-item",subElement:"div[data-nav-sub-item",classListValue:"visible",togglerClassListValue:"active-toggler"}).dropDownElement()}))})();
//# sourceMappingURL=main.js.map
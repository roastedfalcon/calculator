(()=>{"use strict";const e=document.querySelector("#display"),t=document.querySelectorAll(".number"),r=document.querySelector("#clear"),c=(document.querySelector("#delete"),document.querySelector("#decimal"),document.querySelectorAll(".operator")),l=document.querySelector("#equals");r.addEventListener("click",(()=>window.location.reload()));const n=t=>{e.textContent=t},u=e=>e.classList.toggle("selected");let o="",s="",i="";const d=(e,t,r)=>{switch(r){case"divide":return Number(e)/Number(t);case"times":return Number(e)*Number(t);case"minus":return Number(e)-Number(t);case"plus":return Number(e)+Number(t)}};let a=null,m=!1;var b;b=e=>{!0===m&&(o="",s="",i="",m=!1),c.forEach((e=>e.classList.remove("selected"))),a=null,""===i?0==o.includes(".")&&(o+=e.target.innerText,n(o)):0==s.includes(".")&&(s+=e.target.innerText,n(s))},t.forEach((e=>e.addEventListener("click",b))),(e=>{c.forEach((t=>{t.addEventListener("click",e)}))})((e=>{if(!0===m&&(s="",m=!1),null!=a&&u(a),""!=s){let e=d(o,s,i);n(e),o=e,s=""}if(""!=o){let t=e.target;i=t.id,u(t),a=t}})),l.addEventListener("click",(()=>{if(""!=o&&""!=s&&""!=i){let e=d(o,s,i);n(e),o=e,m=!0}}))})();
import{w as S,r as b}from"./index.502ba138.js";import{x as L}from"./scheduler.29c706ef.js";const f={};function h(e){return e==="local"?localStorage:sessionStorage}function g(e,t,r){const o=(r==null?void 0:r.serializer)??JSON,d=(r==null?void 0:r.storage)??"local";function n(i,l){h(d).setItem(i,o.stringify(l))}if(!f[e]){const i=S(t,s=>{const a=h(d).getItem(e);a&&s(o.parse(a));{const p=m=>{m.key===e&&s(m.newValue?o.parse(m.newValue):null)};return window.addEventListener("storage",p),()=>window.removeEventListener("storage",p)}}),{subscribe:l,set:u}=i;f[e]={set(s){n(e,s),u(s)},update(s){const a=s(L(i));n(e,a),u(a)},subscribe:l}}return f[e]}const P=g("modeOsPrefers",!1),C=g("modeUserPrefers",void 0),x=g("modeCurrent",!1);function O(){const e=window.matchMedia("(prefers-color-scheme: light)").matches;return P.set(e),e}function I(e){C.set(e)}function z(e){const t=document.documentElement.classList,r="dark";e===!0?t.remove(r):t.add(r),x.set(e)}function H(){const e=document.documentElement.classList,t=localStorage.getItem("modeUserPrefers")==="false",r=!("modeUserPrefers"in localStorage),o=window.matchMedia("(prefers-color-scheme: dark)").matches;t||r&&o?e.add("dark"):e.remove("dark")}function W(){const e=window.matchMedia("(prefers-color-scheme: light)");function t(r){const o=document.documentElement.classList,d="dark";r===!0?o.remove(d):o.add(d)}t(e.matches),e.onchange=()=>{t(e.matches)}}const _="(prefers-reduced-motion: reduce)";function E(){return window.matchMedia(_).matches}b(E(),e=>{{const t=o=>{e(o.matches)},r=window.matchMedia(_);return r.addEventListener("change",t),()=>{r.removeEventListener("change",t)}}});function $(e){const t=e-1;return t*t*t+1}function k(e,{delay:t=0,duration:r=400,easing:o=$,axis:d="y"}={}){const n=getComputedStyle(e),i=+n.opacity,l=d==="y"?"height":"width",u=parseFloat(n[l]),s=d==="y"?["top","bottom"]:["left","right"],a=s.map(c=>`${c[0].toUpperCase()}${c.slice(1)}`),p=parseFloat(n[`padding${a[0]}`]),m=parseFloat(n[`padding${a[1]}`]),w=parseFloat(n[`margin${a[0]}`]),y=parseFloat(n[`margin${a[1]}`]),v=parseFloat(n[`border${a[0]}Width`]),M=parseFloat(n[`border${a[1]}Width`]);return{delay:t,duration:r,easing:o,css:c=>`overflow: hidden;opacity: ${Math.min(c*20,1)*i};${l}: ${c*u}px;padding-${s[0]}: ${c*p}px;padding-${s[1]}: ${c*m}px;margin-${s[0]}: ${c*w}px;margin-${s[1]}: ${c*y}px;border-${s[0]}-width: ${c*v}px;border-${s[1]}-width: ${c*M}px;`}}function D(e,{delay:t=0,duration:r=400,easing:o=$,start:d=0,opacity:n=0}={}){const i=getComputedStyle(e),l=+i.opacity,u=i.transform==="none"?"":i.transform,s=1-d,a=l*(1-n);return{delay:t,duration:r,easing:o,css:(p,m)=>`
			transform: ${u} scale(${1-s*m});
			opacity: ${l-a*m}
		`}}export{z as a,I as b,D as c,W as d,k as e,O as g,x as m,H as s};

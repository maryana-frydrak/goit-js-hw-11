import{a as c,S as l,i as a}from"./assets/vendor-B7mYVNgO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();async function u(e){const s="54988394-76eeb0dc25d7c96559704c852",i="https://pixabay.com/api/";try{return(await c.get(i,{params:{key:s,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(t){throw console.error("Помилка запиту:",t.message),new Error("Помилка завантажених даних")}}const d=new l(".gallery a",{captionsData:"alt",captionsDelay:250});function f(e){const s=document.querySelector(".gallery"),i=e.map(t=>` <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${t.tags}"
          />
        </a>
        <div class="info">
        <p><b>Likes:</b>${t.likes}</p>
        <p><b>Views:</b>${t.views}</p>
        <p><b>Comments:</b>${t.comments}</p>
        <p><b>Downloads:</b>${t.downloads}</p>
        </div>
      </li>`).join("");s.insertAdjacentHTML("beforeend",i),d.refresh()}function y(){const e=document.querySelector(".gallery");e.innerHTML=""}function m(){const e=document.querySelector(".loader");e&&e.classList.remove("is-hidden")}function h(){const e=document.querySelector(".loader");e&&e.classList.add("is-hidden")}const p=document.querySelector(".form");p.addEventListener("submit",e=>{e.preventDefault();const s=e.currentTarget.elements.query.value.trim();s&&(y(),m(),u(s).then(i=>{i.hits.length===0?a.error({message:"Sorry, there are no images matching your search query. Please try again!",background:"#ef4040",position:"topRight",width:"432",height:"88"}):f(i.hits)}).catch(i=>a.error({message:"Sorry, there are no images matching your search query. Please try again!",background:"#ef4040",position:"topRight",width:"432",height:"88"})).finally(()=>h()))});
//# sourceMappingURL=index.js.map

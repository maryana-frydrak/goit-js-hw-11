import{S as d,a as c,i as l}from"./assets/vendor-B7mYVNgO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const f=new d(".gallery a",{captionsData:"alt",captionDelay:250});function m(e){const s=document.querySelector(".gallery"),n=e.map(t=>` <li class="gallery-item">
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
      </li>`).join("");s.insertAdjacentHTML("beforeend",n),f.refresh()}function y(){const e=document.querySelector(".gallery");e.innerHTML=""}function u(){const e=document.querySelector(".loader");e&&e.classList.remove("is-hidden")}function i(){const e=document.querySelector(".loader");e&&e.classList.add("is-hidden")}async function p(e){const s="54988394-76eeb0dc25d7c96559704c852",n="https://pixabay.com/api/";try{return(await c.get(n,{params:{key:s,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(t){throw console.error("Помилка запиту:",t.message),new Error("Помилка завантажених даних")}}c.interceptors.request.use(function(e){return u(),e},function(e){return i(),Promise.reject(e)});c.interceptors.response.use(function(e){return i(),e},function(e){return i(),Promise.reject(e)});const h=document.querySelector(".form");h.addEventListener("submit",e=>{e.preventDefault();const s=e.currentTarget.elements.query.value.trim();s&&(y(),u(),p(s).then(n=>{n.hits.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",background:"#ef4040",position:"topRight",width:"432",height:"88"}):m(n.hits)}).catch(n=>l.error({message:"Sorry, there are no images matching your search query. Please try again!",background:"#ef4040",position:"topRight",width:"432",height:"88"})).finally(()=>i()))});
//# sourceMappingURL=index.js.map

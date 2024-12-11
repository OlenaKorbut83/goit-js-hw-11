import{S as m,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function f(s){const o="https://pixabay.com/api/",t=new URLSearchParams({key:"47588447-b6614111152463e9a843ad075",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${o}?${t}`;return fetch(i).then(e=>e.json())}const d=document.querySelector(".gallery");function p(s){const o=s.map(t=>`<li class='image-card'>
            <a href="${t.largeImageURL}" class="gallery-link">
            <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" class="gallery-image">
            </a>
            <div class="info">
            <p class="info-item">
            <b>Likes: ${t.likes}</b>
            </p>
            <p class="info-item">
            <b>Views: ${t.views}</b>
            </p>
            <p class="info-item">
            <b>Comments: ${t.comments}</b>
            </p>
            <p class="info-item">
            <b>Downloads: ${t.downloads}</b>
            </p>
            </div>
            </li>`).join("");d.innerHTML=o}function y(){new m(".gallery, a",{captionsData:"alt",captionDelay:250,overlay:!0,overlayOpacity:.8}).refresh()}const c=document.querySelector(".image-search-form"),g=document.querySelector(".gallery"),u=document.querySelector(".loading-indicator");c.addEventListener("submit",s=>{s.preventDefault(),g.innerHTML="";const o=s.target.elements.inputSearch.value.trim();if(!o){l.error({title:"Error",message:"Please enter your query.",position:"topRight"});return}h(),f(o).then(t=>{t.hits.length?setTimeout(()=>{p(t.hits),y(),n()},2e3):(l.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",color:"#EF4040",position:"topRight"}),n())}).catch(t=>{n()}),c.reset()});function h(){u.style.display="block"}function n(){u.style.display="none"}
//# sourceMappingURL=index.js.map

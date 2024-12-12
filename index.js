import{S as m,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function p(s){const o="https://pixabay.com/api/",r=new URLSearchParams({key:"47588447-b6614111152463e9a843ad075",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${o}?${r}`;return fetch(i).then(e=>e.json())}const f=document.querySelector(".gallery");function d(s){const o=s.map(r=>`<li class='image-card'>
            <a href="${r.largeImageURL}" class="gallery-link">
            <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" class="gallery-image">
            </a>
            <div class="info">
            <p class="info-item">
            <b>Likes: ${r.likes}</b>
            </p>
            <p class="info-item">
            <b>Views: ${r.views}</b>
            </p>
            <p class="info-item">
            <b>Comments: ${r.comments}</b>
            </p>
            <p class="info-item">
            <b>Downloads: ${r.downloads}</b>
            </p>
            </div>
            </li>`).join("");f.innerHTML=o}function y(){new m(".gallery, a",{captionsData:"alt",captionDelay:250,overlay:!0,overlayOpacity:.8}).refresh()}const c=document.querySelector(".image-search-form"),g=document.querySelector(".gallery"),u=document.querySelector(".loading-indicator");c.addEventListener("submit",s=>{s.preventDefault(),g.innerHTML="";const o=s.target.elements.inputSearch.value.trim();if(!o){n.error({title:"Error",message:"Please enter your query.",position:"topRight"});return}h(),p(o).then(r=>{r.hits.length?(d(r.hits),y(),l()):(n.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",color:"#EF4040",position:"topRight"}),l())}).catch(r=>{l(),n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}),c.reset()});function h(){u.style.display="block"}function l(){u.style.display="none"}
//# sourceMappingURL=index.js.map

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();new Swiper(".swiper",{slidesPerView:1,spaceBetween:16,loop:!0,direction:"horizontal",pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2},1200:{slidesPerView:3,spaceBetween:28}}});(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};o.openModalBtn.addEventListener("click",t),o.closeModalBtn.addEventListener("click",t);function t(){o.modal.classList.toggle("is-hidden")}})();$(document).ready(function(){$(".menu a").click(function(o){if($(this).attr("href").indexOf("#")!=-1){o.preventDefault();var t=$(this).attr("href").replace("#","");if($("#"+t).length>0){var r=$("body").find("#"+t).offset().top;$("html, body").animate({scrollTop:r},800)}}})});AOS.init();(()=>{const o={openModalBtn:document.querySelector("[buy-now-modal-open]"),closeModalBtn:document.querySelector("[buy-now-modal-close]"),modal:document.querySelector("[buy-now-modal]")};o.openModalBtn.addEventListener("click",t),o.closeModalBtn.addEventListener("click",t);function t(){o.modal.classList.toggle("is-hidden")}})();(()=>{const o=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),c=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),o.classList.toggle("is-open");const n=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};t.addEventListener("click",c),r.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(o.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();

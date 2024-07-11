document.querySelectorAll(".tree li").forEach(function(e){if(e.querySelector("ul")){var t=e.firstChild.textContent,n=document.createElement("span");n.textContent=t,e.firstChild.replaceWith(n),n.addEventListener("click",function(){var t=e.querySelector("ul");t.style.display="none"===t.style.display?"":"none"})}});
//# sourceMappingURL=index.3f025d40.js.map

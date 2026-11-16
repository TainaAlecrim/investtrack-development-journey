(function(){
 const d=window.INVESTTRACK_DATA;
 const $=s=>document.querySelector(s);
 $("#progress-number").textContent=d.progress+"%";
 $("#progress-bar").style.width=d.progress+"%";
 $("#progress-caption").textContent=d.progressCaption;
 const done=d.roadmap.filter(x=>x.status==="done").length;
 $("#completed-count").innerHTML=done+'<span class="stat-denom"> / '+d.roadmap.length+'</span>';
 $(".version").textContent=d.currentVersion;
 const next=d.roadmap.find(x=>x.status!=="done");
 $(".next-milestone").textContent=next?next.title:"Concluído";
 $("#roadmap-list").innerHTML=d.roadmap.map((x,i)=>`<article class="roadmap-item"><div class="roadmap-number">${String(i+1).padStart(2,"0")}</div><div><h3>${x.title}</h3><p>${x.description}</p></div><span class="status ${x.status}">${x.label}</span></article>`).join("");
 $("#release-list").innerHTML=d.releases.map(x=>`<article class="release"><div class="release-version">${x.version}</div><div><h3>${x.title}</h3><p>${x.description}</p></div><div class="release-date">${x.date}<br><span class="status ${x.status==="Atual"?"active":""}">${x.status}</span></div></article>`).join("");
 $("#tech-grid").innerHTML=d.technologies.map(x=>`<article class="tech-card"><span class="tech-icon">${x.icon}</span><b>${x.name}</b><small>${x.desc}</small></article>`).join("");
 $("#deliverables").innerHTML=d.deliverables.map(x=>`<article class="deliverable"><span class="check"></span><div><b>${x[0]}</b><small>${x[1]}</small></div></article>`).join("");
 const toggle=$(".menu-toggle"),nav=$(".nav");
 toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",open?"true":"false")});
 nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
})();
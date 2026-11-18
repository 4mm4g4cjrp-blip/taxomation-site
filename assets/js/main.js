document.documentElement.classList.remove('no-js');
// Dezentes Einblenden
(function(){var els=document.querySelectorAll('.reveal');if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});els.forEach(function(e){io.observe(e)})})();
// Menü schließen nach Klick
document.querySelectorAll('.menu .panel a').forEach(function(a){a.addEventListener('click',function(){a.closest('details').removeAttribute('open')})});
// Paketfinder (läuft nur im Browser, speichert nichts)
(function(){var f=document.getElementById('finder');if(!f)return;var out=document.getElementById('finder-result');var data=JSON.parse(document.getElementById('finder-data').textContent);
function upd(){var r=(f.querySelector('input[name=rf]:checked')||{}).value,m=(f.querySelector('input[name=ma]:checked')||{}).value;if(!r||!m){return}
var keys=[];if(r==='gruendung')keys.push('start');keys.push(r==='gmbh'?'gmbh':(r==='gruendung'?null:'epu'));if(r==='gruendung')keys.push('epu-oder-gmbh');if(m!=='0')keys.push('lohn');
keys=keys.filter(Boolean);var names=keys.map(function(k){return k==='epu-oder-gmbh'?'danach EPU oder GmbH':data[k].name}).join(' + ');
var txt=keys.filter(function(k){return data[k]}).map(function(k){return data[k].name+': '+data[k].price}).join(' · ');
var subj='Angebot anfragen – Paketfinder: '+names;var mail='mailto:'+data._email+'?subject='+encodeURIComponent(subj)+'&body='+encodeURIComponent(data._body);
out.innerHTML='<b>'+names+'</b><span>'+txt+'</span>'+(m==='viele'?'<br><span>Für größere Teams erstellen wir ein individuelles Lohn-Angebot.</span>':'')+'<br><a class="btn" href="'+mail+'">Angebot anfragen</a>'}
f.addEventListener('change',upd)})();

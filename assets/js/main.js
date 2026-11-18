document.documentElement.classList.remove('no-js');
// Dezentes Einblenden der Abschnittsüberschriften (kurz; entfällt bei prefers-reduced-motion)
(function(){var els=document.querySelectorAll('.reveal');var rm=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px 10% 0px'});els.forEach(function(e){io.observe(e)})})();
// Menü schließen nach Klick
document.querySelectorAll('.menu .panel a').forEach(function(a){a.addEventListener('click',function(){a.closest('details').removeAttribute('open')})});
// „E-Mail-Adresse kopieren“ (nur lokal in die Zwischenablage, nichts wird übertragen)
document.querySelectorAll('button.copy[data-copy]').forEach(function(b){
  if(!(navigator.clipboard&&window.isSecureContext)){
    // Fallback ohne Clipboard-API (z. B. über http): Text markieren
    b.hidden=false;b.addEventListener('click',function(){var a=b.parentNode.querySelector('a');var r=document.createRange();r.selectNodeContents(a);var s=getSelection();s.removeAllRanges();s.addRange(r);try{document.execCommand('copy');msg(b,'Kopiert.')}catch(e){msg(b,'Adresse markiert – bitte kopieren.')}});return}
  b.hidden=false;b.addEventListener('click',function(){navigator.clipboard.writeText(b.getAttribute('data-copy')).then(function(){msg(b,'Kopiert.')},function(){msg(b,'Kopieren nicht möglich.')})})});
function msg(b,t){var s=b.parentNode.querySelector('.copied');if(s){s.textContent=t;setTimeout(function(){s.textContent=''},3000)}}
// Paketfinder (läuft nur im Browser, speichert nichts)
(function(){var f=document.getElementById('finder');if(!f)return;f.addEventListener('submit',function(e){e.preventDefault()});var out=document.getElementById('finder-result');var data=JSON.parse(document.getElementById('finder-data').textContent);
function upd(){var r=(f.querySelector('input[name=rf]:checked')||{}).value,m=(f.querySelector('input[name=ma]:checked')||{}).value;if(!r||!m){return}
var keys=[];if(r==='gruendung'){keys.push('start','danach')}else{keys.push(r==='bilanz'?'bilanz':'epu')}if(m!=='0')keys.push('lohn');
var names=keys.map(function(k){return k==='danach'?'danach EPU oder Bilanz':data[k].name}).join(' + ');
var txt=keys.filter(function(k){return data[k]}).map(function(k){return data[k].name+': '+data[k].price}).join(' · ');
var subj='Angebot anfragen – Paketfinder: '+names;var mail='mailto:'+data._email+'?subject='+encodeURIComponent(subj)+'&body='+encodeURIComponent(data._body);
out.textContent='';var b=document.createElement('b');b.textContent=names;out.appendChild(b);var s=document.createElement('span');s.textContent=txt;out.appendChild(s);
if(m==='viele'){out.appendChild(document.createElement('br'));var v=document.createElement('span');v.textContent='Für größere Teams erstellen wir ein individuelles Lohn-Angebot.';out.appendChild(v)}
out.appendChild(document.createElement('br'));var a=document.createElement('a');a.className='btn';a.href=mail;a.textContent='Angebot anfragen';out.appendChild(a)}
f.addEventListener('change',upd)})();

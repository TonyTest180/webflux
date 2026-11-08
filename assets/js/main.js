(()=>{
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],rt=document.documentElement;
const eff=()=>rt.dataset.theme||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'),tg=$('#tg');
const sync=()=>{const d=eff()==='dark';tg.textContent=d?'☀':'☾';tg.title=d?'Светлая тема':'Тёмная тема'};
tg.onclick=()=>{const n=eff()==='dark'?'light':'dark';rt.dataset.theme=n;try{localStorage.setItem('wf-theme',n)}catch(e){}sync()};sync();
const bg=$('#bg'),setM=o=>{rt.classList.toggle('menu-open',o);bg.setAttribute('aria-expanded',o)};
bg.onclick=()=>setM(!rt.classList.contains('menu-open'));addEventListener('keydown',e=>{if(e.key==='Escape')setM(false)});
$$('.rv').forEach(el=>el.style.setProperty('--d',[...el.parentNode.children].indexOf(el)%6*.08+'s'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});$$('.rv').forEach(el=>io.observe(el));
const v=$('#veil');
if(rt.classList.contains('nv')){v.classList.add('out');try{sessionStorage.removeItem('wfnav')}catch(e){}setTimeout(()=>{rt.classList.remove('nv');v.classList.remove('out')},950)}
addEventListener('pageshow',e=>{if(e.persisted){v.classList.remove('go');rt.classList.remove('nv')}});
document.addEventListener('click',e=>{if(!e.target.closest('header')||e.target.closest('header nav a'))setM(false);const a=e.target.closest('a[href]');
 if(!a||e.defaultPrevented||e.metaKey||e.ctrlKey||e.shiftKey||a.target==='_blank'||a.origin!==location.origin||a.pathname===location.pathname)return;
 e.preventDefault();v.classList.add('go');try{sessionStorage.setItem('wfnav','1')}catch(x){}setTimeout(()=>{location.href=a.href},480)});
const h=$('#hero');if(h)h.addEventListener('pointermove',e=>{const r=h.getBoundingClientRect();h.style.setProperty('--mx',e.clientX-r.left+'px');h.style.setProperty('--my',e.clientY-r.top+'px')});
const lb=$('#lb');let set=[],cur=0;
const open=i=>{cur=(i+set.length)%set.length;const b=set[cur];$('#lbi').src=b.dataset.full;$('#lbi').alt=b.querySelector('img').alt;$('#lbc').textContent=b.querySelector('b').textContent+' — '+b.querySelector('small').textContent;lb.classList.add('on')};
document.addEventListener('click',e=>{const b=e.target.closest('button.tile[data-full]');if(b){set=[...b.parentNode.children];open(set.indexOf(b))}
 const c=e.target.closest('[data-copy]');if(c){const t=c.dataset.copy,sm=c.querySelector('small');try{navigator.clipboard.writeText(t).then(()=>{sm.textContent='Скопировано ✓'},()=>{sm.textContent='Ник: '+t})}catch(x){sm.textContent='Ник: '+t}}});
lb.onclick=e=>{const n=e.target.closest('[data-n]');n?open(cur+ +n.dataset.n):lb.classList.remove('on')};
addEventListener('keydown',e=>{if(!lb.classList.contains('on'))return;if(e.key==='Escape')lb.classList.remove('on');if(e.key==='ArrowRight')open(cur+1);if(e.key==='ArrowLeft')open(cur-1)});
})();

(function(){
var views=["datos","proyectos","hobbies"];
function show(){
 var h=(location.hash||"#datos").slice(1),v=views.indexOf(h)>=0?h:(h?"proyectos":"datos");
 views.forEach(function(x){document.getElementById("v-"+x).classList.toggle("on",x===v)});
 document.querySelectorAll("a.tab").forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+v)});
 if(views.indexOf(h)<0&&h){setTimeout(function(){var e=document.getElementById(h);if(e)e.scrollIntoView()},50)}else window.scrollTo(0,0);
 observe();
}
var io=("IntersectionObserver" in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)e.target.classList.add("s")})},{threshold:.1}):null;
function observe(){document.querySelectorAll(".rv").forEach(function(e){io?io.observe(e):e.classList.add("s")})}
window.addEventListener("hashchange",show);show();
document.getElementById("theme").onclick=function(){var r=document.documentElement,d=r.getAttribute("data-theme")!=="light";r.setAttribute("data-theme",d?"light":"dark")};
document.getElementById("foto").onchange=function(e){var f=e.target.files[0];if(!f)return;var r=new FileReader();r.onload=function(){var l=e.target.parentNode;l.innerHTML='<img alt="Israel Granda" src="'+r.result+'">'};r.readAsDataURL(f)};
window.enviar=function(f){location.href="mailto:?subject="+encodeURIComponent("Contacto portafolio – "+f.n.value)+"&body="+encodeURIComponent(f.m.value+"\n\n"+f.n.value+" ("+f.e.value+")");return false};
})();

(function(){var lb=document.getElementById("lb"),im=lb.querySelector("img"),L=[],k=0;
function open(a,i){L=a;k=i;im.src=L[k].src;im.alt=L[k].alt;lb.hidden=false}
function go(d){k=(k+d+L.length)%L.length;im.src=L[k].src}
document.addEventListener("click",function(e){var t=e.target;if(t.tagName!=="IMG")return;var p=t.closest(".proj");if(!p||t.closest("#lb"))return;var a=[].slice.call(p.querySelectorAll(".im img,.gal img"));open(a,a.indexOf(t))});
document.getElementById("lbx").onclick=function(){lb.hidden=true};document.getElementById("lbp").onclick=function(){go(-1)};document.getElementById("lbn").onclick=function(){go(1)};
lb.addEventListener("click",function(e){if(e.target===lb)lb.hidden=true});
document.addEventListener("keydown",function(e){if(lb.hidden)return;if(e.key==="Escape")lb.hidden=true;if(e.key==="ArrowLeft")go(-1);if(e.key==="ArrowRight")go(1)});})();

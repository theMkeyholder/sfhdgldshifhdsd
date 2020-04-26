dgi=(a)=>{return document.getElementById(a)}
blah=(ele)=>{ele.innerHTML=ele.value}
ireset=()=>{a.contentWindow.location.reload();}
window.onload=()=>{
window.a=dgi('a')
window.b=dgi('b')
window.c=dgi('c')
window.d=dgi('d')
window.run=function(){a.contentWindow.run()}
new Sortable(b,{group:{name:'blob',pull:'clone',put:true}})
new Sortable(c,{group:{name:'blob',pull:true,put:true}})
new Sortable(d,{group:{name:'blob',pull:false,put:true}})
setInterval(()=>{d.innerHTML=''},50)
a.contentWindow.run=()=>{eval(window.parent.c.textContent)}
setTimeout(()=>{
[...document.getElementsByClassName('todragable')].forEach((x)=>{new Sortable(x,{group:"blob"})})
},50)}
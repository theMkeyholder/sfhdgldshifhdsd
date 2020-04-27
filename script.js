dgi=(a)=>{return document.getElementById(a)}
blah=(ele)=>{ele.innerHTML=ele.value}
ireset=()=>{a.contentWindow.location.reload();setTimeout(()=>{Object.entries(window.iframeFunctions).forEach((x)=>{a.contentWindow.window[x[0]]=x[1]})},100);a.contentWindow.run=()=>{setTimeout(()=>{a.contentWindow.eval(window.parent.c.textContent)},100)}}
dellist=(ele)=>{ele.parentElement.parentElement.removeChild(ele.parentElement)}
delllist=(ele)=>{dellist(ele.parentElement)}
del=(ele)=>{ele.parentElement.removeChild(ele)}
var iframeFunctions={
	makeElement:(x)=>{var y=document.createElement(x);a.contentDocument.body.appendChild(y);return y},
	makeText:(x)=>{let y=document.createElement('p');y.innerHTML=x;a.contentDocument.body.appendChild(y);return y},
	MER:(x)=>{var y=document.createElement(x);return y},
	MTR:(x)=>{let y=document.createElement('p');y.innerHTML=x;return y},
	sin:Math.sin
}
window.onload=()=>{
window.a=dgi('a')
window.b=dgi('b')
window.c=dgi('c')
window.d=dgi('d')
window.run=function(){ireset();a.contentWindow.run()}
new Sortable(b,{group:{name:'blob',pull:'clone',put:true}})
new Sortable(c,{group:{name:'blob',pull:true,put:true}})
setTimeout(()=>{
[...document.querySelectorAll('.todragable')].forEach((x)=>{new Sortable(x,{group:"blob"})});
[...document.getElementsByClassName('blue')].forEach((x)=>{new Sortable(x,{group:"blob",onAdd:(e)=>{
	if(e.item.parentElement.childElementCount>1) {del(e.item)}
}})})
},50)}
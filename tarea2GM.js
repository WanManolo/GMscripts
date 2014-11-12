// ==UserScript==
// @name		tarea2
// @namespace	cursoJS
// @description	Tarea 2
// @version		1
// @grant		none
// ==/UserScript==

console.log('Inicio del resumen de noticias');

var h2 = document.getElementsByTagName('h2');
var hrefs = [];
var titles = [];
var pairs = [];
var a_nodes = [];
console.log("Hay "+h2.length+" noticias");
for (var i=0; i<h2.length; i++) {
	var a_node = h2[i].getElementsByTagName('a');
	titles.push(a_node[0].getAttribute('title'));
	hrefs.push(a_node[0].getAttribute('href'));
	pairs.push([a_node[0].getAttribute('title'),a_node[0].getAttribute('href')]);
	console.log("Titulo = "+titles[i]+" Y enlace: "+hrefs[i]);
}



/*
a_nodes[secs] = thisA[0];
var as = thisA[0].getAttribute('name');
if (as == null) {
anchors[secs] = thisA[0].getAttribute('href');
}
else anchors[secs] = as;
console.log('Anchor ' + secs + " " + anchors[secs]);
}
for ( var secs = 0; secs < h2.length; secs ++ ) {
var span = document.createElement('span');
span.setAttribute('style','background:lightblue');
if ( secs > 0 ) {
var ahref = document.createElement('a');
ahref.setAttribute('href','#'+anchors[secs-1]);
var txt=document.createTextNode('^');
ahref.appendChild(txt);
span.appendChild(ahref);
}
if ( secs < h2.length -1 ) {
span.appendChild(document.createTextNode(' | '));
var ahref = document.createElement('a');
ahref.setAttribute('href','#'+anchors[secs+1]);
var txt=document.createTextNode('v');
ahref.appendChild(txt);
span.appendChild(ahref);
}
a_nodes[secs].parentNode.insertBefore(span,a_nodes[secs]);
}*/

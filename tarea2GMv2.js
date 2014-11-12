// ==UserScript==
// @name        tarea2
// @namespace   oneman.rt@gmail.com
// @description Tarea 2
// @include		http://www.marca.com/*
// @include     http://www.ideal.es/*
// @include     http://www.elmundo.es/*
// @require		http://code.jquery.com/jquery-2.1.1.min.js
// @version     1
// @grant       none
// ==/UserScript==

function popUp() { alert('hi'); }
function toggleSchema() {
	$('#myDivGM').fadeToggle();
	
}


if (window.jQuery) {
	console.log('jQuery cargado con éxito.');
	var metaURL = $('meta[property="og:url"]').attr('content');
	if (metaURL === "http://www.ideal.es/") {
    	console.log('Estoy en IDEAL');
    	var body = $('<div id="myDivGM"><table id="myTableGM"><tr><td>.</td></tr></table></div>');
    	var r = $('<input id="myButtonGM" type="button" value="ACTIVAR/DESACTIVAR EL SCRIPT DE GREASEMONKEY"/>').click(toggleSchema);
        $('div[class="nav-topic"]').after(r);
    	
    	$('#myButtonGM').after(body);
   		var h3 = document.getElementsByTagName('h3');
		console.log(h3.length);
    }
   	else if (metaURL === "http://www.marca.com/") {
    	console.log('Estoy en MARCA ');
        //~ var r = $('<input id="myButtonGM" type="button" value="ACTIVAR/DESACTIVAR EL SCRIPT DE GREASEMONKEY"/>').click(popUp);
        var body = $('<div id="myDivGM"><table id="myTableGM"><tr><td>.</td></tr></table></div>');
        var r = $('<input id="myButtonGM" type="button" value="ACTIVAR/DESACTIVAR EL SCRIPT DE GREASEMONKEY"/>').click(toggleSchema);
        $("#barra-superior").before(r);
        $('#myButtonGM').after(body);
        //~ r.click(popUp);

    	//$("#myButton").before($('#contenido'));
    	//$("#myButton").click(function (){
    	//   var test = $('<button/>',{
    	//       text: 'Test', click: function () { alert('hi'); }
    	//       }).wrap('<tr><td></td></tr>').closest('tr');
    	//   $("#addNodeTable tr:last").before(test);
    	//});
   		var h2 = document.getElementsByTagName('h2');
		console.log(h2.length);
    }
    else if (metaURL === "http://www.elmundo.es/") {
		console.log('Estoy en MUNDO ');
		var body = $('<div id="myDivGM"><table id="myTableGM"><tr><td>.</td></tr></table></div>');
        var r = $('<input id="myButtonGM" type="button" value="ACTIVAR/DESACTIVAR EL SCRIPT DE GREASEMONKEY"/>').click(toggleSchema);
        $("#contenido").before(r);
        $('div[class="col col-12"]').before(body);
        //~ $("#barra-superior").after(r);
        //~ r.click(popUp);

    	//$("#myButton").before($('#contenido'));
    	//$("#myButton").click(function (){
    	//   var test = $('<button/>',{
    	//       text: 'Test', click: function () { alert('hi'); }
    	//       }).wrap('<tr><td></td></tr>').closest('tr');
    	//   $("#addNodeTable tr:last").before(test);
    	//});
   		var h2 = document.getElementsByTagName('h2');
		console.log(h2.length);
		for (var i = 0; i<h2.length; i++) {
			var a_node = h2[i].getElementsByTagName('a');
			var txt = a_node[0].getAttribute('title');
			var href = a_node[0].getAttribute('href');
			var input = '<tr>'+txt+'</tr><tr>'+href+'</tr>';
			$('#myTableGM tr:last').append(input);
		}
	}

	console.log('Inicio del resumen de noticias');
}
else {
	console.log('Error. No se ha podido cargar jQuery. Abortando...');
}



//~ var h2 = document.getElementsByTagName('h2');
//~ var hrefs = [];
//~ var titles = [];
//~ var pairs = [];
//~ var a_nodes = [];
//~ console.log("Hay "+h2.length+" noticias");
//~ for (var i=0; i<h2.length; i++) {
    //~ var a_node = h2[i].getElementsByTagName('a');
    //~ titles.push(a_node[0].getAttribute('title'));
    //~ hrefs.push(a_node[0].getAttribute('href'));
    //~ pairs.push([a_node[0].getAttribute('title'),a_node[0].getAttribute('href')]);
    //~ console.log("Titulo = "+titles[i]+" Y enlace: "+hrefs[i]);
//~ }
//~ 


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

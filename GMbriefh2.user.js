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

function popUp() { alert('Error!'); }
// Animación que muestra / esconde el resultado del script
function toggleSchema() { $('#myDivGM').fadeToggle(); }

// Comprobamos si se ha cargado JQuery
if (window.jQuery) {
	console.log('jQuery cargado con éxito.');
	// Creamos los elementos que añadiremos
	var bodyTable = $('<div id="myDivGM"><table id="myTableGM"><tr>Elementos de cabeceras</tr></table></div>');
	var r = $('<input id="myButtonGM" type="button" value="ACTIVAR/DESACTIVAR EL SCRIPT DE GREASEMONKEY"/>').click(toggleSchema);
	// Obtenemos los elementos h2
	var h2 = document.getElementsByTagName('h2');
	//~ console.log(h2.length);
	// Obtenemos los elementos h3
	var h3 = document.getElementsByTagName('h3');
	//~ console.log(h3.length);
	// Obtenemos los metadatos del html
	var metaURL = $('meta[property="og:url"]').attr('content');
	//~ console.log(metaURL);
	
	// Si estamos en la web del IDEAL
	if (metaURL.indexOf("http://www.ideal.es/") > -1) {
		// Añadimos el botón en la página de IDEAL
		$('div[class="nav-topic"]').after(r);
		// Justo después del botón añadimos el Div con la tabla
		$('#myButtonGM').after(bodyTable);
	}
	else if (metaURL.indexOf("http://www.marca.com/") > -1) {
		// Añadimos el botón y la tabla tras la primera barra menú
		$("#barra-superior").before(r);
		$('#myButtonGM').after(bodyTable);
	}
	else if (metaURL.indexOf("http://www.elmundo.es/") > -1) {
		// Añadimos el botón y la tabla tras la primera barra menú
		$("#contenido").before(r);
		$('div[class="col col-12"]').before(bodyTable);
	}
	// Para cada elemento h2 lo insertamos en la tabla
	if (h2 !== null) {
		for (var i = 0; i<h2.length; i++) {
			var a_node = h2[i].getElementsByTagName('a');
			var p = $(a_node[0]).wrap('<tr><td><p></p></td></tr>').closest('tr');
			$('#myTableGM tr:last').after(p);
		}
	}
	// Para cada elemento h3 lo insertamos en la tabla
	if (h3 !== null) {
		for (var i = 0; i<h3.length; i++) {
			var a_node = h3[i].getElementsByTagName('a');
			var p = $(a_node[0]).wrap('<tr><td><p></p></td></tr>').closest('tr');
			$('#myTableGM tr:last').after(p);
		}
	}
}
else {
	console.log('Error. No se ha podido cargar jQuery. Abortando...');
	popUp();
}

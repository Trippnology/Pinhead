// Programatically add elements
function addElement(name, attrs, innerText, parent) {
	var element = document.createElement(name);
	for (var a in attrs) {
		element.setAttribute(a, attrs[a]);
	}
	if (innerText !== undefined) {
		element.textContent = innerText;
	}
	if (parent === undefined) {
		parent = document.body;
	}
	return parent.appendChild(element);
}

// HEAD
addElement('title', null, 'Pinhead', document.head);
addElement('meta', {'name':'viewport', 'content':'width=device-width, initial-scale=1.0'}, null, document.head);
addElement('link', {'href':'http://cdn.trippnology.net/css/bootstrap.min.css','rel':'stylesheet'}, null, document.head);
addElement('link', {'href':'css/style.css','rel':'stylesheet'}, null, document.head);

// CONTENT
var container = addElement('div', {'class':'container'});
addElement('h1', {'class': 'page-header'}, 'Hello World!', container);
addElement('p', {'class': 'label label-important jqstatus'}, 'jQuery has not loaded.', container);

// JS
var library = addElement('script', {'src':'http://cdn.trippnology.net/js/jquery.min.js'});
library.addEventListener('load', function() {
	// Use some jQuery to show it loaded ok
	$('.jqstatus').removeClass('label-important').addClass('label-success').text('jQuery loaded successfully.');
	addElement('script', {'src':'http://cdn.trippnology.net/js/bootstrap.min.js'}, null, document.body);
});

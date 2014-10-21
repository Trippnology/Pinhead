// Programatically add elements
function addElement(name, attrs, innerText, parent) {
	var element = document.createElement(name);
	for (a in attrs) {
		element.setAttribute(a, attrs[a]);
	}
	if (innerText !== undefined) {
		element.textContent = innerText;
	}
	if (parent === undefined) {
		parent = document.body;
	}
	return parent.appendChild(element);
};

// Set a title
addElement('title', null, 'Pinhead', document.head);

// Add Bootstrap CSS
addElement('link', {'href':'http://cdn.trippnology.net/css/bootstrap.min.css','rel':'stylesheet'}, null, document.head);

// Set a viewport
addElement('meta', {'name':'viewport', 'content':'width=device-width, initial-scale=1.0'}, null, document.head);

// Add project stylesheet
addElement('link', {'href':'css/style.css','rel':'stylesheet'}, null, document.head);

// The container div we'll stuff all our content into
var container = addElement('div', {'class':'container'});
addElement('h1', {'class': 'page-header'}, 'Hello World!', container);
addElement('p', {'class': 'label label-important jqstatus'}, 'jQuery has not loaded.', container);

// Add main library
var library = addElement('script', {'src':'http://cdn.trippnology.net/js/jquery.min.js'});

// Do stuff once the library has loaded
library.addEventListener('load', function() {
	// Use some jQuery to check it loaded ok
	$('.jqstatus').removeClass('label-important').addClass('label-success').text('jQuery loaded successfully.');

	// Add Bootstrap plugins
	addElement('script', {'src':'http://cdn.trippnology.net/js/bootstrap.min.js'}, null, document.body);
});

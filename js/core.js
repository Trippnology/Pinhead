// Programatically add elements
function addElement(name, attrs, innerText, parent) {
	var element = document.createElement(name);
	for (a in attrs) {
		element.setAttribute(a, attrs[a]);
	}
	if (innerText !== undefined) {
		// Breaks on Firefox
		//element.innerText = innerText;
		// ???
		//element.nodeValue = innerText;
		// Seems the most compatible
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
addElement('link', {'href':'http://twitter.github.com/bootstrap/assets/css/bootstrap.css','rel':'stylesheet'}, null, document.head);

// Add Bootstrap responsive CSS
addElement('link', {'href':'http://twitter.github.com/bootstrap/assets/css/bootstrap-responsive.css','rel':'stylesheet'}, null, document.head);
// Set a viewport
addElement('meta', {'name':'viewport', 'content':'width=device-width, initial-scale=1.0'}, null, document.head);

// Add project stylesheet
addElement('link', {'href':'css/style.css','rel':'stylesheet'}, null, document.head);

// The container div we'll stuff all our content into
var container = addElement('div', {'class':'container'});
addElement('h1', {'class': 'page-header'}, 'Hello World!', container);
addElement('p', {'class': 'label label-important jqstatus'}, 'jQuery has not loaded.', container);

// Add main library
var library = addElement('script', {'src':'https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js'});

// Do stuff once the library has loaded
library.addEventListener('load', function() {
	// Use some jQuery to check it loaded ok
	$('.jqstatus').removeClass('label-important').addClass('label-success').text('jQuery loaded successfully.');
});

// Add console.log wrapper
addElement('script', {'src':'https://raw.github.com/cpatik/console.log-wrapper/master/consolelog.min.js'}, null, document.head);

// Add Bootstrap plugins
addElement('script', {'src':'http://twitter.github.com/bootstrap/assets/js/bootstrap.js'}, null, container);

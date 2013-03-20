// Programatically add elements
var addElement = function(name, attrs, innerText, parent) {
	var element = document.createElement(name);
	for (a in attrs) {
		element.setAttribute(a, attrs[a]);
	}
	if (innerText !== undefined) {
		element.innerText = innerText;
	}
	if (parent === undefined) {
		parent = document.body;
	}
	return parent.appendChild(element);
};

// Add console.log wrapper
var logWrapper = document.head.appendChild(
	document.createElement('script')
);
logWrapper.src = 'https://raw.github.com/cpatik/console.log-wrapper/master/consolelog.min.js'; // kicks off the request

// Set a title
document.head.appendChild(
	document.createElement('title')
).innerText = 'Pinhead';

// Add Bootstrap CSS
var bootstrapCSS = document.head.appendChild(
	document.createElement('link')
);
bootstrapCSS.href = 'http://twitter.github.com/bootstrap/assets/css/bootstrap.css';
bootstrapCSS.rel = 'stylesheet'; // kicks off the request

// Add Bootstrap responsive CSS
var bootstrapResponsiveCSS = document.head.appendChild(
	document.createElement('link')
);
bootstrapResponsiveCSS.href = 'http://twitter.github.com/bootstrap/assets/css/bootstrap-responsive.css';
bootstrapResponsiveCSS.rel = 'stylesheet'; // kicks off the request

// Add project stylesheet
var style = document.head.appendChild(
	document.createElement('link')
);
style.href = 'css/style.css';
style.rel = 'stylesheet'; // kicks off the request

// Add main library
var library = document.head.appendChild(
	document.createElement('script')
);
// Do stuff once the library has loaded
library.addEventListener('load', function () {
	// The container div we'll stuff all our content into
	var container = addElement('div', {'class': 'container'});
	addElement('h1', null, 'Hello World!', container);
	addElement('p', {'class': 'label label-important'}, 'jQuery has not loaded.', container);
	// Use a jQuery method to check it loaded ok
	$('.container p.label-important').removeClass('label-important').addClass('label-success').text('jQuery loaded successfully.');
});
library.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js'; // kicks off the request

// Add Bootstrap plugins
var bootstrapJS = document.head.appendChild(
	document.createElement('script')
);
bootstrapJS.src = 'http://twitter.github.com/bootstrap/assets/js/bootstrap.js'; // kicks off the request

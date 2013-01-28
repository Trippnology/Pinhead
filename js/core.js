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

// Set a title
document.head.appendChild(
	document.createElement('title')
).innerText = 'Pinhead';

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
	// now we're in business
	addElement('h1', null, 'Hello World!');
	// Use a jQuery method to check it loaded ok
	$('h1').after('<p>jQuery loaded successfully.</p>');
});
library.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js'; // kicks off the request

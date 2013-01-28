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
	addElement('div', {'class': 'container'});
	// Use a jQuery method to check it loaded ok
	$('.container').html('<h1>Hello World!</h1><p>jQuery loaded successfully.</p>');
});
library.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js'; // kicks off the request

// Add Bootstrap plugins
var bootstrapJS = document.head.appendChild(
	document.createElement('script')
);
bootstrapJS.src = 'http://twitter.github.com/bootstrap/assets/js/bootstrap.js'; // kicks off the request

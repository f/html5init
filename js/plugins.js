/* Author:

*/
$plug('render', function(element, options) {
	options.el.html(_.template(element.html(), options.vars));
});







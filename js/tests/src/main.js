test.ok = function (expression, expection, name) {
    var result = expression===expection;
    console[result?'info':'warn'](name + '|expected: ' + expection + ', result: ' + expression);
    console.groupEnd();
};

/**
 * Console Override *** it's better to use native Javascript to create elements.
 */
function uConsole() {
    this.context = document.getElementById('container');
}
uConsole.prototype.group = function(name) {
    this.groupOpened = document.createElement('ul');
    this.groupOpened.innerHTML = '<li class="group"><strong>'+name+'</strong></li>';
    this.context.appendChild(this.groupOpened);
};
uConsole.prototype.groupCollapsed = function(name) {};
uConsole.prototype.groupEnd = function() {};

uConsole.prototype.warn = function(message) {
    var strings = message.split('|');
    var test = document.createElement('li');
    test.className = 'test';
    test.innerHTML = '<p class="title">'+strings[0]+'</p><p class="description">'+strings[1]+'</p><span class="result fail">FAIL</span>';
    this.groupOpened.appendChild(test);
};
uConsole.prototype.info = function(message) {
    var strings = message.split('|');
    var test = document.createElement('li');
    test.className = 'test';
    test.innerHTML = '<p class="title">'+strings[0]+'</p><p class="description">'+strings[1]+'</p><span class="result ok">PASS</span>';
    this.groupOpened.appendChild(test);
};

console = new uConsole();

if (test.suites.length>0) {
	for (var i in test.suites)
		document.write('<script src="'+test.suites[i]+'.test.js" type="text/javascript"></script>');
}
/**
 * Console API Based UnitTest 
 * Author: fka
 */
test = window.test || {};
test.suites = [];
var console = window.console || {};
test.suite = function(name, units, setup, teardown) {
    console.group(name);
    if (typeof units == 'function')
        units();
    else {
        for (var _name in units) {
            if (units[_name][1] == null)
                units[_name][1] = true;

            //setup
            if (typeof setup == 'function')
                setup(_name);
                
            test.ok(units[_name][0], units[_name][1], _name);

            //teardown
            if (typeof teardown == 'function')
                teardown(_name);
        }
    }
    console.groupEnd();
};
test.start = function(name) {
    console.group(name);
};
test.end = function() {
    console.groupEnd();
};
test.ok = function (expression, expection, name) {
    var result = expression===expection;
    console[result?'groupCollapsed':'group']((result?'OK':'FAIL')+': '+name);
    console[result?'info':'warn']('Expected: ' + expection);
    console.info('Result: ' + expression);
    console.groupEnd();
};
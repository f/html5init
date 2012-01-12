/**
 * Testing unit test system.
 */
test.suite('Test Suite Tests', {
    'true is true': [true, true],
    'false is true': [false, true],
    'one is equal to one': [1, 1],
    'one is equal to two': [1, 2],
    '1+1 = 2?': [1+1, 2],
    '2*2 = 5?': [2*2, 5],
    'two is greater than three?': [2 > 3],
    'three is greater than two?': [3 > 2],
    'is function returns true?': [(function(){
        return false
    })()],
    'is function returns what i wanted?': [(function(){
        return 10/2;
    })(), 5],
    'get result from function': (function(){
        var question = 2 * 2;
        var expected = 4;
        return [question, expected];
    })(),
    'fka': ['fka', 'fka']
});

test.suite('Test group 2', function() { with(test) {
    ok(1,1, '1 is equal to 1');
    ok(1,2, '1 is equal to 2');
    ok(2+2,1, '1 is equal to 1');
    ok(1,1, '1 is equal to 1');
    ok((function(a,b) {return a+b})(1,-3), -2, '1 + -3 must be -2');
}});
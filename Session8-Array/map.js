var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});

var map = Array.prototype.map;
var a = map.call('Hello World', function(x) { return x.charCodeAt(0); });
// a agora vale [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
var elems = document.querySelectorAll('select option:checked');
var values = [].map.call(elems, function(obj) {
  return obj.value;
});
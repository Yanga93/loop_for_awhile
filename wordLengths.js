const assert = require('assert');
var wordLengths = function(strWord){
  var StrSumLengths = strWord.split(' ');

    var sumlengths = 0;
for (var i=0; i<StrSumLengths.length; i++){
  sumlengths = sumlengths + StrSumLengths[i].length;
}
   return sumlengths;
};
  var WordCrush = wordLengths('The pattern is rather overly ostentatious');
  console.log(WordCrush);
    assert.equal(WordCrush, '36');

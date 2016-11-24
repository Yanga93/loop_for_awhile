const assert = require('assert');
var shortestWord = function(strWord){
  var StrShortestWord = strWord.split(' ');

   var getshortestWord = " ";
      var shortestStr = 100;

for (var i=0; i<StrShortestWord.length; i++){
          var shortest = StrShortestWord[i];

if (shortest.length < shortestStr){
      shortestStr = shortest.length;
         getshortestWord = shortest
}
    }
  console.log(getshortestWord);
   return getshortestWord;
};
  var WordCrush = shortestWord('The pattern is rather overly ostentatious');
    assert.equal(WordCrush, 'is');

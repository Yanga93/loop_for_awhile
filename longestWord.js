const assert = require('assert');
var longestWord = function(strWord){
  var StrLongestWord = strWord.split(' ');

   var getlongestWord = " ";
      var longestStr = 0;

for (var i=0; i<StrLongestWord.length; i++){
          var longest = StrLongestWord[i];

if (longest.length > longestStr){
      longestStr = longest.length;
         getlongestWord = longest;
}
    }
  console.log(getlongestWord)
   return getlongestWord ;
};
  var WordCrush = longestWord('The pattern is rather overly ostentatious');
    assert.equal(WordCrush, 'ostentatious');

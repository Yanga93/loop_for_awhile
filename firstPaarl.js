const assert = require('assert');
var firstPaarl = function(strRegNum){
  var regNum = strRegNum.split(",");

    var firstOnly = [];
      for(var i=0; i<regNum.length; i++){

  if (regNum[i].startsWith('CJ')){
        firstOnly.push(regNum[i]);
      //console.log(firstOnly[i].trim());
}
  }
    return firstOnly[0];
};
var result = firstPaarl("CJ 3625, CY 2536, CA 4615, DR 12 TY GP, DRT 122 L");
  console.log(result);
    assert.equal(result,'CJ 3625');

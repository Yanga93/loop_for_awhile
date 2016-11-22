//const assert = require('assert');
  var allPaarl = function(regCar){
    var regNum = regCar.split(", ");

      var allRegNum = [];
        for(var i=0; i<regNum.length; i++){

if (regNum[i].startsWith('CJ')){
    allRegNum.push(regNum[i]);
}
  }
  console.log(allRegNum);
    return allRegNum;
};
  var result = allPaarl("CJ 3625, CA 4615, DR 12 TY GP, CJ 5636, DRT 122 L");
    //assert.equal(result, 'CJ 3625, CJ 5636');

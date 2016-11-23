const assert = require('assert');
  var allFromTown = function(regCar,location){
    var regNumList = regCar.split(",");

      var countRegNum = [];
        for(var i=0; i<regNumList.length; i++){

if (regNumList[i].startsWith(location)){
    countRegNum.push(regNumList[i]);
}
  }
    return countRegNum.length;
};
var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
 console.log(fromStellies);
  assert.deepEqual(fromStellies, 3);

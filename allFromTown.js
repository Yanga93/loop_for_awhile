const assert = require('assert');
  var allFromTown = function(regCar,location){
    var regNumList = regCar.split(",");

      var allRegNum = [];
        for(var i=0; i<regNumList.length; i++){

if (regNumList[i].startsWith(location)){
    allRegNum.push(regNumList[i]);
}
  }
    return allRegNum;
};
var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
 console.log(fromStellies);
  assert.deepEqual(fromStellies, ['CL 124', 'CL 345', 'CL 341'])

var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');
  console.log(fromKuilsriver);
    assert.deepEqual(fromKuilsriver, []);

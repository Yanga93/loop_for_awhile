//const assert = require('assert');
var displayEachregNumber = function(regList){
  var regNum = regList.split(",");

  for(var i=0; i<regNum.length; i++){
      console.log(regNum[i].trim());

  }
    return regNum[i];
};
var result = displayEachregNumber("CY 3625, CA 4615, DR 12 TY GP, DRT 122 L");
  //assert.equal(result, "CY 3625, CY 2536, CA 4615, DR 12 TY GP, DRT 122 L" )

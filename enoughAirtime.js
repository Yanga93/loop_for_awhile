const assert = require('assert');
var enoughAirtime =  function(airtime){
  var projectedUsage = airtime.split(',');

  var total = 0;
for (var i=0;i<projectedUsage.length; i++){

  switch (projectedUsage[i]) {
    case 'call':
      total = total + 1.88;
      break;

    case 'data':
      total = total + 12
      break;


    case 'sms':
      total = total + 0.75;
      break;

      default:
          return 0;
  }

}
    console.log((50-total).toFixed(2));
      return 50-total;
  };
      result = enoughAirtime('call,call,call,data,sms,sms,call,data');
    assert.equal(result.toFixed(2), 16.98);

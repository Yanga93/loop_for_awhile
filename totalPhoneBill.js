const assert = require('assert');
var totalPhoneBill =  function(phoneBill){
  var totalBill = phoneBill.split(',');

  var total = 0;
for (var i=0;i<totalBill.length; i++){

  switch (totalBill[i]) {
    case 'call':
      total = total + 2.75;
      break;

    case 'sms':
      total = total + 0.65;
      break;

      default:
          return 'Other phone bill';
  }

}
    console.log((total).toFixed(2));
      return total;

};
  var result = totalPhoneBill('call,sms,call,sms,sms');
    assert.equal(result.toFixed(2), 7.45);

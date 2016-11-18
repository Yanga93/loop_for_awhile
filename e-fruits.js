var fruits = ['apple', 'pear', 'mango', 'orange', 'banana'];

var efruits = [];
  for (var i=0;i<fruits.length;i++){
    console.log(fruits[i]);

    if (fruits[i].endsWith('e')){
      efruits.push(fruits[i]);
    }
  }
  console.log(efruits);

var shoopingList = function(strList){
    var myshoppingList = strList.split(", ");

    for(var i=0; i<myshoppingList.length; i++){
        console.log(myshoppingList[i]);

    }
      return myshoppingList;
};
shoopingList("1x bread, 6x hotdog rolls, 2x tubs of margarine");

var string = "Mississippi";
sub = string.indexOf("xxs");

console.log(sub);

var names = ['dan', 'steve', 'derek', 'james'];
var subStr = "rek";

var search = function(arr, sub) {
  var tempArr = [];
  var tempMatchCount = 0;

  arr.forEach(function(item) {

    var tempItem = item.split('');
    var tempSub = sub.split('');
    for(var i= 0; i < tempItem.length; i++) {
      for(var j = 0; j < tempSub.length; j++) {
        if(tempItem[i] == tempSub[j]) {
          tempMatchCount += 1;
        }
      }
    }
    if(tempMatchCount >= tempItem.length - 1) {
      tempArr.push(tempItem.join(''));
    }

    // if(item.indexOf(sub) !== -1) {
    //   tempArr.push(item);
    // } else {
    //   console.log('no match');
    // }
  });

  return tempArr;
};

console.log(search(names, subStr));

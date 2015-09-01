var string = "Mississippi";
sub = string.indexOf("xxs");

console.log(sub);

var names = ['dan', 'steve', 'derek', 'james'];
var subStr = "dan";

var search = function(arr, sub) {
  var tempArr = [];
  var tempMatchCount = 0;

  arr.forEach(function(item) {

    var tempItem = item.split('');
    var tempSub = sub.split('');
    var tempStr = "";

    tempSub = tempSub.reduce(function(a, a1) {
      return a+".*"+a1;
    });
    return (new RegExp(tempSub)).test(item);


    // if(item.indexOf(sub) !== -1) {
    //   tempArr.push(item);
    // } else {
    //   console.log('no match');
    // }
  });

  return tempArr;
};


// console.log(memorie(names, subStr));

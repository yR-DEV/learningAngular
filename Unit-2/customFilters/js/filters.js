app.filter('kebab', function() {
  return function(input) {
    if(typeof input === 'string') {
      return input.replace(/_/g, "-");
    } else {
      return "ONLY LETTERS PLS"
    }
  };
});

app.filter('camel', function() {
  var tempInput = [];
  var dashIndex;
  var tempArr = [];
  var tempLetter = "";

  return function(input) {
    tempInput = input.split('');
    tempInput.forEach(function(letter, i) {
      if(letter === '-' || letter === '_') {
        // console.log(letter);
        // tempInput.slice(i, 1);
        dashIndex = i;
        // console.log(dashIndex);
      } else if(i === dashIndex + 1) {
        console.log('next letter');
        tempLetter = tempInput[i].toUpperCase();
        tempArr.push(tempLetter);
      } else {
        console.log(tempInput[i]);
        tempLetter = tempInput[i].toLowerCase();
        tempArr.push(tempLetter);
      }


    });
    var finalArr = tempArr.join('');
    // console.log(tempArr);
    return finalArr;
  };
});

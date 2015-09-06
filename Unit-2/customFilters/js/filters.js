app.filter('kebab', function() {
  return function(input) {
    if(typeof input === 'string') {
      return input.replace(/_/g, "-");
    } else {
      return "ONLY LETTERS PLS";
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
        // console.log('next letter');
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

app.filter("pigLatin", function() {
  var tempArr = [];
  var finalArr = [];
  var tempLetter = "";

  return function(input) {
    // console.log(input);
    // return input;
    tempArr = input.split('');
    tempLetter = tempArr[0];
    tempArr.splice(0, 1);
    tempArr.push(tempLetter + "ay");
    finalArr = tempArr.join('');
    // console.log(finalArr);
    return finalArr;
  };
});

app.filter("redact", function() {

  var where = 0;
  var inputArr = [];

  return function(input, wordToRedact) {
    console.log(input, wordToRedact);
    inputArr = input.split(' ');
    for(var i = 0; i < inputArr.length; i++) {
      if(inputArr[i] === wordToRedact) {
        console.log('match');
        inputArr[i] = "REDACTED";
        where = i;
      }
    }
    var finalArr = inputArr.join(' ');
    return finalArr;
  };
});

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
  var inputArr = [];
  var redactArr = [];
  var finalArr = [];
  var letterIndex = [];
  var tempRedactCount = 0;

  return function(input, wordToRedact) {

    inputArr = input.split('');
    redactArr = wordToRedact.split('');
    // console.log(inputArr);

    for(var i = 0; i < inputArr.length; i++) {
      for(var j = 0; j < redactArr.length; j++) {
        if(inputArr[i] === redactArr[j]) {
          tempRedactCount += 1;
          letterIndex.push(inputArr[i]);
          finalArr.push(inputArr[i]);
          if (tempRedactCount === redactArr.length - 1) {

          }
        } else if(inputArr[i] === redactArr[j]) {
          tempRedactCount -= 1;
        }
      }
    }
    return input;
  };
});

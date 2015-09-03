var words = ['tan', 'ant', 'stand', 'at'];
var word = 'ant';
var tempArr = [];
var finalArr = [];
var notMatching = [];


sameWord = function(arr, word) {
  arr.forEach(function(arrWord) {
    arrWord !== word  ? notMatching.push(arrWord) : notMatching.push('');
  });
  anagram2(notMatching, word);
};

anagram2 = function(arr, word) {
  var newWord = word.split('').sort().join('');
  anagramArr(arr, newWord);
};


anagramArr = function(arr, newWord) {
  arr.forEach(function(word, i) {
    tempArr.push(word.split('').sort().join(''));
  });
  finalAnagramCheck(arr, tempArr, newWord);
};

finalAnagramCheck = function(arr, tempArr, newWord) {
  tempArr.forEach(function(match, i) {
    if(match === newWord) finalArr.push(arr[i]);
  });
  console.log(finalArr);
};

sameWord(words, word);
// console.log(anagram2(words, word));

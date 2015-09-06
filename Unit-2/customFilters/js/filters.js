app.filter('kebab', function() {
  return function(input) {
    if(typeof input === 'string') {
      return input.replace(/_/g, "-");
    } else {
      return "ONLY LETTERS PLS"
    }
  };
});

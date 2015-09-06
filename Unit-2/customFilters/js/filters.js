app.filter('kebab', function() {
  return function(input) {
    if(typeof(input) !== string) {
      console.log('not a string');
      return false;
    } else {
      return input.replace(/_/g, "-");
    }
  };
});

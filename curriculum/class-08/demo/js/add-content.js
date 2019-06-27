
var createGreeting = function() {
  var today = new Date();
  var hourNow = today.getHours();
  var greeting;
  
  if (hourNow > 18) {
    greeting = 'Good evening!';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon!';
  } else if (hourNow >= 0) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Welcome!';
  }
  
  return '<h3>'+ greeting + '</h3>';
}

var howMany = function() {
  var count = prompt('How many do you want to order?');
  while( isNaN(count) ) {
    count = prompt('Please enter a number. How many do you want?');
  }

  return Number(count);
}

var showAll = function() {
  var total = howMany();
  var result = '';

  for( var i = 0; i < total; i++) {
    result += '<li>Model #' + i + '</li>';
  }

  return result;
}

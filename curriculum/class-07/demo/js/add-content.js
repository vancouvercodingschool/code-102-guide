for (var i = 0; i <= 12; i = i + 1) {
  console.log(i * 8);
}


// var today = new Date();
var hourNow = prompt("What's the hour?");
var greeting;

if (hourNow > 18) {
  greeting = 'Good evening!';
} else if (hourNow > 12) {
  greeting = 'Good afternoon!';
} else if (hourNow > 0) {
  greeting = 'Good morning!';
} else {
  greeting = 'Welcome!';
}

document.write('<h3>'+ greeting + '</h3>');

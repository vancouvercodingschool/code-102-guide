// var today = new Date();
var hourNow = prompt('What\'s the hour, friend?');
hourNow = Number(hourNow);
var greeting;

if (hourNow > 18) {
  greeting = 'Good evening, Class!';
} else if (hourNow > 12) {
  greeting = 'Good afternoon, Class!';
} else if (hourNow > 0) {
  greeting = 'Good morning!';
} else {
  greeting = 'Welcome!';
}

document.write(greeting);


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

var getOrder = function () {
  var itemsOrdered = [];
  var orderMore = prompt('Would you like to place an order?').toLowerCase();

  while (orderMore == 'y' || orderMore == 'yes') {
    itemsOrdered.push(prompt('What kind of model would you like to order?'));
    orderMore = prompt('Would you like to order another model?');
  }

  return itemsOrdered;
}

var showAll = function () {
  var items = getOrder();
  var result = '';

  for (var i = 0; i < items.length; i++) {
    result += '<li>Model #' + (i + 1) + ': ' + items[i] + '</li>';
  }

  return result;
}

/***** REFACTOR the above to work with Objects  *****/

var getOrderObjects = function () {
  var itemsOrdered = [];
  var orderMore = prompt('Would you like to place an order?').toLowerCase();
  var order;

  while (orderMore == 'y' || orderMore == 'yes') {
    order = prompt('What kind of model would you like to order?');
    
    itemsOrdered.push(
      {
        item: order,
        timestamp: new Date()
      }
    );
    
    orderMore = prompt('Would you like to order another model?');
  }

  return itemsOrdered;
}

var showAllObjects = function () {
  var items = getOrderObjects();
  var result = '';

  for (var i = 0; i < items.length; i++) {
    result += '<li>Model #' + (i + 1) + ': ' + items[i].item + ' at ' + items[i].timestamp + '</li>';
  }

  return result;
}

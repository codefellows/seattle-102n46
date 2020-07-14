function addGreeting() {
  var today = new Date();
  var hourNow = today.getHours();

  var greeting;
  if (hourNow > 18) {
    greeting = 'Good evening!';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon!';
  } else if (hourNow > 0) {
    greeting = 'Good morning';
  } else {
    greeting = 'Welcome';
  }
  return document.write('<h3>' + greeting + '</h3>');
}

function addUsername() {
  var name = prompt('What is your name?');
  var message = 'Hello, ' + name;

  return document.write('<h3>' + message + '</h3>');
}

function askPreference() {
  var preference = prompt('would you like a house or a hotel?');
  var response;

  if (preference === 'house') {
    response = 'Houses are Great!';
  } else if (preference === 'hotel') {
    response = 'Hotels are FABULOUS!';
  } else {
    response = 'Fine, don\'t answer!';
  }

  return document.write('<h3>' + response + '</h3>');
}


function sayHello() {
  console.log('Hello World!');
}

var sayHelloCookie = function () {
  console.log('Hello Cookie!');
}

function sayHelloUser(name) {
  console.log('Hello ' + name);
}

// I want a white cake with lavender frosting and lemon filling.
function buildCake(cakeType, frostingType, fillingType){
  var message = 'I want a ' + cakeType + ' cake with ' + frostingType + ' frosting and ' + fillingType + ' filling.'

  return message;
}

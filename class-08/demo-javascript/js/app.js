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


//this is now a helper function
function askPreference() {
  var preference = prompt('Would you like a house or a hotel?');
  var item;

  // while (true && true) {
  //   //do the thing
  // }
  while (preference !== 'house' && preference !== 'hotel'){
    preference = prompt('PLEASE answer exactly!  Would you like a house or a hotel?')
  }

  if (preference === 'house') {
    item = '<img src="images/house.png">';
  } else if (preference === 'hotel') {
    item = '<img src="images/hotel.png">';
  }

  return item;
}

//helper function
function getCount(){
  var count = prompt('Great, how many would you like?');

  while (isNaN(count) || count === ''){
    count = prompt('PLEASE enter a number!  How many would you like?');
  }

  return count;
}

function getStarCount(){
  var starCount = prompt('How many stars would you rate that experience? 1 to 5.  ');
  
  while (isNaN(starCount) || starCount === ''){
    starCount = prompt('PLEASE enter a number!  How would you rate taht experience?');
  }
  return starCount
}

//example conditional statement - evaluates to false becasue one false ejects from conditional
// ((500 * 2 === 1000) && (false && true) && true)

function showOrder(){
  var result = '';
  var itemType = askPreference();
  var total = getCount();

  for (var i = 0; i < total; i++){
    result = result + '<p>' + itemType + '</p>';
  }

  return document.write(result);
}

function showRating(){
  var result = '';
  var starCount = getStarCount();

  for (var i = 0; i < starCount; i++){
    result = result + '<p><img src="images/star.png"></p>';
  }

  return document.write(result);
}
var preference = prompt('would you like a house or a hotel?');
var response;

if (preference === 'house'){
  response = 'Houses are Great!';
} else if (preference === 'hotel'){
  response = 'Hotels are FABULOUS!';
} else {
  response = 'Fine, don\'t answer!';
}

document.write('<h3>' + response + '</h3>');
var preference = prompt('Do you like a pickles or a beets?');
var response;

if (preference === 'pickles'){
  response = 'Pickles are Great!';
} else if (preference === 'beets'){
  response = 'Beets are FABULOUS!';
} else {
  response = 'Fine, don\'t answer!';
}

document.write('<h3>' + response + '</h3>');
// Store 3 images
var bg0 = '../img/mountain.svg';
var bg1 = '../img/night-sky.svg';
var bg2 = '../img/sunny-day.svg';

//Random Number Generator
var limit = 3;
var randNum = Math.floor(Math.random() * limit);
console.log(randNum); 

// Get random body class
// Change background color
$('#stage').addClass( 'bg' + randNum );

var $svg = $('svg').drawsvg();

$svg.drawsvg('animate');






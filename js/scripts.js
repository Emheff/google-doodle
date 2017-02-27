// Store 3 images
var img0 = '../img/400.jpg';
var img1 = '../img/300.jpg';
var img2 = '../img/200.jpg';

// Get random number
var max = 3;
var numRand = Math.floor( Math.random() * max );
console.log(numRand);

// Display randomized images
$('#random').attr( 'src', eval('img' + numRand) );

// Hide square
    $('#stage.svg').hide();
// click on button
$('button').click(function() {
                  

// show square
    $('#stage.svg').show('slow');
    console.log('Ok')
});



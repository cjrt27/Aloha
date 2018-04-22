$(function() {

//*---------------------------------------------------------------------Smooth Scrolling Start------------------------------------------*//

$('.handCraftedLink').click( function() {
     $('html, body').animate({
          scrollTop: $('#handcrafted').offset().top
     }, 400);
});



$('.midsectionContainerLink').click( function() {
     $('html, body').animate({
          scrollTop: $('#midsectionContainer').offset().top
     }, 400);
});



$('.mostlovedproductsLink').click( function() {
     $('html, body').animate({
          scrollTop: $('#mostlovedproducts').offset().top
     }, 400);
});



$('.updatesLink').click( function() {
     $('html, body').animate({
          scrollTop: $('#updates').offset().top
     }, 400);
});



//*---------------------------------------------------------------------Smooth Scrolling End------------------------------------------*//

//*---------------------------------------------------------------------Cart Counter Start------------------------------------------*//
var itemCount = 0;

$('.addToCart').click(function (){
  itemCount ++;
  $('#itemCount').html(itemCount).css('display', 'block');
}); 

//*---------------------------------------------------------------------Cart Counter End------------------------------------------*//

//*---------------------------------------------------------------------Carosel Start------------------------------------------*//


$(document).ready(function(){
  $('.mostLovedCarosel').slick({
		autoplay: true,
		dots:true,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		responsive: 
		[{
			breakpoint: 1239,
				settings: 
					{
					arrows: false,
					autoplay: true,
					dots:true,
					slidesToShow: 4,
					slidesToScroll: 4}
		},
		{
			breakpoint: 1025,
				settings: 
					{
					arrows: false,
					autoplay: true,
					dots:true,
					slidesToShow: 2,
					slidesToScroll: 2}
		},
		
			{
				breakpoint: 599,
				settings: 
					{
					arrows: false,
					autoplay: true,
					dots:true,
					slidesToShow: 1,
					slidesToScroll: 1
					}
			}
		]
							});
})

//*---------------------------------------------------------------------Carosel End------------------------------------------*//


//*---------------------------------------------------------------------Email Input Alert Message Start------------------------------------------*//


$(document).ready(function(e) {
$('#subscribebutton').click(function() {
var sEmail = $('#emailinput').val();
// Checking Empty Fields
if ($.trim(sEmail).length == 0) {
alert('Field is Mandatory');
e.preventDefault();
}
if (validateEmail(sEmail)) {
alert('Thanks for Subscribing!');
}
else {
alert('Please Enter a Valid Email Address');
e.preventDefault();
}
});
});
// Function that validates email address through a regular expression.
function validateEmail(sEmail) {
var filter = /^[\w-.+]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
if (filter.test(sEmail)) {
return true;
}
else {
return false;
}
}
//*---------------------------------------------------------------------Email Input Alert Message End------------------------------------------*//



})



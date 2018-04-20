$(function() {
var itemCount = 0;

$('.addToCart').click(function (){
  itemCount ++;
  $('#itemCount').html(itemCount).css('display', 'block');
}); 

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




})



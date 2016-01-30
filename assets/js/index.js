











$(document).ready(function(){
	$(".link").css("color","#333");
});

$(document).ready(function(){
$( ".link" ).on( "mouseover", function() {
  $( this ).css({"color":"#3FC4FC"});
});
$( ".link" ).on( "mouseout", function() {
  $( this ).css({"color":"#333"} );
});
});
$(document).ready(function(){
	$("body").css("overflow","hidden");
});

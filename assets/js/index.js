
// NAVBAR STYLE SECTION
// ==============================

$(document).ready(function(){
    $(".link1").css({"color":"#4682B4","font-size":"14px"});
    $(".link2").css({"color":"#4682B4","font-size":"14px"});
    $(".link3").css({"color":"#4682B4","font-size":"14px"});
    $(".link4").css({"color":"#4682B4","font-size":"14px"});
    $(".link5").css({"color":"#4682B4","font-size":"14px"});
    $(".link6").css({"color":"#4682B4","font-size":"14px"});
    $(".link7").css({"color":"#4682B4","font-size":"14px"});
});

$(document).ready(function(){
$( ".link1" ).on( "mouseover", function() {
  $( this ).css({"background-color":"#4682B4","color":"white","font-size":"16px","font-weight":"800"});
});
$( ".link2" ).on( "mouseover", function() {
  $( this ).css({"background-color":"#4682B4","color":"white","font-size":"16px","font-weight":"800"});
});
$( ".link3" ).on( "mouseover", function() {
  $( this ).css({"background-color":"#4682B4","color":"white","font-size":"16px","font-weight":"800"});
});
$( ".link4" ).on( "mouseover", function() {
  $( this ).css({"background-color":"#4682B4","color":"white","font-size":"16px","font-weight":"800"});
});
$( ".link5" ).on( "mouseover", function() {
  $( this ).css({"background-color":"#4682B4","color":"white","font-size":"16px","font-weight":"800"});
});
$( ".link6" ).on( "mouseover", function() {
  $( this ).css({"background-color":"#4682B4","color":"white","font-size":"16px","font-weight":"800"});
});
$( ".link7" ).on( "mouseover", function() {
  $( this ).css({"background-color":"#4682B4","color":"white","font-size":"16px","font-weight":"800"});
});
$( ".link1" ).on( "mouseout", function() {
  $( this ).css({"color":"#4682B4","background-color":"#FDFDFD","font-size":"14px","font-weight":""});
});
$( ".link2" ).on( "mouseout", function() {
  $( this ).css({"color":"#4682B4","background-color":"#FDFDFD","font-size":"14px","font-weight":""});
});
$( ".link3" ).on( "mouseout", function() {
  $( this ).css({"color":"#4682B4","background-color":"#FDFDFD","font-size":"14px","font-weight":""});
});
$( ".link4" ).on( "mouseout", function() {
  $( this ).css({"color":"#4682B4","background-color":"#FDFDFD","font-size":"14px","font-weight":""});
});
$( ".link5" ).on( "mouseout", function() {
  $( this ).css({"color":"#4682B4","background-color":"#FDFDFD","font-size":"14px","font-weight":""});
});
$( ".link6" ).on( "mouseout", function() {
  $( this ).css({"color":"#4682B4","background-color":"#FDFDFD","font-size":"14px","font-weight":""});
});
$( ".link7" ).on( "mouseout", function() {
  $( this ).css({"color":"#4682B4","background-color":"#FDFDFD","font-size":"14px","font-weight":""});
});
});

//============================================================

// BODY SCROLLBAR HIDDEN
// ==============================

$(document).ready(function(){
  $("body").css("overflow","hidden");
});

//===============================================================

// DISABLE AUTO SLIDE
// ==============================

$(document).ready(function(){
     $("#myCarousel").carousel({
         interval : false
     });
});

//================================================================

//SCROLLBAR STYLE
//====================
$(document).ready(function(){ 

    $("html").niceScroll({styler:"fb",cursorcolor:"#000"});

  });
//==================================================================

// SLIDEBAR CLICKAABLE BUTTONS 
//=======================================================================
/*$(document).ready(function(){
 $("#tab").hover(function(){
   $("this").css({"background":"#ff7b29"});
  });
   
 $("#tab2").hover(function(){
   $("this").css({"background":"#ff7b29"});
  });

 $("#tab3").hover(function(){
   $("this").css({"background":"#ff7b29"});
  });

 $(".tab4").hover(function(){
   $("this").css({"background":"#ff7b29"});
  });

});*/

$(document).ready(function(){
$("#tab").css({"background-color":"#C25858"});
});

$(document).ready(function(){
  $("#tab").click(function(){
    $("#tab").css({"background-color":"#C25858"});
    $("#tab2").css({"background-color":"#2F4F4F"});
    $("#tab3").css({"background-color":"#2F4F4F"});
    $("#tab4").css({"background-color":"#2F4F4F"});
    $("#advsearch").removeClass("hideall");
    $(".change").addClass("hideall");
});
});  

$(document).ready(function(){
  $("#tab2").click(function(){
    $("#tab2").css({"background-color":"#C25858"});
    $("#tab").css({"background-color":"#2F4F4F"});
    $("#tab3").css({"background-color":"#2F4F4F"});
    $("#tab4").css({"background-color":"#2F4F4F"});
    $("#advsearch1").removeClass("hideall");
    $(".change1").addClass("hideall");

});
});

$(document).ready(function(){
  $("#tab3").click(function(){
    $("#tab3").css({"background-color":"#C25858"});
    $("#tab2").css({"background-color":"#2F4F4F"});
    $("#tab").css({"background-color":"#2F4F4F"});
    $("#tab4").css({"background-color":"#2F4F4F"});
    $("#advsearch2").removeClass("hideall");
    $(".change2").addClass("hideall");
});
});

$(document).ready(function(){
  $("#tab4").click(function(){
    $("#tab4").css({"background-color":"#C25858"});
    $("#tab2").css({"background-color":"#2F4F4F"});
    $("#tab3").css({"background-color":"#2F4F4F"});
    $("#tab").css({"background-color":"#2F4F4F"});
    $("#advsearch3").removeClass("hideall");
    $(".change3").addClass("hideall");
});
});

//==============================================================================

$(document).ready(function(){
  $("#advsearch").click(function(){
  $("#advsearch").addClass("hideall");
  $(".change").removeClass("hideall");
  });
});

$(document).ready(function(){
  $("#advsearch1").click(function(){
  $("#advsearch1").addClass("hideall");
  $(".change1").removeClass("hideall");
  });
});

$(document).ready(function(){
  $("#advsearch2").click(function(){
  $("#advsearch2").addClass("hideall");
  $(".change2").removeClass("hideall");
  });
});

$(document).ready(function(){
  $("#advsearch3").click(function(){
  $("#advsearch3").addClass("hideall");
  $(".change3").removeClass("hideall");
  });
});

//==============================================================================

$(document).ready(function(){
  $("#arrow").click(function(){
    $("#test").addClass("hideall");
    $("#arrow").addClass("hideall");
    $("#arrowback").removeClass("hideall")

  });
});

$(document).ready(function(){
  $("#arrowback").click(function(){
    $("#test").removeClass("hideall");
    $("#arrow").removeClass("hideall");
    $("#arrowback").addClass("hideall");
    $("#arrow").css({"top":"-180px","left":"10px"});
  });
});
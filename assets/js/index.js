
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
$(document).ready(function(){
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

});

$(document).ready(function(){
$("#tab").css({"width":"150px","height":"50px","background-color":"#ff7b29"});
});

$(document).ready(function(){
  $("#tab").click(function(){
    $("#tab").css({"width":"150px","height":"50px","background-color":"#ff7b29","margin-right":"20px","margin-bottom":"20px"});
    $("#tab2").css({"width":"150px","height":"50px","background-color":"#2F4F4F"});
    $("#tab3").css({"width":"150px","height":"50px","background-color":"#2F4F4F"});
    $("#tab4").css({"width":"150px","height":"50px","background-color":"#2F4F4F"});
    $("#imgtext").text("this is some text from image one");
});
});  

$(document).ready(function(){
  $("#tab2").click(function(){
    $("#tab2").css({"width":"150px","height":"50px","background-color":"#ff7b29","margin-right":"20px","margin-bottom":"20px"});
    $("#tab").css({"width":"150px","height":"50px","background-color":"#2F4F4F"});
    $("#tab3").css({"width":"150px","height":"50px","background-color":"#2F4F4F"});
    $("#tab4").css({"width":"150px","height":"50px","background-color":"#2F4F4F"});
    $("#imgtext").text("text for image two");
});
});

$(document).ready(function(){
  $("#tab3").click(function(){
    $("#tab3").css({"width":"150px","height":"50px","background-color":"#ff7b29","margin-right":"20px","margin-bottom":"20px"});
    $("#tab2").css({"width":"150px","height":"50px","background-color":"#2F4F4F"});
    $("#tab").css({"width":"150px","height":"50px","background-color":"#2F4F4F"});
    $("#tab4").css({"width":"150px","height":"50px","background-color":"#2F4F4F"});
    $("#imgtext").text("text for image three");
});
});

$(document).ready(function(){
  $("#tab4").click(function(){
    $("#tab4").css({"width":"150px","height":"50px","background-color":"#ff7b29","margin-right":"20px","margin-bottom":"20px"});
    $("#tab2").css({"width":"150px","height":"50px","background-color":"#2F4F4F"});
    $("#tab3").css({"width":"150px","height":"50px","background-color":"#2F4F4F"});
    $("#tab").css({"width":"150px","height":"50px","background-color":"#2F4F4F"});
    $("#imgtext").text("text for image four");
});
});
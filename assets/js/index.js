











$(document).ready(function(){
	$(".link").css("color","#4682B4");
});

$(document).ready(function(){
$( ".link" ).on( "mouseover", function() {
  $( this ).css({"background-color":"#4682B4","color":"white","font-size":"20px;","font-weight":"800"});
});
$( ".link" ).on( "mouseout", function() {
  $( this ).css({"color":"#4682B4","background-color":"#F7F7F7","font-size":"14px;","font-weight":"600"});
});
});
$(document).ready(function(){
	$("body").css("overflow","hidden");
});
//$(document).ready(function(){
	//$("fig1").css("background-image","url("+ assets/images/download.jpg +")");
//});
    /*$(document).ready(function() {
        $('#tab1').bind("mouseover", function(){
            var col  = $(this).css("background-color");

            $(this).css("background", "red");
            $(this).css("color", "white");

            $(this).bind("mouseout", function(){
                $(this).css("background", col);
            });    
        });    
    });
    $(document).ready(function() {
        $('#tab2').bind("mouseover", function(){
            var color  = $(this).css("background-color");

            $(this).css("background", "red");

            $(this).bind("mouseout", function(){
                $(this).css("background", color);
            })    
        })    
    })*/
       /*$(document).ready(function() {
        $('#tab3').bind("mouseover", function(){
            var color  = $(this).css("background-color");

            $(this).css("background", "red");

            $(this).bind("mouseout", function(){
                $(this).css("background", color);
            })    
        })    
    })

       $(document).ready(function() {
        $('#tab4').bind("mouseover", function(){
            var color  = $(this).css("background-color");

            $(this).css("background", "red");

            $(this).bind("mouseout", function(){
                $(this).css("background", color);
            })    
        })    
    })*/


    /*$(document).ready(function() {
        $('#tab1').click(function(){
        	$("#fig1").removeClass("hideall")
        	$("#fig2").addClass("hideall")
        	$("#fig3").addClass("hideall")
        	$("#fig4").addClass("hideall")
        });
         $('#tab2').click(function(){
        	$("#fig2").removeClass("hideall")
        	$("#fig1").addClass("hideall")
        	$("#fig3").addClass("hideall")
        	$("#fig4").addClass("hideall")
        });
        $('#tab3').click(function(){
        	$("#fig3").removeClass("hideall")
        	$("#fig1").addClass("hideall")
        	$("#fig2").addClass("hideall")
        	$("#fig4").addClass("hideall")
        });
        $('#tab4').click(function(){
        	$("#fig4").removeClass("hideall")
        	$("#fig1").addClass("hideall")
        	$("#fig3").addClass("hideall")
        	$("#fig2").addClass("hideall")

        });
    });*/
$(document).ready(function(){
     $("#myCarousel").carousel({
         interval : false
     });
});
$(document).ready(() => {

      $('.image-frame').hover(function(){
  		$('.image-caption',this).slideToggle('slow');
  	     }, function(){
  		$('.image-caption',this).slideToggle('slow');
        });

        $(".moveHexY").click(function() {
              $(this).css("transform","translateY(100px)");
            }
        });

        $(".moveHexX").click(function() {
              $(this).css("transform","translateX(100px)");
            }
        });

      $("#titleX").click(function(){
        $("#titleX").fadeOut("slow");
        $("#titleE").fadeIn("slow");
        $("#DFE").fadeIn("slow");
      });

      $("#titleE").click(function(){
        $("#titleE").fadeOut("slow");
        $("#titleM").fadeIn("slow");
        $("#DFM").fadeIn("slow");
        $("#DFE").fadeOut("slow");
      });

      $("#titleM").click(function(){
        $("#titleM").fadeOut("slow");
        $("#titleC").fadeIn("slow");
        $("#DFC").fadeIn("slow");
        $("#DFM").fadeOut("slow");
      });

      $("#titleC").click(function(){
        $("#titleC").fadeOut("slow");
        $("#titleE").fadeIn("slow");
        $("#DFE").fadeIn("slow");
        $("#DFC").fadeOut("slow");
      });
});

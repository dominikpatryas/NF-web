
$(document).ready(function () {
    // $('body').css('display', 'none').fadeIn(1000);
    $('.head-text, .second-content').css('display', 'none').fadeIn(1500);
    $('.first-box, .icon, .second-box').css('display', 'none').slideDown(1500);
  
   
  
  });

  $(document).ready(function(){
    $(".fa-align-justify").click(function(){
  
      if($('#low-res-div').css('display') == 'none')
      {
        $("#low-res-div").fadeIn("slow");
      }
  else {
    $("#low-res-div").fadeOut();
  }
    });
  });
  
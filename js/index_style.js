// $(function(){
//     function yourfunction(event) {
//       if (document.getElementById('low-res-div').style.display == "block") {
//         document.getElementById('low-res-div').style.display = "none";
//       } else {
//         document.getElementById('low-res-div').style.display = "block";
//       }
      
//     }
//     $('.fa-align-justify').click(yourfunction);
// });

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

$(document).ready(function () {
  $('body').css('display', 'none').fadeIn(1000);
  $('.first').css('display', 'none').slideDown(1500);
  $('.opis p').css('display', 'none').fadeIn(1500);
  $('.second').css('display', 'none').fadeIn(2500);

 

});


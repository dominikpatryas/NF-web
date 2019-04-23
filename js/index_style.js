$(function(){
    function yourfunction(event) {
      if (document.getElementById('low-res-div').style.display == "block") {
        document.getElementById('low-res-div').style.display = "none";
      } else {
        document.getElementById('low-res-div').style.display = "block";
      }
      
    }
    $('#align-reponsive').click(yourfunction);
});

// $(window).click(function() {
//     if (document.getElementById('low-res-div').style.display == "block") {
//         document.getElementById('low-res-div').style.display = "none";
//       } 
//     });
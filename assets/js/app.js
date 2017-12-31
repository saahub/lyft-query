$(document).ready(function() {
  $('#logo').hide();
  $("#splash").fadeIn(1000).fadeOut(5000, showMe);


  function showMe(){
    $('#logo').show();
  };
  });

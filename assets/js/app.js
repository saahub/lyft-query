$(document).ready(function() {
  $('#second').hide();
  $("#splash").fadeIn(1000).fadeOut(5000, showMe);

  function showMe(){
    $('#second').show();
  };
  });
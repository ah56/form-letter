





$(document).ready(function() {
  $("#form1").submit(function() {
  var nameInput= $("input#name").val();
  $(".name").text(nameInput);





  $("#story").show();
  event.preventDefault();
  });
  });

$(document).ready(function(){
  $("#formOne").submit(function(e) {

    var nameInput = $("#shout").val().toUpperCase();

    $(".shout-wrapper span").text(nameInput);

    $(".shout-wrapper span").show();
    e.preventDefault();
  });

});

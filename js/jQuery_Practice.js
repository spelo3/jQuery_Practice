function updateHeader() {
  var newHeader = document.getElementById("myTextBox").value;
  var oldHeader = document.getElementById("Header");
    oldHeader.innerHTML = newHeader;
}

$(document).ready(function() {

  $("h2").click(function() {
    alert("This is a header");
  });

  $(".1").dblclick(function() {
    alert("This is a list");
  });

  $(".2").dblclick(function() {
    confirm("Excellent! You did it again");
  });

  $(".3").hover(function(){
    $(".whale-showing").toggle();
  });

  $( ".fade" ).click(function() {
    $( ".fade-in" ).fadeToggle( "slow", "linear" );
  });

  $( ".fadeout" ).click(function() {
    $( ".fade-out" ).fadeOut( "slow", "linear" );
  });

  $( ".fadetoggle" ).click(function() {
    $( ".fade-toggle" ).fadeToggle( "slow", "linear" );
  });

  $( ".slidedown" ).click(function() {
    $( ".slide" ).slideDown();
  });

  $( ".slideup" ).click(function() {
    $( ".slide" ).slideUp();
  });

  $( ".slidetoggle" ).click(function() {
    $( ".slide-toggle" ).slideToggle();
  });

});


function updateHeader() {
  var newHeader = document.getElementById("myTextBox").value;
  var oldHeader = document.getElementById("Header");
    oldHeader.innerHTML = newHeader;
}


$(document).ready(function(){
    // Click "Header Practice" for an alert
    $("h2").click(function() {
        alert("This is a header.");
    });
    // Double click list item 1 for an alert
    $(".1").dblclick(function() {
        alert("This is a list.");
    });
    // Double click list item 2 for an alert
    $(".2").dblclick(function() {
        confirm("Excellent! You did it again.");
    });
    // Hover over list item 3 to show whale picture
    $(".3").hover(function(){
        $(".whale-showing").toggle();
    });
    // Fade In
    $( ".fadeIn" ).click(function() {
        $( ".fade-in" ).fadeIn( "slow", "linear" );
    });
    // Fade Out
    $( ".fadeOut" ).click(function() {
        $( ".fade-out" ).fadeOut( "slow", "linear" );
    });
    // Fade Toggle
    $( ".fadeToggle" ).click(function() {
        $( ".fade-toggle" ).fadeToggle( "slow", "linear" );
    });
    // Slide Down
    $( ".slideDown" ).click(function() {
        $( ".slide" ).slideDown();
    });
    // Slide Up
    $( ".slideUp" ).click(function() {
        $( ".slide" ).slideUp();
    });
    // Slide Toggle
    $( ".slideToggle" ).click(function() {
        $( ".slide-toggle" ).slideToggle();
    });
// End of document.ready function
});

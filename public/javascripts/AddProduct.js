//Activated when a User clicks on the "Add Item" button
// Shorthand for $( document ).ready()
// On page load
$(function() {
    console.log( "ready!" );
    $( "#AddItem" ).click(function() {
        ItemAdded()
    });
});

//Creates the "Back To Webpage" Button for the supplier to exit and lets them know their item has been added.   
function ItemAdded() 
{
    console.log("called")
  document.getElementById("Notification").style.display='inline';//reveals the text for Notification
  document.getElementById("Notification").innerHTML = "Item has been Added!"//Modifies the information for Notification
}
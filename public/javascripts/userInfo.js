  //Activated when a User clicks on the "Create Account" button

  $(function() {
    console.log( "ready!" );
    $( "#CreateAcct" ).click(function() {
        NewButton();
    });
});

  //Creates the "Back To Webpage" Button for the user to exit and lets them know their account has been created.   
  function NewButton() 
  {
    document.getElementById("Notification").style.display='inline';
    document.getElementById("Notification").innerHTML = "Account has been Created!";
  }
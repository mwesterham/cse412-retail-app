//Activated when a User clicks on the "Create Account" button
$(function () {
  console.log("ready!");
  
  $("#CreateAcct").click(function () {
    //Variable initizations
    var name = document.getElementById("Name").value;
    var phoneNumber = parseInt(document.getElementById("PhoneNumber").value);
    var address = document.getElementById("Address").value;
    var email = document.getElementById("Email").value;

    if (name == "") {
      alert("Please fill out your name");
    }
    else if (phoneNumber < 999999999) {
      alert("Please input a phone number");
    }
    else if (phoneNumber === NaN) {
      alert("Please input a phone number");
    }
    else if (address == "") {
      alert("Please fill out your address");
    }
    else if (email == "") {
      alert("Please fill out your email");
    }

    else {
      NewButton();
    }

  });
});

//Creates the "Back To Webpage" Button for the user to exit and lets them know their account has been created.   
function NewButton() {
  document.getElementById("Notification").style.display = 'inline';
  document.getElementById("Notification").innerHTML = "Account has been Created!";
}

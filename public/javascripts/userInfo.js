//Activated when a User clicks on the "Create Account" button
$(function () {
  console.log("ready!");
  
  $("#CreateAcct").click(function () {
    //Variable initizations
    var acctName = document.getElementById("Name").value;
    var acctPhoneNumber = parseInt(document.getElementById("PhoneNumber").value);
    var acctAddress = document.getElementById("Address").value;
    var acctEmail = document.getElementById("Email").value;

    if (acctName == "") {
      alert("Please fill out your name");
    }
    else if (acctPhoneNumber < 999999999) {
      alert("Please input a phone number");
    }
    else if (acctPhoneNumber === NaN) {
      alert("Please input a phone number");
    }
    else if (acctAddress == "") {
      alert("Please fill out your address");
    }
    else if (acctEmail == "") {
      alert("Please fill out your email");
    }

    else {
      axios.get('/add_user',{
         params:{
          id:Math.floor(Math.random() * 100000),
          email:acctEmail,
          name:acctName,
          address:acctAddress,
          phone:acctPhoneNumber
         }
      })
      .then(function (response) {
        NewButton();
    });
      
    }

  });
});

//Creates the "Back To Webpage" Button for the user to exit and lets them know their account has been created.   
function NewButton() {
  document.getElementById("Notification").style.display = 'inline';
  document.getElementById("Notification").innerHTML = "Account has been Created!";
}

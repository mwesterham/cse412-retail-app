//Activated when a User clicks on the "Create Account" button
$(function () {
  console.log("ready!");

  $("#CreateAcct").click(function () {
    //Variable initizations
    var acctName = document.getElementById("Name").value;
    var acctPhoneNumber = document.getElementById("PhoneNumber").value.trim();
    var acctAddress = document.getElementById("Address").value;
    var acctEmail = document.getElementById("Email").value;

    if (acctName == "") {
      alert("Please fill out your name");
    }
    else if (acctPhoneNumber <= 999999999) {
      alert("Please input a phone number");
    }
    else if (acctPhoneNumber >= 10000000000) {
      alert("Please input a phone number");
    }
    else if (isNaN(acctPhoneNumber))
    {
      alert("Please input a digit for phone number!");
    }
    else if (acctAddress == "") {
      alert("Please fill out your address");
    }
    else if (acctEmail == "") {
      alert("Please fill out your email");
    }

    else {

      axios.get('/add_user', {
        params: {
          id: Math.floor(Math.random() * 100000),
          email: acctEmail,
          name: acctName,
          address: acctAddress,
          phone_number: acctPhoneNumber
        }
      })
        .then(function (response) {
          alert("Your account has been created!");
        });

    }

  });
});

var ducks = "";
$(function () {
    console.log("ready!");
    
    //var NameOfUser = "";    
    $("#Login").click(function () {
        Login();
    });
   

});


function Login() {
    //admin = supplier send to add list 
    //otherwise send to buyer page
    var Username = $("#Username").val();
    //console.log(Username);

    if (Username == "admin") {
        window.location.href = "/AddProduct.html";
    }
    else if (Username == "") {
        alert("Please input a value");
    }
    else {
        var verify = Username;
        var counter = 0;
        //gets max number of names in table
        axios.get('/get_buyers', {
        })
            .then(function (response) {
                // handle success
                var data = response.data;
                for (const key in data) {
                    counter = counter + 1;
                }
            });
        //finds which buyer name it relates to
        axios.get('/get_buyers', {
        })
            .then(function (response) {
                // handle success
                var maxAmtOfAcct = 0;
                var data = response.data;
                for (const key in data) {
                    maxAmtOfAcct = maxAmtOfAcct + 1;

                    var usersFullName = data[key].fullname;
                    var usersIDNum = data[key].buyer_id;
                    console.log(usersFullName);
                    //alert("The save idNum: " + usersIDNum);
                    if (verify === usersFullName.trim()) {
                      //  keepsName(usersFullName);
                        localStorage.setItem('loggedIn',usersFullName.trim());
                        localStorage.setItem('UsersInfo',usersIDNum);
                        window.location.href = "/BuyerView.html";
                        break;
                    }
                    if (maxAmtOfAcct === counter) {
                        alert("Sorry, this is not an account we have on file");
                    }
                }
            });
    }

}

function keepsName(Username)
{
    var verify = Username.trim();
    var users_id = 0;
    axios.get('/get_buyers', {
    })
        .then(function (response) {
            var data = response.data;
            for (const key in data) {
                var this_listing = data[key];
                var buyerNames = data[key].fullname;
                //alert("Verify is " + verify + " buyerNames" + buyerNames);
                if (verify === buyerNames.trim()) {
                    users_id = this_listing.buyer_id;
                    ducks = buyerNames;
                    //alert("Inside:" + users_id);
                    break;
                }
               
            }
           // alert("Outside: " +users_id);
        });
}

/*
function getName()
{
    var provideName = ducks;
    alert(provideName);
    return provideName; 
}


function printNumber()
{
    console.log("Prints numbers: 2");
}
*/

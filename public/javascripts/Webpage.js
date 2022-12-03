

$(function () {
    console.log("ready!");
    $("#Login").click(function () {
        Login();
    });

});


function Login() {
    //admin = supplier send to add list 
    //otherwise send to buyer page
    var Username = $("#Username").val();
    console.log(Username);

    if (Username == "admin") {
        window.location.href = "/AddProduct.html";
    }
    else if (Username == "") {
        alert("Please input a value");
    }
    else {
        var verify = Username;
        var counter = 0;
        axios.get('/get_buyers', {
        })
            .then(function (response) {
                // handle success
                var data = response.data;
                for (const key in data) {
                    counter = counter + 1;
                }
            });



        axios.get('/get_buyers', {
        })
            .then(function (response) {
                // handle success
                var maxAmtOfAcct = 0;
                var data = response.data;
                for (const key in data) {
                    maxAmtOfAcct = maxAmtOfAcct + 1;
                    var this_listing = data[key].fullname;
                    console.log(this_listing)
                    if (verify === this_listing.trim()) {
                        //alert("Poggers");
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

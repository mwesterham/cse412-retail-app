$(function () {
    $("#Login").click(function () {
        Login();
    });
});

function Login() {
    //admin = supplier send to add list 
    //otherwise send to buyer page
    var Username = $("#Username").val();
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
                    if (verify === usersFullName.trim()) {
                        localStorage.setItem('loggedIn', usersFullName.trim());
                        localStorage.setItem('UsersInfo', usersIDNum);
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

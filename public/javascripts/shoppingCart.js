
// On page load
$(function () {
    console.log("ready!");

    /*
    //creates a variable to obtain all the buttons with the same class btn-class
    let btns = document.querySelectorAll(".btn-class");
    //Allows all buttons with the same class to have the same event be handled
    btns.forEach(btn => {
        //When they are clicked the following event will be handled
        btn.addEventListener('click', (event) => {
            AddProductButton();
        });

    });*/

    getShoppingCart();
    getBuyerInfo();
});

function getShoppingCart(id = 289) {
    axios.get('/get_buyer_cart', {
        params: {
            buyer_id: id,
        }
    })
        .then(function (response) {
            // handle success
            var data = response.data;
            for (const key in data) {
                var this_listing = data[key];
                console.log(this_listing);
                var roundPrice = Math.round(this_listing.product_pricing * 100) / 100;
                var row = $(`<tr><th>${this_listing["product_name"]}</th><td>${this_listing["brand"]}</td><td>${this_listing["delivery_time"]}</td><td>${roundPrice}</td><td>${this_listing["status"]}</td></tr>`);
                $("#tablebody").append(row);
            }
        });
}

/*
function purchase() {



}

}*/

function getBuyerInfo(id = 289) {
    console.log("BuyerINFO");
    axios.get('/get_buyer_info', {
        params: {
            buyer_id: id,
        }
    })
    .then(function (response) {
            var total = 32;
            var table = document.getElementById("tablebody");
            for (var i = 0, row; row = table.rows[i]; i++) {
                //iterate through rows
                //rows would be accessed using the "row" variable assigned in the for loop
                for (var j = 0, col; col = row.cells[j]; j++) {
                    //iterate through columns
                    //columns would be accessed using the "col" variable assigned in the for loop
                    if (j == 3) {
                        alert("First alert" + table.row[i].col[j]);
                        alert("Secondalert" + table.row[i].col[j].innerhtml);
                        //total += table.row[i].col[j];
                    }
                }
            }

/*
                // handle success
                var data = response.data;
                console.log(data);
                //from buyer view needs to be modified for contact information
                for (const key in data) {
                    var contactInfo = data[key];
                    console.log(contactInfo);
                    var row = $(`<tr><td>${contactInfo["fullname"]}</td><td>${contactInfo["phone_number"]}</td><td>${contactInfo["address"]}</td><td>${contactInfo["email"]}</td><td>${total}</td><td>purchase</td></tr>`);
                }*/
            })
}

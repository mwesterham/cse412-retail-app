var loggedId = localStorage.getItem('UsersInfo');
var loggedUser = localStorage.getItem('loggedIn');
// On page load
$(function () {
    getShoppingCart();
    getBuyerInfo();

    $("#clearCart").click(function () {
        clearCartButton(loggedId);
    });
});

function getShoppingCart(id = loggedId) {
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
                $("#buyerTableBody").append(row);
            }
        });
}


function clearCartButton(id = loggedId) {
    axios.get('/clear_cart', {
        params: {
            buyer_id: id,
        }
    })
        .then(function (response) {
            // handle success
            location.reload();
            alert("Cart has been cleared!");
        });
}

function purchase(id = loggedId) {
    axios.get('/get_buyer_cart', {
        params: {
            buyer_id: id,
        }
    })
        .then(function (response) {
            var data = response.data;
            for (const key in data) {
                var this_listing = data[key];
                var theIdForListing = data[key].listing_id;
                var status = data[key].status.trim();
                if (status === "In Cart") {
                    axios.get('/update_contains_status', {
                        params: {
                            buyer_id: id,
                            listing_id: theIdForListing,
                            status: 'Ordered',
                        }
                    })
                        .then(function (response) {
                            window.location.reload();
                        });
                }
            }
            alert('Your items have been purchased!');

        });


}

function getBuyerInfo(id = loggedId) {
    var total = 0;
    axios.get('/get_buyer_cart', {
        params: {
            buyer_id: id,
        }
    })
        .then(function (response) {
            var data = response.data;
            for (const key in data) {
                var this_listing = data[key];
                var roundPrice = Math.round(this_listing.product_pricing * 100) / 100;
                total += roundPrice;
            }
            total = total + (total * 0.28);
            total = (Math.round(total * 100) / 100);
        });
    axios.get('/get_buyer_info', {
        params: {
            buyer_id: id,
        }
    })
        .then(function (response) {
            var data = response.data;
            console.log(data);
            for (const key in data) {
                var contactInfo = data[key];
                var purchase = `<button type="button" onclick="purchase()" class="btn btn-success">Purchase</button>`;
                var row = $(`<tr><td>${contactInfo["fullname"]}</td><td>${contactInfo["phone_number"]}</td><td>${contactInfo["address"]}</td><td>${contactInfo["email"]}</td><td>${total}</td><td>${purchase}</td></tr>`);
                $("#UserInfo").append(row);
            }
        })
}
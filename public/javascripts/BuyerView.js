var loggedId = localStorage.getItem('UsersInfo');
$(function () {
    
    console.log("ready!");
   // var gettingName = getName();

    //console.log("getNames: " +gettingName);
    getListings();
});

function AddToCartButton(loggedId, product_name, listing_id) {
    axios.get('/add_to_cart', {
        params: {
            buyer_id: loggedId,
            listing_id: listing_id,
            quantity: 3,
            status: "In Cart"
        }
    })
        .then(function (response) {
            // handle success
            alert(product_name.trim() + " has been added to cart!");
        });
}

function getListings() {
    axios.get('/get_all_listings', {
    })
        .then(function (response) {
            // handle success
            var data = response.data.rows;
            console.log(data);
            console.log("Id is" + loggedId);
            for (const key in data) {
                var this_listing = data[key];
                console.log(this_listing);
                var roundPrice = Math.round(this_listing.product_pricing * 100) / 100;
                var AddToCart = `<button type="button" onclick="AddToCartButton(${loggedId},'${this_listing.product_name}', '${this_listing.listing_id}')" class="btn btn-success">Add To Cart</button>`;
                var row = $(`<tr><td>${this_listing["product_name"]}</td><td>${this_listing["brand"]}</td><td>${roundPrice}</td><td>${this_listing["product_supply"]}</td><td>${AddToCart}</td></tr>`);
                $("#buyerTableBody").append(row);
              //  $("#cartTableBody").append(row);    
            }
          //  localStorage.setItem("cartTableBody");
        });
}




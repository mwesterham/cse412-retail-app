
$(function () {
    
    console.log("ready!");
    //creates a variable to obtain all the buttons with the same class btn-class
    let btns = document.querySelectorAll(".btn-class");
    //Allows all buttons with the same class to have the same event be handled
    btns.forEach(btn => {
        //When they are clicked the following event will be handled
        btn.addEventListener('click', (event) => {
            AddToCartButton();
        });

    });
    getListings();
});

function AddToCartButton() {
    document.getElementById("Notification").style.display = 'inline';
    document.getElementById("Notification").innerHTML = "Item has been added to cart!";
}

function getListings() {
    axios.get('/get_all_listings', {
    })
        .then(function (response) {
            // handle success
            var data = response.data.rows;
            console.log(data);
            for (const key in data) {
                var this_listing = data[key];
                console.log(this_listing);
                var roundPrice = Math.round(this_listing.product_pricing * 100) / 100;
                var row = $(`<tr><td>${this_listing["product_name"]}</td><td>${this_listing["brand"]}</td><td>${roundPrice}</td><td>${this_listing["product_supply"]}</td></tr>`);
                $("#tablebody").append(row);
            }
        });
}



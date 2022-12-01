
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
                var row = $(`<tr><th>${this_listing ["product_name"]}</th><td>${this_listing ["brand"]}</td><td>${this_listing ["delivery_time"]}</td><td>${roundPrice}</td><td>${this_listing ["status"]}</td></tr>`);
                $("#tablebody").append(row);
            }
        });
}


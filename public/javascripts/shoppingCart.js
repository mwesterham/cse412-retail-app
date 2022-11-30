
// On page load
$(function () {
    console.log("ready!");

    //creates a variable to obtain all the buttons with the same class btn-class
    let btns = document.querySelectorAll(".btn-class");
    //Allows all buttons with the same class to have the same event be handled
    btns.forEach(btn => {
        //When they are clicked the following event will be handled
        btn.addEventListener('click', (event) => {
            AddProductButton();
        });

    });

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
            console.log("pokemon");
            var data = response.data;
            console.log(data);

            console.log(data[0]["brand"]);

            var row = $(`<tr><th>${data[0]["brand"]}</th><td>E</td><td>E</td><td>E</td></tr>`);
            $("#tablebody").append(row);
        });
}
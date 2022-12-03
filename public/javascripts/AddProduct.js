//Activated when a User clicks on the "Add Item" button
// Shorthand for $( document ).ready()

// On page load
$(function () {
  console.log("ready!");
  $("#AddItem").click(function () {
    //Checker for any blank content
    var pName = document.getElementById("ProductName").value;
    var pSupply = document.getElementById("ProductSupply").value;
    var pBrand = document.getElementById("ProductBrand").value;
    var pPrice = document.getElementById("ProductPrice").value;
    if (pName == "") {
      alert("Please fill out the Product Name");
    }
    else if (pSupply === NaN || pSupply <= 0) {
      alert("Please input a digit greater than 0 for Product Supply");
    }
    else if (pBrand == "") {
      alert("Please fill out the Product Brand");
    }
    else if (pPrice === NaN || pPrice <= 0) {
      alert("Please input a digit greater than 0 for Product Price");
    }
    else {
      axios.get('/add_listing', {
        params: {
            listing_id: Math.floor(Math.random() * 100000),
            price: pPrice,
            supply: pSupply,
            brand: pBrand,
            name:pName   
        }
    })
        .then(function (response) {
            // handle success
            alert(pName.trim() + " has been added!");
        });
    }
  });
});



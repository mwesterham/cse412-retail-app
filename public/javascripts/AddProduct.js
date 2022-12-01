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
      alert("Please fill out the product name");
    }
    else if (pSupply <= 0) {
      alert("Please input a digit greater than 0 for supply");
    }
    else if (pBrand == "") {
      alert("Please fill out the product brand");
    }
    else if (pPrice <= 0) {
      alert("Please input a digit greater than 0 for price");
    }


    else {
      ItemAdded();
    }
  });
});

//Creates the "Back To Webpage" Button for the supplier to exit and lets them know their item has been added.   
function ItemAdded() {
  document.getElementById("Notification").style.display = 'inline';//reveals the text for Notification
  document.getElementById("Notification").innerHTML = "Item has been Added!"//Modifies the information for Notification
}
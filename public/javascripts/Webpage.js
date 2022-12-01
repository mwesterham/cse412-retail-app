$(function() {
    console.log( "ready!" );
    $( "#Login" ).click(function() {
        Login();
    });
});

function Login(){
    //admin = supplier send to add list 
    //otherwise send to buyer page
    var Username = $("#Username").val();
    console.log(Username);
    
    if(Username == "admin")
    {
        window.location.href = "/AddProduct.html";
    }
    else if(Username == "")
    {
        alert("Please input a value");
    }
    else{
        window.location.href = "/BuyerView.html";
    }
    

}
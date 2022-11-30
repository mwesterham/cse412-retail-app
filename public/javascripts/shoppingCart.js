
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
});


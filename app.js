var submit = document.getElementById("submit");


submit.addEventListener("submit", function(e){
    e.preventDefault();
    if (document.getElementById('firstName').value == 0 || document.getElementById('firstName').value == ""){
        alert("please enter a valid first name");
    };
});
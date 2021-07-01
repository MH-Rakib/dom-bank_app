var loginArea = document.getElementById("loginArea");
var submitBtn = document.getElementById("submitBtn");
var transectionArea = document.getElementById("transectionArea");
var email = document.getElementById("email");
var password = document.getElementById("password");

var currentDeposite = document.getElementById("currentDeposite");
var currentWithdraw = document.getElementById("currentWithdraw");
var currentBalance = document.getElementById("currentBalance");

var addDeposite = document.getElementById("addDeposite");
var deposite = document.getElementById("deposite");

var getWithdraw = document.getElementById("getWithdraw");
var withdraw = document.getElementById("withdraw");





submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const getEmail = email.value;

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const result = validateEmail(getEmail);

    if (result) {
        loginArea.style.display = "none";
        transectionArea.style.display = "block"
    } else {
        alert("Invalid email");
        email.value = "";
        password.value = "";
    }

});


addDeposite.addEventListener("click", function (e) {
    e.preventDefault();
    const strAddDepo = deposite.value;
    const addDepo = parseFloat(strAddDepo);
    const currDepo = parseFloat(currentDeposite.innerText);
    const totalDepo = currDepo + addDepo;
    currentDeposite.innerText = totalDepo;

    const currBal = parseFloat(currentBalance.innerText);
    const totalbal = currBal + addDepo;
    currentBalance.innerText = totalbal;

    deposite.value = "";
})

getWithdraw.addEventListener("click", function (e) {
    e.preventDefault();
    const strGetwidt = withdraw.value;
    const getWidth = parseFloat(strGetwidt);
    const currWidth = parseFloat(currentWithdraw.innerText);
    currentWithdraw.innerText = currWidth + getWidth;
    currentBalance.innerText -= getWidth;

    withdraw.value = "";

})





function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
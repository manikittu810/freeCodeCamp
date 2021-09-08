"use strict";
let loginBtn = document.querySelector(".btnLogin");
let SignBtn = document.querySelector(".btnSign");
let split1 = document.getElementById("login");
let split2 = document.getElementById("sign");
loginBtn.addEventListener("click", function () {
    console.log("Login");
    split1.classList.remove("hidden");
    split2.classList?.add("hidden");
});
SignBtn.addEventListener("click", function () {
    console.log("Sign");
    split2.classList.remove("hidden");
    split1.classList?.add("hidden");
});
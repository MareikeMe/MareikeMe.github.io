"use strict";
var Hexenkessel;
(function (Hexenkessel) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Start (das ist der einzige Teil von diesem Code, der funktioniert lol");
        let basicinfo = document.querySelector("div#BasicInfo");
        let anweisung = document.querySelector("div#Anweisung");
        basicinfo.addEventListener("click", displayInfo);
        anweisung.addEventListener("click", displayAnweisung);
    }
    function displayInfo(_event) {
        let cart = document.querySelector("div#rezept");
        cart.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let article = document.querySelector("[value='" + article[1] + "']");
            let price = Number(article.getAttribute("price"));
        }
    }
    function displayAnweisung(_event) {
        let cart = document.querySelector("div#rezept");
        cart.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let article = document.querySelector("[value='" + article[1] + "']");
            let price = Number(article.getAttribute("price"));
            cart.innerHTML += article.name + "  € " + price;
        }
    }
})(Hexenkessel || (Hexenkessel = {}));
//# sourceMappingURL=Hexenkessel.js.map
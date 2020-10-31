"use strict";
var Hexenkessel;
(function (Hexenkessel) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Start");
        let basicinfo = document.querySelector("div#BasicInfo");
        let anweisung = document.querySelector("div#Anweisung");
        let slider = document.querySelector("input#sqmmow");
        basicinfo.addEventListener("change", handleChange);
        anweisung.addEventListener("change", handleChange);
        slider.addEventListener("input", displaySquarmeters);
    }
    function handleChange(_event) {
        let cart = document.querySelector("div#rezept");
        cart.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let article = document.querySelector("[value='" + article[1] + "']");
            let price = Number(article.getAttribute("price"));
            cart.innerHTML += article.name + "  € " + price;
        }
    }
    function displaySquarmeters(_event) {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(Hexenkessel || (Hexenkessel = {}));
//# sourceMappingURL=Hexenkessel.js.map
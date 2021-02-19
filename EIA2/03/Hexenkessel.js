/*namespace Hexenkessel {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("Start (das ist der einzige Teil von diesem Code, der funktioniert lol");
        let basicinfo: HTMLDivElement = <HTMLDivElement>document.querySelector("div#BasicInfo");
        let anweisung: HTMLDivElement = <HTMLDivElement>document.querySelector("div#Anweisung");

        basicinfo.addEventListener("click", displayInfo);
        anweisung.addEventListener("click", displayAnweisung);
    }

    function displayInfo(_event: Event): void {
       
        let cart: HTMLDivElement = <HTMLDivElement>document.querySelector("div#rezept");
        cart.innerHTML = "";

        let formData: FormData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let article: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  article[1] + "']");
            let price: number = Number(article.getAttribute("price"));

        }
    }

    function displayAnweisung(_event: Event): void {
       
        let cart: HTMLDivElement = <HTMLDivElement>document.querySelector("div#rezept");
        cart.innerHTML = "";

        let formData: FormData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let article: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  article[1] + "']");
            let price: number = Number(article.getAttribute("price"));

            cart.innerHTML += article.name + "  € " + price;
        }
    }

}*/ 
//# sourceMappingURL=Hexenkessel.js.map
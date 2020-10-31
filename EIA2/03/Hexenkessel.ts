namespace Hexenkessel {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("Start");
        let basicinfo: HTMLDivElement = <HTMLDivElement>document.querySelector("div#BasicInfo");
        let anweisung: HTMLDivElement = <HTMLDivElement>document.querySelector("div#Anweisung");
        let slidertemp: HTMLInputElement = <HTMLInputElement>document.querySelector("input#temperatur");
        let sliderruehr: HTMLInputElement = <HTMLInputElement>document.querySelector("input#ruehren");

        basicinfo.addEventListener("change", handleChange);
        anweisung.addEventListener("change", handleChange);
        slidertemp.addEventListener("input", displaySquarmeters);
        sliderruehr.addEventListener("input", displaySquarmeters);
    }

    function handleChange(_event: Event): void {
       

        let cart: HTMLDivElement = <HTMLDivElement>document.querySelector("div#rezept");
        cart.innerHTML = "";

        let formData: FormData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let article: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  article[1] + "']");
            let price: number = Number(article.getAttribute("price"));

            cart.innerHTML += article.name + "  € " + price;
        }
    }

    function displaySquarmeters(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);
    }
}
const URL = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("#btn");
let imgEle = document.querySelector("img");

let getData = async() => {
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data.message);
    // imgEle.src = data.message;
    imgEle.setAttribute("src",`${data.message}`);
}

btn.addEventListener("click", getData);
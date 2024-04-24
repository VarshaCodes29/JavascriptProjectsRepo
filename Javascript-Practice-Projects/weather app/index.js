const temperatureField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const emojiField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");


let target = "delhi";

const fetchData = async(target) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=9e9530f0ef9c4569bcb131557242304&q=${target}`;
    const response = await fetch(url);
    const data = await response.json();

    // console.log(data);

    updateDom(data.current.temp_c,data.location.name,data.location.localtime,data.current.condition.icon,data.current.condition.text)

}

function updateDom(temp,city,time,emoji,text){
    temperatureField.innerText = temp;
    cityField.innerText = city;

    const exactTime = time.split(" ")[1];
    const exactDate = time.split(" ")[0];
    const exactDay = new Date(exactDate).getDay();
    dateField.innerText = `${exactTime}-${getDayFunction(exactDay)} ${exactDate}`;

    emojiField.src = emoji;
    weatherField.innerText = text;

}
function getDayFunction(num){
    switch(num){
        case 0:
            return "sunday";
        case 1:
            return "monday";
        case 2:
            return "tuesday";
        case 3:
            return "wednesday";
        case 4:
            return "thursday";
        case 5:
            return "friday";
        case 6:
            return "saturday";
        default:
            return "not found";
    }
}
fetchData(target);

const search = (e) => {
    e.preventDefault();
    target = searchField.value;
    // console.log(target);
    fetchData(target);
    
}
form.addEventListener("submit",search);
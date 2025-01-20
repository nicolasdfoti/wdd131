// First Part

let year = document.querySelector("#current-year");
let lastModified = document.querySelector("#lastModified");
const today = new Date();

year.innerHTML = `${today.getFullYear()}`
lastModified.innerHTML = `${document.lastModified}`

// Second Part

// Variables
const temperature = 9;
const windspeed = 15;


// Function
function calculateWindchill(temperature, windspeed) {

    if (temperature <= 10 && windspeed > 4.8) {
        const windchill = parseFloat((13.12 + 0.6215 * temperature - 11.37 * Math.pow(windspeed, 0.16) + 0.3965 * temperature * Math.pow(windspeed, 0.16)).toFixed(2));
        return windchill;
    }

    else {
        return "N/A";
    }

}

// Calculating WindChill
let windchillElement = document.querySelector("#windchill");
windchillElement.innerHTML = `WindChill: ${calculateWindchill(temperature, windspeed)}`;
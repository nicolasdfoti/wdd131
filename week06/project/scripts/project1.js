// First Part

const year = document.querySelector("#current-year");
const lastModified = document.querySelector("#lastModified");
let today = new Date();

year.innerHTML = `&copy; Nicolás Foti, ${today.getFullYear()}`;
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

// Second Part

// Dashboard

const nameInput = document.querySelector("#dashboard-name");
const emailInput = document.querySelector("#dashboard-email");
const packageInput = document.querySelector("#dashboard-textarea");
const dateInput = document.querySelector("#dashboard-date");
const selectInput = document.querySelector("#dashboard-select");
const additionalInput = document.querySelector("#dashboard-additional");

const actionButton = document.querySelector("#dashboard-submit");

nameInput.value = localStorage.getItem("nameInput") || "";
emailInput.value = localStorage.getItem("emailInput") || "";

const dashboardFunctions = document.querySelector("#dashboard-functions");

function displayMoney() {

    let money = 0;
    let additionalMoney = 0;

    const packages = [
        { name: "basic", price: 100 },
        { name: "premium", price: 300 },
        { name: "deluxe", price: 700 }
    ];

    function getPackagePrice(packageName) {

        const selectedPackage = packages.find(pkg => pkg.name === packageName);
        return selectedPackage ? selectedPackage.price : 0;

    }

    money = getPackagePrice(selectInput.value);


    if (additionalInput.value === "none") {
        additionalMoney += 0;
    }
    
    else if (additionalInput.value === "express") {
        additionalMoney += 500;
    }
    
    else if (additionalInput.value === "refrigerated") {
        additionalMoney += 300;
    }
    
    else if (additionalInput.value === "insurance") {
        additionalMoney += 150;
    }
    
    else if (additionalInput.value === "shared") {
        additionalMoney = -(money * 0.15);
    }
    
    else if (additionalInput.value === "advisor") {
        additionalMoney += 50;
    }
    
    else if (additionalInput.value === "storage") {
        additionalMoney += 100;
    }

    return money + additionalMoney;
}



actionButton.addEventListener("click", (event) => {

    event.preventDefault();

    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || dateInput.value.trim() === "" || packageInput.value.trim() === "") {
        alert("Please complete all the required (red) fields");
        return;
    }

    money = displayMoney();

    const message2 = document.createElement("p");
    const message3 = document.createElement("p");
    const message4 = document.createElement("p");

    message2.innerHTML = `Uploaded Successfully!`;
    message3.innerHTML = `Thanks, ${nameInput.value}!`;
    message4.innerHTML = `Your package "${packageInput.value}" will arrive on ${dateInput.value} for $${money}`;

    dashboardFunctions.innerHTML = "";
    
    if (dashboardFunctions) {
        dashboardFunctions.appendChild(message2);
        dashboardFunctions.appendChild(message3);
        dashboardFunctions.appendChild(message4);
    }

    localStorage.setItem("nameInput", "John Doe");
    localStorage.setItem("emailInput", "John@hola");

});
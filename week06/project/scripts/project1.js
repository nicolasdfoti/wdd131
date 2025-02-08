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

const actionButton = document.querySelector("#dashboard-submit");

nameInput.value = localStorage.getItem("nameInput") || "";
emailInput.value = localStorage.getItem("emailInput") || "";

const dashboardFunctions = document.querySelector("#dashboard-functions");

actionButton.addEventListener("click", (event) => {

    event.preventDefault();

    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || packageInput.value.trim() === "") {
        alert("Please complete all the required (red) fields");
        return;
    }

    const message2 = document.createElement("p");
    const message3 = document.createElement("p");

    message2.innerHTML = `Thanks ${nameInput.value}!`;
    message3.innerHTML = `Your package "${packageInput.value}" will arrive on ${dateInput.value}`;

    dashboardFunctions.innerHTML = "";
    if (dashboardFunctions) {
        dashboardFunctions.appendChild(message2);
        dashboardFunctions.appendChild(message3);
    }

    localStorage.setItem("nameInput", nameInput.value);
    localStorage.setItem("emailInput", emailInput.value);

});
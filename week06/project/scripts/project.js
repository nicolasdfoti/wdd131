// First Part

const year = document.querySelector("#current-year");
const lastModified = document.querySelector("#lastModified");
let today = new Date();

year.innerHTML = `&copy; Nicolás Foti, ${today.getFullYear()}`;
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

// Second Part

// Contact Us

const contactName = document.querySelector("#contact-name");
const contactEmail = document.querySelector("#contact-email");
const contactPhone = document.querySelector("#contact-telephone");

const contactButton = document.querySelector("#contact-button");

contactName.value = localStorage.getItem("contactName");
contactEmail.value = localStorage.getItem("contactEmail");
contactPhone.value = localStorage.getItem("contactPhone");

const message = document.createElement("p");
const message1 = document.createElement("p");

const functions = document.querySelector("#contact-functions");
functions.appendChild(message);
functions.appendChild(message1);

contactButton.addEventListener("click", (event) => {

    event.preventDefault();

    if (contactName.value.trim() === "" || contactEmail.value.trim() === "" || contactPhone.value.trim() === "") {
        alert("Please complete all the required (red) fields");
        return;
    }

    message.innerHTML = `Thanks, ${contactName.value}!`;
    message1.innerHTML = `We'll reach you out soon through ${contactEmail.value}!`;

    localStorage.setItem("contactName", contactName.value);
    localStorage.setItem("contactEmail", contactEmail.value);
    localStorage.setItem("contactPhone", contactPhone.value);
    
});
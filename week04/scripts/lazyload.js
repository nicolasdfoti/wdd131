let year = document.querySelector("#year");
let lastModified = document.querySelector("#lastModified");
const date = new Date();

year.innerHTML = `&copy; Nicolás Foti ${date.getFullYear()}`;
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;
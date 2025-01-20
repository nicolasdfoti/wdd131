// First Part

let year = document.querySelector("#current-year");
let lastModified = document.querySelector("#lastModified");
const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}<span>`
lastModified.innerHTML = `<span class="highlight">${document.lastModified}<span>`

// Second Part
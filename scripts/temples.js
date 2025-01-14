// First Part:

const year = document.querySelector("#current-year");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

lastModified.innerHTML = `<span class="highlight">${document.lastModified}</span>`;
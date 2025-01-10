const year = document.querySelector("#current-year");
let LastModified = new Date(document.lastModified);

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

lastModified.innerHTML = `<span class="highlight">${document.lastModified}</span>`;
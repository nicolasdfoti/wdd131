let year = document.querySelector("#current-year");
let lastModified = document.querySelector("#lastModified");
let today = new Date();

year.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `${document.lastModified}`;


const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

// Searching for Select
let select = document.querySelector("select");

// Function to display options and append them to Select
function displayOption(item) {

    let option = document.createElement("option");

    option.value = item.id;
    option.textContent = item.name.toUpperCase();

    select.appendChild(option);

}

// Iterating through the array and displaying names
products.forEach(product => {
    displayOption(product);
})

// Changing borderBottom
select.addEventListener("change", function() {

    if (select.checkValidity()) {
        select.style.borderBottom = "5px solid green";
    }

    else {
        select.style.borderBottom = "5px solid red";
    }

})

// Getting localStorage
let reviewCount = localStorage.getItem("reviewCount");

if (!reviewCount) {
    reviewCount = 0;
}

else {
    reviewCount = parseInt(reviewCount);
}

let form = document.querySelector("form");

form.addEventListener("submit", function() {

    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);

    let revCount = document.querySelector("#reviewCount");
    revCount.textContent = `Total Uploads: ${reviewCount}`;
})
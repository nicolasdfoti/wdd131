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

// Function to display options and append them to select
function displayOption(item) {

    let option = document.createElement("option");

    option.value = item.id;
    option.textContent = item.name.toUpperCase();

    select.appendChild(option);

}

// Iterating through the array
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
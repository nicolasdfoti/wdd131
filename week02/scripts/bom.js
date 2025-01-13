// First Part
let input = document.querySelector("#favchap");
let button = document.querySelector("button");
let list = document.querySelector("#list");

// Second Part

button.addEventListener("click", function() {

    if (input.value.trim() === "") {
        input.focus();
    }

    else if (input.value.trim() != "") {
        const titleLi = document.createElement("li");
        const deleteButton = document.createElement("button");

        titleLi.textContent = input.value;
        deleteButton.textContent = "X";

        titleLi.append(deleteButton);

        list.append(titleLi);

        input.value = "";
        input.focus();

        deleteButton.addEventListener("click", function() {
            list.removeChild(titleLi);
            input.focus();
        })

    }
})
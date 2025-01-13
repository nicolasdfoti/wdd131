// First Part
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Second Part
button.addEventListener("click", function(){

    if (input.value.trim() === "") {
        input.focus();
    }

    else if (input.value.trim() != "") {
        const chapter = document.createElement("li");
        const deleteButton = document.createElement("button");

        chapter.textContent = input.value;
        deleteButton.textContent = "X";

        list.append(chapter);
        chapter.append(deleteButton);

        input.value = "";
        input.focus();
    
        deleteButton.addEventListener("click", function() {
            chapter.remove();
            input.focus();
        })

    }

})
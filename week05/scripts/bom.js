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

        displayList(input.value);
        chaptersArray.push(input.value);

        setChapterList();

        input.value = "";

        input.focus();

    }

})

// Third Part
let chaptersArray = getChapterList() || [];

console.log("Capítulos cargados desde localStorage:", chaptersArray); 

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    const chapter = document.createElement("li");
    const deleteButton = document.createElement("button");

    chapter.textContent = item;
    deleteButton.textContent = "X";

    list.append(chapter);
    chapter.append(deleteButton);

    input.value = item;
    input.focus();

    deleteButton.addEventListener("click", function() {
        deleteChapter(item);
        chapter.remove();
        input.focus();
    })
}

function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList")) || [];
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}
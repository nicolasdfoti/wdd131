button = document.querySelector("#button1")
h2 = document.querySelector("#h2header")

let count = 1

button.onclick = () => {
    button.textContent = "Try again!";
    count += 1
    h2.textContent = `${count} counts so far`;
}
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let easterEl = document.getElementById("easter-el")
let count = 0;

function increment() {
    count += 1
    countEl.textContent = count
    if (count == 3) {
        easterEl.textContent = "Whats on 25?"
    }
    if (count == 25) {
        count = "Yay!"
        countEl.textContent = "Yay!"
    }
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    easterEl.textContent = "";
    count = 0
}

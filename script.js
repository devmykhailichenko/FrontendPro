// Get tag's
const title = document.getElementById("main-title");
console.log(title);

const paragraphs = document.getElementsByClassName("text");
console.log(paragraphs);

const paragraphsByTag = document.getElementsByTagName("p");
console.log(paragraphsByTag);

const firstParagraph = document.querySelector(".text");
console.log(firstParagraph);

const allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);

const container = document.querySelector("#container");
console.log(container);

const firstSpan = container.querySelector(".inside");
console.log(firstSpan);

const allSpan = container.querySelectorAll("span");
console.log(allSpan);

console.log(container.firstElementChild);
console.log(container.lastElementChild);

// Change data inside
const boxElement = document.querySelector("#box");
boxElement.textContent = "Hello world!";

boxElement.innerHTML = "<span>Hello world!</span>";

const myButton = document.querySelector("#myBtn");
myButton.style.backgroundColor = "#804444";
myButton.style.borderColor = "#344e85";

container.classList.add("active");
container.classList.remove("active");
container.classList.toggle("active");

// Add / remove element
const newSpan = document.createElement("span");
newSpan.innerText = "Span 3";
newSpan.classList.add("inside");

container.append(newSpan);

const beforeSpan = document.createElement("span");
beforeSpan.innerText = "Span before";
beforeSpan.classList.add("inside");

container.prepend(beforeSpan);

const insideSpan = document.createElement("span");
beforeSpan.innerText = "Span inside";
beforeSpan.classList.add("inside");
console.log(container.children);
container.insertBefore(insideSpan, container.children[0]); // Подивитись видалення

boxElement.remove();

function changeActiveState() {
    container.classList.toggle("active");
}

function sendData() {
    console.log("Send my data");
}

myButton.addEventListener("click", changeActiveState);
myButton.addEventListener("click", sendData);

myButton.removeEventListener("click", sendData);

//------homework-----

const myTable = document.createElement("table");

for(let i = 0; i < 11; i++) {
    const tr = document.createElement("tr");
    tr.classList.add("p-tr");

    for(let j = 0; j < 11; j++) {
        const td = document.createElement("td");

        if(i === 0 && j === 0) {
            td.innerText = "";
        } else {
            td.innerText = `${j}`;
        }

        //Додати видалення 00

        tr.appendChild(td);
    }

    myTable.append(tr);
}

const body = document.querySelector("body");
body.append(myTable);

// Math.random()
const random = Math.floor(Math.random() * 9 + 1);
console.log(
    random
);

const imgTag = document.createElement("img");
imgTag.src = `${random}.jpg`;

//Full from MDN
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
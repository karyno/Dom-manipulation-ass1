
// Change the header text which says "Let's modify the DOM" to change the header text which says "New DOM Layout"
let header = document.getElementById ("main-heading")
header.innerText = "New DOM Layout"

// Add content to para 1 & 2. Use QuerySelector?
para1.textContent = "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure."
para2.textContent = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page."

// Add a click event function to the button which will create a new paragraph in the box layout when one clicks on it.

let button = document.querySelector("#btn")
button.addEventListener("click", () =>{
let p = document.createElement("p");
let t = document.createTextNode("This is a paragraph");
p.appendChild(t);
para4.appendChild(p);
})

// Change each boxes to the proper colors & note the new classlists.
let red = document.getElementById("red")
red.classList.remove("bg-white")
red.classList.add("bg-danger")

let blue = document.getElementById("blue")
blue.classList.remove("bg-white")
blue.classList.add("bg-primary")

let yellow = document.getElementById("yellow")
yellow.classList.remove("bg-white")
yellow.classList.add("bg-warning")

let green= document.getElementById("green")
green.classList.remove("bg-white")
green.classList.add("bg-success")

let black = document.getElementById("black")
black.classList.remove("bg-white")
black.classList.add("bg-dark")
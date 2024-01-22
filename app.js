let button = document.querySelector("button");
let ul = document.querySelector("ul");
button.addEventListener("click", () => {
  let input = document.querySelector("input");

  let li = document.createElement("li");
  let delBtn = document.createElement("button");

  delBtn.innerText = "Delete";
  delBtn.classList.add("delete");
  li.innerText = input.value;
  li.style.backgroundColor = colorGen();
  li.appendChild(delBtn);
  ul.appendChild(li);
  input.value = "";
});

function colorGen() {
  let red = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);

  return `rgb(${red},${blue},${green})`;
}

// let delBtns = document.querySelectorAll(".delete");
// for (let delBtn of delBtns) {
//   console.log(delBtn);
//   delBtn.addEventListener("click", () => {
//     let par = delBtn.parentElement;
//     console.log(par);
//     par.remove();
//   });
// }

ul.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    event.target.parentElement.remove(); //remove list element
    console.log("clicked");
  }
});

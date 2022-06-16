// import React from "react";

// const addBtn = document.getElementById("addbtn");
// const inputSearchBox = document.getElementById("inputsearchbox");
// const outputContainer = document.getElementById("outputcontainer");
// const quote = document.getElementById("quote");

//2.Adding the function for the addbutton.

//  addBtn.addEventListener("click", function () {
//   if (inputSearchBox.value.trim() == "") {
//     alert("dont forget to add task");
//   } else {
//     var outputBox = document.createElement("div");
//     var checkbox = document.createElement("input");
//     var output = document.createElement("span");
//     var textNode = document.createTextNode(inputSearchBox.value.trim());
//     output.appendChild(textNode);
//     var trashIcon = document.createElement("i");

//     outputContainer.appendChild(outputBox);
//     outputContainer.appendChild(quote);
//     outputBox.appendChild(checkbox);
//     outputBox.appendChild(output);
//     outputBox.appendChild(trashIcon);

//     quote.style.display = "none";
//     outputBox.setAttribute("Class", "outputBox");
//     checkbox.setAttribute("Id", "checkbox");
//     checkbox.setAttribute("type", "checkbox");
//     checkbox.addEventListener("click", function () {
//       output.style.textDecoration = "line-through";
//     });
//     output.setAttribute("Id", "span");
//     trashIcon.setAttribute("Id", "trashIcon");
//     trashIcon.setAttribute("Class", "fa-solid fa-trash-can");
//     trashIcon.addEventListener("click", function () {
//       outputBox.remove();
//     });
//   }
//   document.getElementById("inputSearchBox").value = "";
// });

// export default function;

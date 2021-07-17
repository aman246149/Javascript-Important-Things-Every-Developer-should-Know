console.log("hello");
const imgBox = document.querySelector(".imgBox");
const whiteBoxes = document.querySelectorAll(".whiteBox");

//Event listeners for draggable element imgBox
imgBox.addEventListener("dragstart", (e) => {
  e.target.className += "hold";

  setTimeout(() => {
    e.target.className = "hide";
  }, 0);
  console.log("drag start");
});

imgBox.addEventListener("dragend", (e) => {
  console.log("drag end");
  e.target.className = "imgBox";
});

for (whiteBox of whiteBoxes) {
  whiteBox.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  whiteBox.addEventListener("dragenter", () => {});

  whiteBox.addEventListener("dragleave", () => {});

  whiteBox.addEventListener("drop", (e) => {
    e.target.append(imgBox);
  });
}

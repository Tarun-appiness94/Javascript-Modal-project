// Selecting the required elements
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

// on click event for open model button
modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});

// on click event for model close button
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});

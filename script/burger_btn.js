const burgerBtn = document.getElementById("burgerBtn");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  // Optional: toggle sidebar
  document.querySelector("aside").classList.toggle("open");
});

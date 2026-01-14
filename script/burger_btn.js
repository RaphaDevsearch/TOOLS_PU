const burgerBtn = document.getElementById("burgerBtn");
const sidebar = document.getElementById("sidebar");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  sidebar.classList.toggle("open");
});

document.getElementById("year").textContent = new Date().getFullYear();
var topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", function () { topBtn.classList.toggle("show", window.scrollY > 500); }, { passive: true });

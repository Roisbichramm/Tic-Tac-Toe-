const hamMenu = document.querySelector("#hammenu");
const menuNav = document.querySelector(".menunav");

hamMenu.addEventListener("click", () => {
  menuNav.classList.toggle("active");
});

const burgger = document.querySelector("#hammenu");
document.addEventListener("click", function (e) {
  if (!burgger.contains(e.target) && !menuNav.contains(e.target)) {
    menuNav.classList.remove("active");
  }
});

// login dan register
feather.replace();

// Script untuk modal login/register
const loginModal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");
const btnLoginNav = document.querySelector(".btnloginnav");
const closeButtons = document.querySelectorAll(".close");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const showRegisterLink = document.getElementById("showRegister");
const showLoginLink = document.getElementById("showLogin");

// Tampilkan modal saat tombol login/register diklik
btnLoginNav.addEventListener("click", () => {
  loginModal.style.display = "flex";
});

// Tutup modal saat tombol close diklik
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    loginModal.style.display = "none";
    registerModal.style.display = "none";
  });
});

// Tutup modal saat klik di luar modal
window.addEventListener("click", (event) => {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
  if (event.target == registerModal) {
    registerModal.style.display = "none";
  }
});

// Tambahkan alert saat form login dikirim
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Mencegah pengiriman form
  alert("Login berhasil!");
  loginModal.style.display = "none"; // Menutup modal setelah login
});

// Tampilkan register modal dan sembunyikan login modal
showRegisterLink.addEventListener("click", () => {
  loginModal.style.display = "none";
  registerModal.style.display = "flex";
});

// Tampilkan login modal dan sembunyikan register modal
showLoginLink.addEventListener("click", () => {
  registerModal.style.display = "none";
  loginModal.style.display = "flex";
});

// Tambahkan alert saat form register dikirim
registerForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Mencegah pengiriman form
  alert("Register berhasil!");
  registerModal.style.display = "none"; // Menutup modal setelah register
});
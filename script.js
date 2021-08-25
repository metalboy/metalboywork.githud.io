const humburger_menu = document.querySelector(".humburger-menu");
const container = document.querySelector(".wrapper");

humburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
});
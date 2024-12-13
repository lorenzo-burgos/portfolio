document.addEventListener("DOMContentLoaded", () => {
    const darkModeButton = document.querySelector(".btn");
    const body = document.body;

    // Classe de modo escuro
    const darkModeClass = "dark-mode";

    // Configuração inicial
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add(darkModeClass);
        darkModeButton.textContent = "Light Mode";
    }

    // Alternar modo escuro
    darkModeButton.addEventListener("click", () => {
        if (body.classList.contains(darkModeClass)) {
            body.classList.remove(darkModeClass);
            darkModeButton.textContent = "Dark Mode";
            localStorage.setItem("darkMode", "disabled");
        } else {
            body.classList.add(darkModeClass);
            darkModeButton.textContent = "Light Mode";
            localStorage.setItem("darkMode", "enabled");
        }
    });
});

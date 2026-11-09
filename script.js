
// DARK / LIGHT THEME

const themeButton = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme) {
    document.documentElement.dataset.theme = savedTheme;
}

function updateThemeButton() {
    if (themeButton) {
        themeButton.textContent =
            document.documentElement.dataset.theme === "dark"
                ? "☀️ Light"
                : "🌙 Dark";
    }
}

updateThemeButton();

themeButton?.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme;

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = newTheme;

    localStorage.setItem("portfolio-theme", newTheme);

    updateThemeButton();
});


// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    "section, .card, footer"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});


// DYNAMIC FOOTER YEAR

const footerYear = document.querySelector("footer p:last-child");

if (footerYear) {
    footerYear.textContent =
        `© ${new Date().getFullYear()} Tharun Krishna S`;
}


// CONSOLE MESSAGE

console.log("Welcome to Tharun Krishna's Portfolio!");

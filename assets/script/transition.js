import menuFunctions from "./menu.js";
var isMenuLoaded = false;

document.addEventListener("DOMContentLoaded", function () {
    const mainContainer = document.getElementById("content");

    function loadPage(page) {
        fetch(page)
            .then(response => response.text())
            .then(content => {
                mainContainer.classList.add("content-transition");
                setTimeout(() => {
                    mainContainer.innerHTML = content;
                    mainContainer.classList.remove("content-transition");

                    if (page === "/modules/menu.html") {
                        menuFunctions.loadMenu();
                        isMenuLoaded = true;
                    }
                }, 50);
            });
    }

    loadPage("/modules/accueil.html");

    const links = document.querySelectorAll("li a");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            if (isMenuLoaded) {
                menuFunctions.unloadMenu();
                isMenuLoaded = false;
            }
            event.preventDefault();
            const page = link.getAttribute("data-page");
            loadPage(page);
        });
    });
});


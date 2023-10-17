function loadMenu() {
    fetch("/assets/data/menu.json")
        .then((response) => response.json())
        .then((jsonData) => {

      

            const menuContainer = document.createElement("div");
            menuContainer.classList.add("menu", "container");
            document.querySelector("main").appendChild(menuContainer);


            for (const key in jsonData) {
                const menuItem = jsonData[key];
                const menuItemDiv = document.createElement("div");
                menuItemDiv.className = "menu-item";

                // Add icon
                const icon = document.createElement("img");
                icon.src = menuItem.icon;
                menuItemDiv.appendChild(icon);

                // Add display and price
                const displayPriceElement = document.createElement("p");
                displayPriceElement.id = `menu-item-${key}`;
                displayPriceElement.style.fontSize = "1rem"
                displayPriceElement.innerHTML = `${menuItem.display} - ${menuItem.price}`;
                menuItemDiv.appendChild(displayPriceElement);

                // Add separator
                menuItemDiv.innerHTML += "<hr style='width: 75%;'>";

                // Add content
                for (const itemKey in menuItem.content) {
                    const item = menuItem.content[itemKey];
                    const contentElement = document.createElement("div");
                    contentElement.className = "menu-item-content"; // Classe pour le contenu

                    const textElement = document.createElement("p");
                    textElement.innerHTML = `${item.display}`;
                    if (item.price && item.price !== menuItem.price) {
                        textElement.innerHTML += ` - ${item.price}`;
                    }
                    contentElement.appendChild(textElement);

                    if (item.description) {
                        const descriptionElement = document.createElement("p");
                        descriptionElement.className = "menu-item-description";
                        descriptionElement.innerHTML = item.description;
                        contentElement.appendChild(descriptionElement);
                    }

                    menuItemDiv.appendChild(contentElement);
                }

                menuContainer.appendChild(menuItemDiv);
            }
        })
        .catch((error) => {
            console.error("Error loading menu.json:", error);
        });
};

function unloadMenu() {
    const menuContainer = document.querySelector(".menu");
    
        menuContainer.remove();
}

export default {
    loadMenu,
    unloadMenu
};
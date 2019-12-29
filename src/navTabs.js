function navTabs () {
    const content = document.querySelector("#content");

    const navBar = document.createElement("div");
    navBar.className = "navBar";
    content.appendChild(navBar);

    const home = document.createElement("button");
    home.id = "home";
    home.className = "nav-btn";
    home.textContent = "Home";
    navBar.appendChild(home);

    const menu = document.createElement("button");
    menu.id = "menu";
    menu.className = "nav-btn";
    menu.textContent = "Menu";
    navBar.appendChild(menu);

    const contact = document.createElement("button");
    contact.id = "contact";
    contact.className = "nav-btn";
    contact.textContent = "Contact";
    navBar.appendChild(contact);
}

export { navTabs }
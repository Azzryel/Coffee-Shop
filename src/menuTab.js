function loadMenu () {
    const content = document.querySelector("#content");

    const tabContent = document.createElement("div");
    tabContent.className = "tab-content";
    content.appendChild(tabContent);

    const h1 = document.createElement("h1");
    h1.textContent = "Coffee Shop";
    tabContent.appendChild(h1);
} 

export { loadMenu }
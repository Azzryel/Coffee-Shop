function loadMenu () {
    const content = document.querySelector("#content");

    const tabContent = document.createElement("div");
    tabContent.id = "tab-content";
    content.appendChild(tabContent);

    const h1 = document.createElement("h1");
    h1.textContent = "Coffee Shop";
    tabContent.appendChild(h1);

    const h2 = document.createElement("h2");
    h2.textContent = "Menu";
    tabContent.appendChild(h2);

    const menuBox = document.createElement("div");
    menuBox.id = "menu-box";
    tabContent.appendChild(menuBox);

    const menu1 = document.createElement("div");
    menu1.className = "menu";
    menuBox.appendChild(menu1);

    const img1 = document.createElement("img");
    img1.className = "pics";
    img1.setAttribute("src", "https://cdn.pixabay.com/photo/2019/09/16/18/36/recup-4481723_960_720.jpg");
    menu1.appendChild(img1);

    const para1 = document.createElement("p");
    para1.textContent = "Coffee to go";
    menu1.appendChild(para1); 

    const menu2 = document.createElement("div");
    menu2.className = "menu";
    menuBox.appendChild(menu2);

    const img2 = document.createElement("img");
    img2.className = "pics";
    img2.setAttribute("src", "https://isorepublic.com/wp-content/uploads/2018/11/cup-coffee-1100x733.jpg");
    menu2.appendChild(img2);

    const para2 = document.createElement("p");
    para2.textContent = "Coffee";
    menu2.appendChild(para2);

    const menu3 = document.createElement("div");
    menu3.className = "menu";
    menuBox.appendChild(menu3);

    const img3 = document.createElement("img");
    img3.className = "pics";
    img3.setAttribute("src", "https://www.visitmycountry.net/bosnia_herzegovina/en/images/stories/hrana/kafa/photos/bosanska_kafa_07.jpg");
    menu3.appendChild(img3);

    const para3 = document.createElement("p");
    para3.textContent = "Delicious Coffee";
    menu3.appendChild(para3);

} 

export { loadMenu }
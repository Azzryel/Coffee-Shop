function loadContact () {
    const content = document.querySelector("#content");

    const tabContent = document.createElement("div");
    tabContent.id = "tab-content";
    content.appendChild(tabContent);

    const h1 = document.createElement("h1");
    h1.textContent = "Coffee Shop";
    tabContent.appendChild(h1);

    const h2 = document.createElement("h2");
    h2.textContent = "Contact";
    tabContent.appendChild(h2);

    const contactInfo = document.createElement("div");
    contactInfo.id = "contact-info";
    tabContent.appendChild(contactInfo);

    const address = document.createElement("p");
    address.textContent = "Address: Coffee Land";
    contactInfo.appendChild(address);

    const mail = document.createElement("p");
    mail.textContent = "E-mail: coffee@coffe.coffee";
    contactInfo.appendChild(mail);
    
    const phone = document.createElement("p");
    phone.textContent = "Phone: 000-000/000";
    contactInfo.appendChild(phone);
    
} 

export { loadContact }
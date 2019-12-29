import { loadPage } from "./pageLoad"
import { navTabs } from "./navTabs"
import { loadMenu } from "./menuTab"
import { loadContact } from "./contactTab"

loadPage();
navTabs();

const body = document.querySelector("body");
body.style.background = "url('../img/background.jpg')";
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center";
body.style.height = "500px";

const navBtn = document.querySelectorAll(".nav-btn");
navBtn.forEach ( (button) => {
    button.addEventListener("click", (e) => {
        const tab = e.target.getAttribute("data-tab");
        removeElement();

        if (tab == "home") {
            loadPage();
        }
        else if (tab == "menu") {
            loadMenu();
        }
        else if (tab == "contact") {
            loadContact();
        }
    });

    button.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = `rgb(255, 255, 255, 0.3)`;
        e.target.style.color = "whitesmoke";
    
    });

    button.addEventListener("mouseleave", (e) => {
        e.target.style.backgroundColor = `rgb(0, 0, 0, 0.3)`;
        e.target.style.color = "grey";
    
    });
});


function removeElement() {
    const element = document.getElementById("tab-content");
    element.parentNode.removeChild(element);
}
import { loadPage } from "./pageLoad"

const body = document.querySelector("body");
body.style.background = "url('../img/background.jpg')";
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center";
body.style.height = "500px";

loadPage();
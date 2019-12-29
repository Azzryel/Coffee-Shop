
function loadPage () {
    const content = document.querySelector("#content");

    const tabContent = document.createElement("div");
    tabContent.className = "tab-content";
    content.appendChild(tabContent);

    const h1 = document.createElement("h1");
    h1.textContent = "Coffee Shop";
    tabContent.appendChild(h1);

    const pre = document.createElement("pre");
    pre.textContent =   `Morning without her? 
Like a cold, black coffee.
But when I see her, I soar,
carried by love and light.
                        
Give my lips a taste, a passionate kiss, silence.
This is the moment I live for:
Hot, delicious coffee.`;
    tabContent.appendChild(pre);
    
} 

export { loadPage }
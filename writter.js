function writeText(element) {
    const text = element.getAttribute("data-text");
    element.classList.add("written");
    for (let i = 0; i < text.length; i++) {
        setTimeout(function() {
            element.innerHTML += text[i];
        }, i * 40);
    }
}
const titleElements = document.querySelectorAll(".write-text");
titleElements.forEach(function(titleElement) {
    if (!titleElement.classList.contains("written")) {
        writeText(titleElement);

    }
});
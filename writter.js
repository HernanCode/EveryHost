function writeTitle() {
    element = document.getElementById("prueba201");
    text = element.getAttribute("data-text");
    for (let i = 0; i < text.length; i++) {
        setTimeout(function() {
            element.innerHTML += text[i];
        }, i * 40);
    }
    setTimeout(writeSubtext, text.length * 40);
}

function writeSubtext() {
    element1 = document.getElementById("prueba200");
    text1 = element1.getAttribute("data-text");
    for (let a = 0; a < text1.length; a++) {
        setTimeout(function() {
            element1.innerHTML += text1[a];
        }, a * 40);
    }

}


writeTitle();
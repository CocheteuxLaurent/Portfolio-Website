function MenuFonction() {
    var x = document.getElementById("navrespon");
    if (x.className === "navBar") {
        x.className += " responsive";
    } else {
        x.className = "navBar";
    }
}
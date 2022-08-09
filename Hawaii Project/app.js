let header = document.querySelector("header");
let headerAnchor = document.querySelectorAll("header nav ul li a");


window.addEventListener("scroll", () => {
    if (window.pageYOffset != 0) {
        header.style = "background-color: rgba(0, 0, 0, 0.75); color: white;";
        headerAnchor.forEach( a => {
            a.style.color = "white";
        });
    } else {
        header.style = "";
        headerAnchor.forEach( a => {
            a.style.color = "#09777D";
        });
        
    }
})
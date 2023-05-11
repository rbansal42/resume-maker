function printout() {

    var newWindow = window.open();
    newWindow.document.write('<link rel="stylesheet" href="./src/style.css">');
    newWindow.document.write(document.getElementById("main").innerHTML);
    setTimeout(() => {
        newWindow.print();
    }, 500);
}

document.getElementById("download-button").addEventListener("click", printout);

document.addEventListener("DOMContentLoaded", function(){

    function showOverlay(){
        const overlay = document.querySelector(".overlay");
        const resume = document.querySelector("article#page-div");
        
        // menu.style.height = "100%";
        // menu.style.width = "100%";
        overlay.style.visibility = "visible";
        overlay.style.left = "0";

        resume.style.position = "absolute";
        resume.style.right = "64px";
    }
    function closeOverlay(){
        const menu = document.querySelector(".overlay")
        const resume = document.querySelector("article#page-div");

        overlay.style.left = "-1000";
        overlay.style.visibility = "hidden"

        resume.style.position = "inherit";
        resume.style.right = "null";
    }

    document.getElementById("side-button").addEventListener("click", showOverlay);
    document.getElementById("close-menu").addEventListener("click", closeOverlay);
    // addClickToMenuItems();
})

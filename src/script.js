function printout() {

    var newWindow = window.open();
    newWindow.document.write('<link rel="stylesheet" href="./src/style.css">');
    newWindow.document.write(document.getElementById("main").innerHTML);
    setTimeout(() => {
        newWindow.print();
        
    }, 500);
}

document.getElementById("print").addEventListener("click", printout);
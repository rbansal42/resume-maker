function updateLabel() {
    
    // Basics    
    document.getElementById("output-name").innerHTML = document.getElementById("input-name").value;
    document.getElementById("output-email").textContent = document.getElementById("input-email").value;
    document.getElementById("output-mobile").textContent = document.getElementById("input-mobile").value;
    document.getElementById("output-location").textContent = document.getElementById("input-location").value;
    
    // Socials
    document.getElementById("output-github").textContent = document.getElementById("input-github").value;
    document.getElementById("output-linkedin").textContent = document.getElementById("input-linkedin").value;
    
    // More Basics
    document.getElementById("output-title").textContent = document.getElementById("input-title").value;
    document.getElementById("output-summary").textContent = document.getElementById("input-summary").value;


}
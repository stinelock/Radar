/* ---------- Burger menu ---------- */
var navBtn = document.getElementById('nav-button'); // Burger button
var navBar = document.getElementById('nav-bar');    // Navigation links

/* Toggle active class when clicking burger menu button */
navBtn.onclick = () => {
    navBar.classList.toggle('nav-active'); // Toggle active nagivation
    navBtn.classList.toggle('btn-active'); // Toggle active button
}


/* ----------------- Vælg vare--------------------------- */


/*----------------- GÅ TIL BETALING--------------------------- */
document.getElementById("myForm").addEventListener("submit", function (event) {
    if (!event.target.checkValidity()) {
        // Hvis formularen ikke er gyldig, vis standard browser-validering
        return;
    }
    event.preventDefault(); // Forhindrer standard formularindsendelse
    window.location.replace("betaling.html"); // Skifter til batreling.html
});

/* ----------------- ORDRE BEKRÆFTEGELSE--------------------------- */
document.getElementById("myPayment").addEventListener("submit", function (event) {
    if (!event.target.checkValidity()) {
        // Hvis formularen ikke er gyldig, vis standard browser-validering
        return;
    }
    event.preventDefault();
    alert("Din ordre er bekræftet! Du vil snart modtage en mail, med dit RadarPass. Tak for at du vil være en del af Radars Resonans! Vi glæder os til at se dig!");
    window.location.replace= "index.html";
});


/*----------------- DEL KOMMENTAR--------------------------- */
function myFunction() {
    alert("Succes! Dit billede er delt!");
    window.location.replace("faellesskab.html");
}
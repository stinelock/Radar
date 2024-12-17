/* ---------- Burger menu ---------- */
var navBtn = document.getElementById('nav-button'); // Burger button
var navBar = document.getElementById('nav-bar');    // Navigation links

if (navBtn && navBar) {
    /* Toggle active når burger menu button klikkes */
    navBtn.onclick = () => {
        navBar.classList.toggle('nav-active'); // Toggle active navigation
        navBtn.classList.toggle('btn-active'); // Toggle active button
    }
}

/*----------------- GÅ TIL BETALING--------------------------- */
var formBetaling = document.getElementById("myForm"); // variabel for form

if (formBetaling) { //Eventlistener virker kun hvis formBetaling (myForm) findes i html
    formBetaling.addEventListener("submit", function (event) {
        if (!event.target.checkValidity()) {
            return; // Standard browser-validering
        }
        event.preventDefault(); // Forhindrer standard indsendelse
        window.location.replace("betaling.html"); // Skifter til betaling.html
    });
}

/* ----------------- ORDRE BEKRÆFTELSE--------------------------- */
var formPayment = document.getElementById("myPayment");

if (formPayment) {
    formPayment.addEventListener("submit", function (event) {
        if (!event.target.checkValidity()) {
            return;
        }
        event.preventDefault();
        alert("Din ordre er bekræftet! Du vil snart modtage en mail med dit RadarPass. Tak for at du vil være en del af Radars Resonans! Vi glæder os til at se dig!");
        window.location.href = "index.html";
    });
}

/*----------------- DEL KOMMENTAR--------------------------- */
var formComment = document.getElementById("myComment");

if (formComment) {
    formComment.addEventListener("submit", function (event) {
        if (!event.target.checkValidity()) {
            return;
        }
        event.preventDefault();
        alert("Din kommentar er sendt! Tak for at du vil dele din mening med os!");
    });
}

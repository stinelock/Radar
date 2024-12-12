/* ---------- Burger menu ---------- */
var navBtn = document.getElementById('nav-button'); // Burger button
var navBar = document.getElementById('nav-bar');    // Navigation links

/* Toggle active class when clicking burger menu button */
navBtn.onclick = () => {
    navBar.classList.toggle('nav-active'); // Toggle active nagivation
    navBtn.classList.toggle('btn-active'); // Toggle active button
}


/* ----------------- Vælg vare--------------------------- */
document.getElementById('plus').addEventListener('click', function() {
    var items = document.getElementById('items'); /*definerer items som variabel*/
    if (items.value < 4) {                          /*kan maks være 4 varer */
        items.value = parseInt(items.value) + 1;    /*når click bliver antal +1 */
    }
});

document.getElementById('minus').addEventListener('click', function() {
    var items = document.getElementById('items');
    if (items.value > 1) {
        items.value = parseInt(items.value) - 1; /*når click bliver antal -1 */
    }
});


/**----------------- Betalingsformular--------------------------- */

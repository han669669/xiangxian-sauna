//
// Place any custom JS here
//

// Leaflet Openstreetmap
var mapid = L.map('mapid').setView([2.256068, 102.238092], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapid);

var marker = L.marker([2.256068, 102.238092]).addTo(mapid);
marker.bindPopup("<b>祥贤传统药材汗蒸<br>XIANGXIAN TRADITIONAL SWEAT STEAMING HEALTH ENTERPRISE</b><br>Jalan PM 1, Taman Perindustrian Merdeka, Batu Berendam, 75350 Melaka, Malaysia.").openPopup();

// Scroll to Top
// Get the button
let mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 300px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
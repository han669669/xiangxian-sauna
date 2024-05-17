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

// Function to check the current store status based on the day of the week, opening and closing times, and update the status element on the webpage.
function checkStoreStatus() {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentMinute = hour * 60 + minute;

    // Define store hours in minutes from midnight
    const weekdayOpeningTime = 13 * 60; // 1:00 PM
    const weekdayClosingTime = 22 * 60; // 10:00 PM
    const weekendOpeningTime = 11 * 60; // 11:00 AM
    const weekendClosingTime = 22 * 60; // 10:00 PM

    let isOpen = false;

    // 0 is Sunday, 6 is Saturday
    if (dayOfWeek >= 1 && dayOfWeek <= 5) { // Weekdays
        isOpen = currentMinute >= weekdayOpeningTime && currentMinute < weekdayClosingTime;
    } else if (dayOfWeek === 0 || dayOfWeek === 6) { // Weekend
        isOpen = currentMinute >= weekendOpeningTime && currentMinute < weekendClosingTime;
    }

    const statusElement = document.getElementById('store-status');
    const statusElementCn = document.getElementById('store-status-cn');
    statusElement.textContent = isOpen ? 'Open' : 'Closed';
    statusElementCn.textContent = isOpen ? '营业中' : '已关闭';
}

// Run the function on page load
document.addEventListener('DOMContentLoaded', checkStoreStatus);
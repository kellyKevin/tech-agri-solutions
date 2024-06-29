// public/scripts/script.js

// JavaScript for handling form submission and popup
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle form submission logic (e.g., sending data to server)
    // Show popup
    showPopup();
});

// Function to display popup
function showPopup() {
    document.getElementById('popupModal').style.display = 'block';
}

// Function to close popup
function closePopup() {
    document.getElementById('popupModal').style.display = 'none';
}


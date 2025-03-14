document.addEventListener("DOMContentLoaded", function () {
    const databaseURL = "YOUR_FIREBASE_DATABASE_URL"; // Replace with your Firebase URL

    fetch(databaseURL + "/markers.json")
        .then(response => response.json())
        .then(data => {
            if (data) {
                console.log("Markers loaded:", data);
                // You can add more logic to use the markers in AR.js
            } else {
                console.error("No markers found.");
            }
        })
        .catch(error => console.error("Error fetching markers:", error));
});

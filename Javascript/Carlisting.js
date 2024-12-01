function filterCars() {
    // Get the search term from the search bar
    const searchTerm = document.getElementById("searchBar").value.toLowerCase();

    // Select all the car items
    const carItems = document.querySelectorAll(".car-items");

    // Loop through all car items and check if they match the search term
    carItems.forEach((item) => {
        const carTitle = item.querySelector("h2").innerText.toLowerCase();
        const carDescription = item.querySelector("p").innerText.toLowerCase();

        // If the car title or description contains the search term, show it; otherwise, hide it
        if (carTitle.includes(searchTerm) || carDescription.includes(searchTerm)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// Attach the event listener to the search bar for "Enter" keypress
document.getElementById("searchBar").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        filterCars();
    }
});

// Attach the event listener to the search button
document.getElementById("searchButton").addEventListener("click", filterCars);

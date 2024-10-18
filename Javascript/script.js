const carListings = [
    {
        id: 1,
        name: "Toyota Camry",
        price: 200000,
        image: "toyota-camry.jpg"
    },
    {
        id: 2,
        name: "Honda Civic",
        price: 150000,
        image: "honda-civic.jpg"
    },
    // Add more car listings here
];

const carListingGrid = document.querySelector(".car-listing-grid");

carListings.forEach((car) => {
    const carListingHTML = `
        <div class="car-listing">
            <h2>${car.name}</h2>
            <p>Price: ₹${car.price}</p>
            <img src="${car.image}" alt="${car.name}">
        </div>
    `;
    carListingGrid.innerHTML += carListingHTML;
});
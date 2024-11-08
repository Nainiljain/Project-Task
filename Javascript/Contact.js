// Declare global variables for map, directions service, and renderer
let map;
let directionsService;
let directionsRenderer;

// Initialize the map
function initMap() {
  // Create a map centered on North America
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.8283, lng: -98.5795 },
    zoom: 4,
  });

  // Initialize the Directions Service and Renderer
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();

  // Bind the DirectionsRenderer to the map
  directionsRenderer.setMap(map);
}

// Function to calculate and display the route
function calculateRoute() {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  if (from && to) {
    const request = {
      origin: from,
      destination: to,
      travelMode: google.maps.TravelMode.DRIVING, // Change to BICYCLING, TRANSIT, WALKING if needed
    };

    directionsService.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(result); // Display the route on the map
      } else {
        alert("Directions request failed due to " + status); // Error handling
      }
    });
  } else {
    alert("Please enter both the 'From' and 'To' locations.");
  }
}


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
var btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    var name = document.getElementById('name').value;
    var Lastname = document.getElementById('Lastname').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var body = 'name: ' +name +'<br />Lastname: ' + Lastname +'<br />email: ' + email +'<br />message: ' + message;

              Email.send({
                SecureToken : "26c65abc-8e29-412f-bf09-8ddd8fc39e74",
                To : 'nainil0512@gmail.com',
                From : "nainiljain1@gmail.com",
                Subject : "contact message",
                Body : body
            }).then(
              message => alert(message)
            );
})
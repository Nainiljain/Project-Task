document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById("name").value;
    const Lastname = Document.getElementById("Lastname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Prepare the data to send
    const formData = { name, Lastname, email, message };

    // Send the form data to the server
    fetch("your-server-endpoint-url", { // Replace with your actual endpoint
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("responseMessage").innerText = data.message;
    })
    .catch(error => {
        document.getElementById("responseMessage").innerText = "Error sending message.";
        console.error("Error:", error);
    });
});

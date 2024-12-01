<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $lastname = htmlspecialchars($_POST["surname"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // Email details
    $to = "nainil0512@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Email body
    $body = "You have received a new message from your website's contact form.\n\n";
    $body .= "Name: $name $lastname\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["success" => true, "message" => "Your message has been sent successfully."]);
    } else {
        echo json_encode(["success" => false, "message" => "An error occurred while sending your message."]);
    }
} else {
    http_response_code(405); // Method not allowed
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
}
?>

<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $Lastname = htmlspecialchars($_POST['Lastname']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // Email details
    $to = 'nainil0512@gmail.com'
    $subject = 'New Contact Form Submission';
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    // Sending email
    if (mail($to, $subject, $body)) {
        echo 'Thank you for your message!';
    } else {
        echo 'There was an error sending your message.';
    }
} else {
    // Return 405 Method Not Allowed if not POST request
    header('HTTP/1.1 405 Method Not Allowed');
    echo 'HTTP/1.1 405 Method Not Allowed';
}
?>

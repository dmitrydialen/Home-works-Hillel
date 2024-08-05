<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $message = htmlspecialchars($_POST['message']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);

    $to = "coreproseo@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nMessage: $message\nPhone: $phone\nEmail: $email";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Email sent successfully";
    } else {
        echo "Email sending failed";
    }
} else {
    echo "Invalid request method";
}
?>
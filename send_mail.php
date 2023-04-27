<?php
  // Retrieve form data
  $object = $_POST['object'];
  $email = $_POST['email'];
  $messageBody = $_POST['message-body'];

  // Build email message
  $to = 'youremail@example.com'; // Replace with your email address
  $subject = $object;
  $message = "From: $email\n\n$messageBody";

  // Send email
  mail($to, $subject, $message);

  // Redirect back to the form page
  header('Location: index.html');
?>

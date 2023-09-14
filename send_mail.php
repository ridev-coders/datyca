<?php
  // Retrieve form data
  $object = $_POST['object'];
  $email = $_POST['email'];
  $messageBody = $_POST['message-body'];

  // Build email message
  $to = 'r.ferrara@ridev.fr';
  $subject = $object;
  $message = "From: $email\n\n$messageBody";

  // Send email
  mail($to, $subject, $message);

  // Redirect back to the form page
  if(mail($to, $subject, $message)) {
    echo "Email sent successfully!";
  } else {
    echo "Unable to send email. Please try again later.";
  }
?>

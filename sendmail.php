<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    // $from = 'From: yoursite.com';
    $to = 'sydonce57@gmail.com';
    $subject = 'Contact Message From';
    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
    if (mail ($to, $subject, $body)) {
        echo 'Your message has been sent!';
        
    } else {
        echo 'Something went wrong, go back and try again!';
    }
?>
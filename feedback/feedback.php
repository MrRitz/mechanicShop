<?php

if(isset($_POST['submit'])) {
    $feedback = $_POST['feedback'];
    $name = $_POST['name'];
    $rating = $_POST['rating'];
    $mailTo = //"Your email here";
    $subject = "Rating";
    $headers = "From: " . $name;
    $txt = "\n" . $name . " has given a rating of " . $rating . " wrenches!\n" . "Customer feedback: " . $feedback;
    mail($mailTo, $subject, $txt, $headers);
    header("Location: feedback.html?mailsend");
    
}
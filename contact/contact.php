<?php

    if(isset($_POST['submit'])) {
        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $emailFrom = $_POST['email'];
        $message = $_POST['message'];

        $mailTo = //"Your email here";
        $subject = "Requested work";
        $headers = "From: " . $emailFrom;
        $txt = "You have recieved an email from " . $name . ".\n\n" . $message . "\nMy phone number is " . $phone;
        mail($mailTo, $subject, $txt, $headers);
        header("Location: email.html?mailsend");
    }
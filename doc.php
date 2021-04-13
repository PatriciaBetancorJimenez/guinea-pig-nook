<?php

$name = $_POST['name'];
$email = $_POST['email'];
$gender = $_POST['gender'];
$territory = $_POST['territory'];
$text = $_POST['text'];


$to = "patriciabetancorjimenez@gmail.com";
$subject = "New e-mail";
$body = "You have received the next e-mail from your website theguineapignook. \n\n $name \n\n $email \n\n $gender \n\n $territory \n\n $text";

mail($to, $subject, $body);

echo "Message sent! click <a href='index.html'> here </a> to go back";

?>
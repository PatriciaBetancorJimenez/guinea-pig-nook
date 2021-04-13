<?php



 
 // $deliveryfee = "<script> document.writeln(totalcoll); </script>"; 
  

    

$deliverycollection = $_POST['deliverycollection'];

$deliveryfee = $_POST['deliveryfee'];



$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$street = $_POST['street'];
$city = $_POST['city'];
$postcode = $_POST['postcode'];
$paymenttype = $_POST['paymenttype'];


$to = "patriciabetancorjimenez@gmail.com";
$subject = "New e-mail";
$body = "You have a new client from your website theguineapignook. 

\n\n $deliverycollection   \n\n $deliveryfee  \n\n $name \n\n $surname \n\n $email \n\n $phone  \n\n $street  \n\n $city \n\n $postcode \n\n $paymenttype";

mail($to, $subject, $body);

echo "Message sent! click <a href='index.html'> here </a> to go back";

?>
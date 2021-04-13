


$(document).ready(function(){ //ready funcion starts




$("#menu a").mouseover(function(){ // homepage animation starts


  $(this).find("p:nth-child(1)").css("color", "#4B088A");

});


$("#menu a").mouseout(function(){


  $(this).find("p:nth-child(1)").css("color","#DF013A");

});// homepage animation ends





var total10;
var total20;
var namestotal=[];
var total=0;

var first=true;
var local;

$(".add").click(function(){

$(this).html("Added!").attr("disabled","disabled");
$(".buynow").removeAttr("disabled");
$("#totalprice").css("border-top","2px solid black");




 nameh=$(this).closest(".option").find("h2").text();
 pricestring=$(this).closest(".option").find(".price").text();

 


 $("#note").css("visibility", "visible"); 



  
  $("#products").append( "<span class='not'>"  + nameh + "</span>"  + "<br>");
   $("#prices").append( "<span class='tot'>" + pricestring + "<span>"   +    "<br>");



  namestotal.push(nameh + " " + pricestring + "  <br>  ");





 total=total + parseInt(pricestring);


if (first==true) {


$("#totalprice").html("<p> Total price:  " +total+ "£ </p>  "  );


 localStorage.setItem("totalpurchase",total);




localStorage.setItem("totalname",JSON.stringify(namestotal));




first=false;

}else{


$("#totalprice .tot").remove();

 $("#totalprice").html("<p> Total price:  " + total + "£ </p>  " + "<br>" );




 localStorage.setItem("totalpurchase",total);


 localStorage.setItem("totalname",JSON.stringify(namestotal.join(" ")));





}


});





$(".clear").click(function(){

$("#prices").empty();
$("#products").empty();
$(".buynow").attr("disabled","disabled");
$("#totalprice").css("border-top","none");
namestotal=[]

total=0;

 $("#totalprice").html("<p> Total price:  " + total + "£ </p>  " + "<br>" );

 $(".add").html("Add to basket").removeAttr("disabled");



});










$(".keeplooking").click(function(){ //note hides

 $("#note").css("visibility", "hidden");

});






 


   $(".collection").click(function(){

     
  $(".delivery").attr("disabled","disabled");
  $(".collection").attr("disabled","disabled").css("background-color","#980123");

  $(".deliverycost").css("visibility","visible");

 $(".deliverycost").append(" 0£");




 totalcoll=parseInt(localStorage.getItem("totalpurchase"));
 


  $(".fullprice").append("<strong><span class='totalcolor'>" + totalcoll +  "£</span></strong>");

   $(".fullprice").css("visibility","visible");

    });





  $(".delivery").click(function(){
   $(".delivery").attr("disabled","disabled").css("background-color","#980123");
 
   $(".collection").attr("disabled","disabled");
   $(".deliveryfee").css("visibility","visible");

});
     


 $("#customRadio1").click(function(){

 $(".deliverycost").css("visibility","visible");
  $(".deliverycost").append(" 10£");



total10=parseInt(localStorage.getItem("totalpurchase"))+10;
 


 $(".fullprice").append("<strong><span class='totalcolor'>" + total10 +  "£</span></strong>");

// localStorage.setItem("totalpurchase1",total10);

 
   $(".fullprice").css("visibility","visible");
  $("#customRadio2").attr("disabled","disabled");

  $("#customRadio1").attr("disabled","disabled");


  });

 


 $("#customRadio2").click(function(){
 $(".deliverycost").css("visibility","visible");

 $(".deliverycost").append(" 20£");



 
   total20=parseInt(localStorage.getItem("totalpurchase"))+20;

  
   $(".fullprice").append("<strong><span class='totalcolor'>" + total20 +  "£</span></strong>");

  // localStorage.setItem("totalpurchase2",total20);

$(".fullprice").css("visibility","visible");

  $("#customRadio2").attr("disabled","disabled");

  $("#customRadio1").attr("disabled","disabled");

  });





 $("#inlineRadio1").click(function(){


      $("#emailaddress2").attr("disabled", true);
 
$("#expiry-year").attr("disabled", false);
$("#expiry-month").attr("disabled", false);



$(".disablefield input[type=text]").attr("disabled", false);
$(".disablefield input[type=number]").attr("disabled", false);




});









 $("#inlineRadio2").click(function(){

$(".disablefield input[type=text]").attr("disabled", true);
$(".disablefield input[type=number]").attr("disabled", true);
$("#expiry-month").attr("disabled", true);
 $("#expiry-year").attr("disabled", true);
  $("#emailaddress2").attr("disabled", false);


});







var duration = 1000; // scroll starts
    $(window).scroll(function() {

      if ($(this).scrollTop() > 300) {
        $('.to-top').fadeIn(duration);
      } else {
        $('.to-top').fadeOut(duration);
      }
    }); 

     $('.to-top').click(function(){

$("body").animate({scrollTop: 0}, 800);


     });//scroll ends







  }); //ready function ends









 (function() { //form validation beggins
   'use strict';

  window.addEventListener('load', function() {

    var form = document.getElementById('needs-validation');

    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);

   }, false);
 })(); //form validation ends








   var chinchilla=document.getElementById("chinchilla"); //chinchilla animation starts
     var chinwrap=document.getElementById("chinwrap");

   chinchilla.addEventListener("click",show,false);
      document.addEventListener("click",disappear,false);

   function show(y){
  
  chinwrap.style.visibility="visible";
     y.preventDefault();
    y.stopPropagation();


 
 

      
}



   function disappear(){
  

   chinwrap.style.visibility="hidden";
  

 }//chinchilla animation ends











  //Script for form
        $("form").submit(function () {
            console.log($(this).serializeArray());
            return false;
        });   
   //Script for CLICKS    
        $(document).ready(function () {
            $("#mycarousel").carousel({
                interval: 4000
            });
            $("#carousel-pause").click(function () {
                $("#mycarousel").carousel('pause');
            });
            $("#carousel-play").click(function () {
                $("#mycarousel").carousel('cycle');
            });

            $("#digitalSystemsClick").click(function () {
                $("#digitalSystemsModal").modal('show');
            });
              $("#quiosqueClick").click(function () {
                $("#quiosqueModal").modal('show');
            });
            $("#simulinkClick").click(function () {
                $("#simulinkModal").modal('show');
            });
                $("#bodycoteClick").click(function () {
                $("#bodycoteModal").modal('show');
            });
             $("#JavascriptGamesClick").click(function () {
                $("#JavascriptGamesModal").modal('show');
            });
            $("#BootstrapRestaurantClick").click(function () {
                $("#BootstrapRestaurantModal").modal('show');
            });
        });



var birthday_String = "1986-07-30";

function getAge(birthday_String) {
	var today = new Date();
  	var birthDate = new Date(birthday_String);
  	var age = today.getFullYear() - birthDate.getFullYear();
  	var m = today.getMonth() - birthDate.getMonth();
  	
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

window.onload =function(){
	var age = getAge(birthday_String);
	//console.log(age);
	document.getElementById("age").innerHTML = age;
}


 
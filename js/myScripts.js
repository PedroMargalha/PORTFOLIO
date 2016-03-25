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
        });




 
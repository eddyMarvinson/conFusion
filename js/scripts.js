$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });

    $("#reserveButton").click(function(){
        $('#reserveModal').modal('show');
    });
    $("#loginButton").click(function(){
        $('#loginModal').modal('show');
    });
    $("#CancelReserveButton").click(function(){
        $('#reserveModal').modal('hide');
    });
    $("#CancelLoginButton").click(function(){
        $('#loginModal').modal('hide');
    });
    $("#XreserveButton").click(function(){
        $('#reserveModal').modal('hide');
    });
    $("#XloginButton").click(function(){
        $('#loginModal').modal('hide');
    });
    
    $("#option1").click(function(){
        $("#option1").parent().addClass('active');
        $("#option2").parent().removeClass('active');
    });
    $("#option2").click(function(){
        $("#option2").parent().addClass('active');
        $("#option1").parent().removeClass('active');
    });

});

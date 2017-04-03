
// video carousel

$(document).ready(function(){
  $('.carousel-items').slick({
  	infinite: false,
  	slidesToShow:3
   });
});


// $( "#flip" ).click(function() {
//   $( ".sliding-menu" ).slideToggle( "slow", function() {
//   })
//   return false;
// });

//responsive menu media queries

function myFunction() {
    var x = document.getElementById("mini");
    if (x.className === "mini-nav") {
        x.className += " responsive";
    } else {
        x.className = "mini-nav";
    }
}




// $("#flip").click(function(){
//     // if(clicked){
//         $("nav").css({'background-color':'white', "border-bottom":"1px solid #CCCCCC"});
//         $("#nav-container").css('background-color', '#ffffff');
//         $(".color-swap").css('color','#333333');
//         $(".border-swap").css("border-left", "1px solid #CCCCCC");
//         $(".logo-img").attr("src", "bbc-blocks-dark.png");
//         $(".user-icon").attr("src", "user.png");
//         // clicked  = false;
//     // } else {
//     //     clicked  = false;
//     // }   
// });









$( "#flip" ).click(function() {
  $( ".sliding-menu" ).slideToggle( "slow", function() {
  	$("nav").css({'background-color':'white', "border-bottom":"1px solid #CCCCCC"});
        $("#nav-container").css('background-color', '#ffffff');
        $(".color-swap").css('color','#333333');
        $(".border-swap").css("border-left", "1px solid #CCCCCC");
        $(".logo-img").attr("src", "bbc-blocks-dark.png");
        $(".user-icon").attr("src", "user.png");
        $(".news-category-color-white").css('background-color', '#000000');
        $(".arrow-icon").attr("src", "down-dark.png");
        $("input").css("background", "#E4E4E4");
  });
  return false;

  $( ".sliding-menu" ).slideToggle( "slow", function() {
    $("nav").css({'background-color': "#000000", "border-bottom":"1px solid #CCCCCC"});
        $("#nav-container").css('background-color', '#000000');
        $(".color-swap").css('color','#ffffff');
        $(".border-swap").css("border-left", "1px solid #CCCCCC");
        $(".logo-img").attr("src", "bbc-blocks-light.png");
        $(".user-icon").attr("src", "social.png");
        $(".arrow-icon").attr("src", "down-light.png");
        $("input").css("background", "#ffffff");
  });

  // return false;
});


function init(){
    
    // On Doc ready -> set section heights to the viewport heights
    vph = $(window).height();
    $('#homepage').css('height', vph);
    /* affix the navbar after scrolling down */
    $(".navbar").affix({offset: {top: 10} });
}

function setScrollingEvent(){
    //Set Event Handling for navbar
    $(".nav_btn").click(function() {
        $('html, body').animate({
            scrollTop: $("#homepage").offset().top
        }, 2000);
    });
}

$(document).ready(function(){
    init();
})







//Find largest height of boxed item -> set all boxes to that height
// var maxHeight = 0;

// $(".skill_item").each(function(){
//     if( $(this).height() > maxHeight){
//         maxHeight = $(this).height();
//     }
// });

// $(".skill_item").height(maxHeight);
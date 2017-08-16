function init(){
    
    // On Doc ready -> set section heights to the viewport heights
    vph = $(window).height();
    $('#homepg').css('height',vph);
    /* affix the navbar after scrolling down */
    $(".navbar").affix({offset: {top: 10} });
}

$(document).ready(function(){
    init();
})
 
// on Resize -> set section height/width to viewport
// $(window).resize(function(){
//     vpw = $(window).width();
//     vph = $(window).height();

//     $('section').css('height',vph);
// });



//Find largest height of boxed item -> set all boxes to that height
var maxHeight = 0;

$(".skill_item").each(function(){
    if( $(this).height() > maxHeight){
        maxHeight = $(this).height();
    }
});

$(".skill_item").height(maxHeight);
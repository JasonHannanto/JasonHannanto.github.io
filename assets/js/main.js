function init(){
    
    // On Doc ready -> set section heights to the viewport heights
    vph = $(window).height();
    $('section').css('height',vph);
    /* affix the navbar after scrolling down */
    $(".navbar").affix({offset: {top: 10} });
}

$(document).ready(function(){
    init();
})

// on Resize -> set section height/width to viewport 
$(window).resize(function(){
    vpw = $(window).width();
    vph = $(window).height();

    $('section').css('height',vph);
});
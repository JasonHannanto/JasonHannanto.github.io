function setScrollingEvent(){
    //Set Event Handling for navbar
    $('.home_btn').click(function(){
        $('#homepage').animatescroll({padding:50});
    })

    $('.about_btn').click(function(){
        $('#aboutpage').animatescroll({padding:50});
    })

    $('.skills_btn').click(function(){
        $('#skillspage').animatescroll({padding:50});
    })

    $('.resume_btn').click(function(){
        $('#resumepage').animatescroll({padding:49});
    })

    // $('project_btn').click(function(){
    //     $('#aboutpage').animatescroll({padding:50});
    // })

    $('.contact_btn').click(function(){
        $('#contactpage').animatescroll({padding:50});
    })

    $('#logo-brand').click(function(){
        $('#homepage').animatescroll();
    })
}   

function init(){
    
    // On Doc ready -> set section heights to the viewport heights
    vph = $(window).height();
    $('#homepage').css('height', vph);
    /* affix the navbar after scrolling down */
    $(".navbar").affix({offset: {top: 10} });

    setScrollingEvent();
}

$(document).ready(function(){
    init();
})
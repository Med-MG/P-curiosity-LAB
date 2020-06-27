// $(".filter-inner").filterizr();
// $('.filter-wrap li').click(function () {
//     $('.filter-wrap li').removeClass('active-filtre');
//     $(this).addClass('active-filtre');

// });




(function(){

    'use strict';


    var $projects = $('.projects');

    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('ul.filter-wrap > li').on('click', function(e){

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filter-wrap > li').removeClass('active-filtre');
        $(this).addClass('active-filtre');

        $projects.isotope({filter: filter});

    });


})(jQuery);
$(".filter-inner").filterizr();
$('.filter-wrap li').click(function () {
    $('.filter-wrap li').removeClass('active-filtre');
    $(this).addClass('active-filtre');
});
$(document).ready(function () {
    $('.dark-body').addClass('scrollable');
    loadingPercentageElement.html('100%');
    $('#loadingPercentage').attr('id', 'chnage');
    setTimeout(() => {
        $('.preloader').fadeOut();
    }, 1);

    $('#body-content').on('click', function () {
        $('#more-btn').removeClass('active');
        setTimeout(() => {
            $('.navlink-responsive').removeClass('show');
        }, 50);
    });

    $('#more-btn').on('click', function (e) {
        $('#more-btn').toggleClass('active');
        $('.navlink-responsive').css('display', 'block');
        setTimeout(() => {
            $('.navlink-responsive').toggleClass('show');
        }, 50);
    });
    $('[data-toggle="tooltip"]').tooltip();
});


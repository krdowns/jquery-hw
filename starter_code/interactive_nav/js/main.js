$(document).ready(function () {

    $('#main-nav a').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('#subnav').slideUp();
        } else {
           $('#main-nav a').removeClass('active');
           $(this).addClass('active');
           $('#subnav').slideDown();
           $('.nav-panel').hide();
           
           var showing = $(this).data('related-panel');

           $('#' + showing).show();
        }
    })
























})
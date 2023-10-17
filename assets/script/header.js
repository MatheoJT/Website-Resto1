$(document).ready(function () {
    
    $(".on").click(function () {
        $('.alert').css({
            'display': 'block',
        });
        setTimeout(function () {
            $('.alert').css({
                'transform': 'translateX(0)',
            });
        }, 50);
    });

    $(".close").click(function () {
        $('.alert').css({
            'transform': 'translateX(150%)',
        });
    });

    $(".out").click(function () {
        $('.alert').css({
            'transform': 'translateX(150%)',
        });
    })
})


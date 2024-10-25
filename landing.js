$(document).ready(function () {
    $("a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,function () {
                    window.location.hash = hash;
                }
            );
        }
    });
});

$('.navbar-container input[type="checkbox"]').on('change', function () {
    $('.menu-items').toggleClass('active');
});

$('.form-container .btn').on('click', function (event) {
    event.preventDefault();
    const name = $('input[type="text"]').val();
    const email = $('input[type="email"]').val();
    const message = $('textarea').val();
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
    } else {
        alert('Thank you for your message, we will get back to you soon!');
        $('input[type="text"], input[type="email"], textarea').val(''); // Clear fields
    }
});
(function ($) {

    "use strict";

    var fullHeight = function () {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height());
        });

    };
    fullHeight();

    $(".toggle-password").click(function () {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }s
    });

})(jQuery);

function logIn() {
	// Get the name entered by the user
	const usernameField = document.getElementById('username-field').value;
	const passwordField = document.getElementById('password-field').value;

	console.log(usernameField);
	console.log(passwordField);

    const username = usernameField ? usernameField : '';
    const password = passwordField ? passwordField : '';
    const sample = 'chike';
    const adminSample = 'admin';
    console.log(sample)
    console.log('> attempting redirect');
    console.log(username === sample)
    if (String(username) === sample) {
        console.log('> Storing');
        localStorage.setItem('username', username);
        window.location.assign("template/index.html");
        console.log('> success');
    }
    else if (String(username) === adminSample) {
        console.log('> Storing');
        localStorage.setItem('username', username);
        window.location.href = "enterprise/template/index.html";
        console.log('> success');
    }
}
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

    const username = usernameField ? usernameField.value : '';
    const password = passwordField ? passwordField.value : '';
    console.log('> attempting redirect');
    if (username !== '' && password !== '') {
        console.log('> Storing');
        localStorage.setItem('username', username);
        window.location.assign("template/index.html");
        console.log('> success');
    }
    else {
        console.log('> Nope!');
        localStorage.setItem('username', username);
        window.location.href = "template/index.html";
        console.log('> success');
    }
}
const username = "new_user";
const password = "123456789";
const correctIcon = $(".correct-icon").hide();
const errorIcon = $(".error-icon").hide();

$('#login-container').submit(function (e) {
    e.preventDefault();
    const userNameInput = $('#username').val();
    const userPasswordInput = $('#password').val();
    //* IF-ELSE-IF FOR USERNAME INPUT
    if (userNameInput === "") {
        $('#username').addClass('error');
        $("#message-username").text('* Please, enter username');
        $('#error-icon-username').show();
        $('#correct-icon-username').hide();
        $("#username").removeClass("correct");
    } else if (userNameInput === username) {
        $("#username").addClass('correct');
        $("#message-username").hide();
        $('#correct-icon-username').show();
        $('#error-icon-username').hide();
        $('#username').removeClass('error');
    } else {
        $('#username').addClass('error');
        $("#message-username").text('* Please, enter valid username');
        $('#error-icon-username').show();
        $("#username").removeClass("correct");
        $('#correct-icon-username').hide();
    }
    //* IF-ELSE-IF FOR PASSWORD INPUT
    if (userPasswordInput === "") {
        $('#password').addClass('error');
        $("#message-password").text('* Please, enter password');
        $("#error-icon-password").show();
        $('#correct-icon-password').hide();
        $("#password").removeClass("correct");
    } else if (userPasswordInput === password) {
        $('#password').addClass('correct');
        $("#message-password").hide();
        $('#correct-icon-password').show();
        $('#error-icon-password').hide();
        $("#password").removeClass('error');
    } else {
        $('#password').addClass('error');
        $("#message-password").text("* Please, enter valid password");
        $("#error-icon-password").show();
        $('#correct-icon-password').hide();
        $("#password").removeClass("correct");
    }

    if (userNameInput === username && userPasswordInput === password) {
        $("#message-username").show();
        $("#message-username").text('* Successful login!');
    };
});

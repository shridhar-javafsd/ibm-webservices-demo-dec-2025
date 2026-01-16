// app.js

$(document).ready(function () {

    // 1. click()
    $('#btnHide').click(function () {
        $('#box').hide();
    });

    // 2. show()
    $('#btnShow').click(function () {
        $('#box').show();
    });

    // 3. toggle()
    $('#btnToggle').click(function () {
        $('#box').toggle();
    });

    // 4. text()
    $('#btnText').click(function () {
        $('#heading').text('Text changed using jQuery!');
    });

    // 5. addClass() / removeClass() / toggleClass()
    $('#btnClass').click(function () {
        $('#box').toggleClass('highlight');
    });

});

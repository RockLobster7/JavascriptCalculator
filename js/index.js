$(document).ready(function () {


    //handle numbers
    $('.number').click(function () {
        //if the display is showing 0, then overwrite it with a new number, else append the new number
        if ($('#display').text() === '0') {
            $('#display').text($(this).text());
        } else {
            $('#display').text($('#display').text() + $(this).text());
        }
    });

    //handle period
    $('#btn-period').click(function () {
        //append only one period on the display
        if ($('#display').text().indexOf('.') === -1)
            $('#display').text($('#display').text() + $(this).text());
    });

    //handle clear
    $('#btn-clear').click(() => $('#display').text('0'));



});
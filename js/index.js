$(document).ready(function () {

    //handle numbers
    $('.number').click(function () {
        //if the display is showing 0, then overwrite it with a number, else append
        if ($('#working-display').text() === '0') {
            $('#main-display').text($(this).text());
            $('#working-display').text($(this).text());
        } else if ($('#main-display').text() === '0') {
            $('#main-display').text($(this).text());
            $('#working-display').text($('#working-display').text() + $(this).text());
        } else {
            $('#main-display').text($('#main-display').text() + $(this).text());
            $('#working-display').text($('#working-display').text() + $(this).text());
        }
    });

    //handle operators
    $('.operator').click(function () {
        //if the display is showing 0, then overwrite it with a number, else append the operator
        if ($('#main-display').text() !== '0') {
            if ($('#working-display').text() !== '0') {
                $('#working-display').text($('#working-display').text() + $(this).text());
            }
            $('#main-display').text('0');
        }
    });

    //handle period
    $('#btn-period').click(function () {
        //append only one period on the display
        if ($('#main-display').text().indexOf('.') === -1)
            $('#main-display').text($('#main-display').text() + '.');

            
            $('#working-display').text($('#working-display').text() + '.');
    });

    //handle clear
    $('#btn-clear').click(() => $('#working-display').text('0'));
    $('#btn-clear').click(() => $('#main-display').text('0'));

    //handle equals
    $('#btn-equals').click(function () {
        if (/^[^=]+\d$/.test($('#working-display').text()))
            $('#working-display').text($('#working-display').text() + $(this).text());
    });


});
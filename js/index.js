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
        //if the display is not showing 0, then append the operator
        if ($('#main-display').text() !== '0' && $('#main-display').text() !== '0.') {

            //if the last character in the working display is a period, then remove it to append operator
            let workingDisplay = $('#working-display').text();
            if (workingDisplay[workingDisplay.length - 1] === '.') {
                $('#working-display').text(workingDisplay.substring(0, workingDisplay.length - 1) + $(this).text());
            } else {
                $('#working-display').text($('#working-display').text() + $(this).text());
            }

            // alert(runningTotal($('#main-display').text(), $(this).text()));

            //zero out the main display for the next number
            $('#main-display').text('0');

        };
    });

    //handle period
    $('#btn-period').click(function () {
        //append only one period per number sequence
        if ($('#main-display').text().indexOf('.') === -1) {
            if ($('#main-display').text() === '0' && $('#working-display').text() !== '0') {
                $('#working-display').text($('#working-display').text() + '0.');
            } else {
                $('#working-display').text($('#working-display').text() + '.');
            }
            $('#main-display').text($('#main-display').text() + '.');
        }
    });

    //handle clear
    $('#btn-clear').click(() => {
        $('#working-display').text('0');
        $('#main-display').text('0');
    });

    //handle equals
    $('#btn-equals').click(function () {
        if (/^[^=]+\d$/.test($('#working-display').text())) {

            let x = $('#working-display').text();

            $('#working-display').text($('#working-display').text() + $(this).text());

            //get this working eval will evaluate the string as a mathematical equation but you need to
            //replace the HTML symbols with operators .e.g. x with * 
            alert(eval(x));
        }
    });


});
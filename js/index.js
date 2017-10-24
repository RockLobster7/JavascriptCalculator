$(document).ready(function () {
    //variable controls what should happen after the equals button was pressed
    var wasEquals = false;

    //handle numbers
    $('.number').click(function () {
        //if the working display is showing 0, then overwrite it with a new digit
        if ($('#working-display').text() === '0') {
            $('#main-display').text($(this).text());
            $('#working-display').text($(this).text());

            //if the main display is showing 0, then append the digit to the working display
        } else if ($('#main-display').text() === '0') {
            $('#main-display').text($(this).text());
            $('#working-display').text($('#working-display').text() + $(this).text());

            //if wasEquals then overwrite both displays with the new digit
        } else if (wasEquals) {
            $('#main-display').text($(this).text());
            $('#working-display').text($(this).text());
            wasEquals = false;

            //otherwise append the digit to both displays
        } else {
            $('#main-display').text($('#main-display').text() + $(this).text());
            $('#working-display').text($('#working-display').text() + $(this).text());
        }
    });

    //handle operators
    $('.operator').click(function () {

        let workingDisplay = $('#working-display').text();

        //if the display is not showing 0, then append the operator
        if ($('#main-display').text() !== '0' && $('#main-display').text() !== '0.') {

            //if the last character in the working display is a period, then remove it to append operator
            if (workingDisplay[workingDisplay.length - 1] === '.') {
                $('#working-display').text(workingDisplay.substring(0, workingDisplay.length - 1) + $(this).text());

            } else {
                $('#working-display').text($('#working-display').text() + $(this).text());
            }
            //zero out the main display for the next number
            $('#main-display').text('0');
        };

        //swap the operator around if the user changes his mind
        if (/[÷×−+]$/.test(workingDisplay)) {
            $('#working-display').text(workingDisplay.substring(0, workingDisplay.length - 1) + $(this).text());
        }
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

        //reset wasEquals so we can append a number instead of overwriting it
        wasEquals = false;
    });

    //handle clear
    $('#btn-clear').click(() => {
        $('#working-display').text('0');
        $('#main-display').text('0');
        wasEquals = false;
    });

    //handle equals
    $('#btn-equals').click(function () {
        //if the string does not already contain an equals and ends with a digit
        if (/\d+(\.?$)(\d$)?/.test($('#working-display').text())) {

            // convertHTML symbols to javascript arithmetic operators
            var html = {
                "÷": ")/",
                "×": ")*",
                "−": ")-",
                "+": ")+"
            };
            let expr = $('#working-display').text()
                .replace(/[÷×−+]/g, (char) => html[char]);

            //add parentheses to encapsulate the mathematical expression because eval won't do it 
            //and produces incorrect results
            for (i = 0; i < expr.split(')').length - 1; i++) {
                expr = '(' + expr;
            }
            let result = eval(expr);

            $('#working-display').text(result);
            $('#main-display').text(result);
            wasEquals = true;
        }
    });
});
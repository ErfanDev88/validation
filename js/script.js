
$('#formComplete').hide()

$(document).ready(function () {
    
    // Store inputs
    let fullnameInput = $('#fullnameInput');
    let emailAddressInput = $('#emailAddressInput');
    let passInput = $('#passInput');
    let confirmPassInput = $('#confirmPassInput');
    let eyeToggleBtn = $('#eyeToggle');
    let confirmEyeToggleBtn = $('#cEyeToggle');

    eyeToggleBtn.click(function () {
        if (passInput.attr('type') == 'password') {
            passInput.attr('type', 'text');
        } else if (passInput.attr('type') == 'text') {
            passInput.attr('type', 'password');

        }
    })

    confirmEyeToggleBtn.click(function () {
        if (confirmPassInput.attr('type') == 'password') {
            confirmPassInput.attr('type', 'text');
        } else if (confirmPassInput.attr('type') == 'text') {
            confirmPassInput.attr('type', 'password');

        }
    })

    $('#registerInfo').click(function () {

        event.preventDefault();

        // Store Err Spans Box
        let fullnameInputErr = $('#fullnameErr');
        let emailInputErr = $('#emailErr');
        let passlInputErr = $('#passErr');
        let confirmPasslInputErr = $('#confirmPassErr');

        let vallidationStatus;


        if (fullnameInput.val() == '') {
            fullnameInputErr.text('Please enter Fullname')
            fullnameInput.addClass('bordered')
            vallidationStatus = false;
        } else {
            fullnameInputErr.hide('1000');
            fullnameInput.removeClass('bordered')
            vallidationStatus = true;
        }

        if (emailAddressInput.val() == '') {
            emailInputErr.text('Please enter Email')
            emailAddressInput.addClass('bordered')
            vallidationStatus = false;

        } else {
            emailInputErr.hide('1000');
            emailAddressInput.removeClass('bordered')
            vallidationStatus = true;

        }

        if (passInput.val() == '') {
            passlInputErr.text('Please enter Password')
            passInput.addClass('bordered')
            vallidationStatus = false;

        } else {
            passlInputErr.hide('1000')
            passInput.removeClass('bordered')
            vallidationStatus = true;

        }

        if (confirmPassInput.val() == '') {
            confirmPasslInputErr.text('Please Confirm Password')
            confirmPassInput.addClass('bordered')
            vallidationStatus = false;

        } else if (!confirmPassInput.val() == '') {

            confirmPasslInputErr.hide('1000')
            confirmPassInput.removeClass('bordered')
            vallidationStatus = true;


            if (passInput.val() !== confirmPassInput.val()) {
                confirmPasslInputErr.show('1000')
                confirmPassInput.addClass('bordered')
                confirmPasslInputErr.text('Passwords Does Not Match!')
                vallidationStatus = false;

            } else {

                confirmPassInput.removeClass('bordered')
                confirmPasslInputErr.hide('1000')
                vallidationStatus = true;

            }


        }

        if (vallidationStatus == true) {
            $('#formInner').hide(1000);
            $('#formComplete').show(1000)
        }



    })

});




window.addEventListener('DOMContentLoaded', function () {


    //validator
    @@include('just-validate.js');
    new window.JustValidate('.form-js', {
        rules: {
            email: {
                required: true,
                email: true
            },

            name: {
                required: true,
                minLength: 3,
                maxLength: 20
            },
            text: {
                required: true,
                maxLength: 300,
                minLength: 5
            },
            emailSubmit: {
                required: true,
                email: true
            },
        }
    });

});





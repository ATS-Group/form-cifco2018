/***Javascript puro */

(function() {
    "use strict";

    document.addEventListener('DOMContentLoaded', function(event) {

        /** Hacks para que el input file funcione */

        var inputs = document.querySelectorAll('.file-c');
        Array.prototype.forEach.call(inputs, function(input) {
            var label = input.nextElementSibling,
                labelVal = label.innerHTML;

            input.addEventListener('change', function(e) {
                var fileName = '';

                fileName = e.target.value.split('\\').pop();

                if (fileName) {
                    label.querySelector('span').innerHTML = fileName;
                } else {
                    label.innerHTML = labelVal;
                }
            });
        });
    });

})(); //Dom content loaded

/**Jquery */

/**Que los estilos del select funcionen */
$(function() {
    $('.sel').each(function() {
        $(this).children('select').css('display', 'none');

        var $current = $(this);

        $(this).find('option').each(function(i) {
            if (i == 0) {
                $current.prepend($('<div>', {
                    class: $current.attr('class').replace(/sel/g, 'sel__box')
                }));

                var placeholder = $(this).text();
                $current.prepend($('<span>', {
                    class: $current.attr('class').replace(/sel/g, 'sel__placeholder'),
                    text: placeholder,
                    'data-placeholder': placeholder
                }));

                return;
            }

            $current.children('div').append($('<span>', {
                class: $current.attr('class').replace(/sel/g, 'sel__box__option'),
                text: $(this).text()
            }));
        });
    });

    $('.sel').click(function() {
        $(this).toggleClass('active');
    });

    $('.sel__box__option').click(function() {
        var txt = $(this).text();
        var index = $(this).index();

        $(this).siblings('.sel__box__option').removeClass('selected');
        $(this).addClass('selected');

        var $currentSel = $(this).closest('.sel');
        $currentSel.children('.sel__placeholder').text(txt);
        $currentSel.children('select').prop('selectedIndex', index + 1);

    });




    /**Validacion formulario */
    $('#fname_error_message').hide(); //Selecciona nombre
    $('#flname_error_message').hide(); //Selecciona apellido
    $('#ftel_error_message').hide(); //Selecciona telefono
    $('#fcountry_error_message').hide(); //selecciona pais
    $('#fcompany_error_message').hide(); //Selecciona empresa
    $('#femail_error_message').hide(); //Selecciona correo
    $('#fdocument_error_message').hide(); //Selecciona documento
    $('#fndocument_error_message').hide(); //Selecciona numero documento
    $('#fcategory_error_message').hide(); //Selecciona categoria
    $('#facces_error_message').hide(); //Selecciona tipo de acceso
    $('#fphoto_error_message').hide(); //Selecciona el subir foto

    var error_fname = false;
    var error_flname = false;
    var error_ftel = false;
    var error_fcountry = false;
    var error_fcompany = false;
    var error_fmail = false;
    var error_fdocument = false;
    var error_fndocument = false;
    var error_fcategory = false;
    var error_facces = false;
    var error_fphoto = false;

    //Eventos

    $('#form_fname').focusout(function() {
        check_fname();
    });
    $('#form_flname').focusout(function() {
        check_flname();
    });
    $('#form_ftel').focusout(function() {
        check_ftel();
    });

    $('#form_ftel').focusin(function() {
        check_fcountry();
    });
    $('.sel.pais').click(function() {
        check_fcountry();
    });
    $('#form_fcompany').focusout(function() {
        check_fcompany();
    });
    $('#form_femail').focusout(function() {
        check_femail();
    });
    $('#form_fdocument').focusout(function() {
        check_fdocument();
    });
    $('#form_fndocument').focusout(function() {
        check_fndocument();
    });
    $('#form_fcategory').focusout(function() {
        check_fcategory();
    });
    $('#form_facces').focusout(function() {
        check_facces();
    });
    $('.form_fphoto').focusout(function() {
        check_fphoto();
    });

    //Funciones validadoras

    function check_fname() {
        var pattern = /^[a-zA-Z]*$/;
        var fname = $('#form_fname').val();
        if (pattern.test(fname) && fname !== '') {
            $("#fname_error_message").hide();
            $('#form_fname').css('border-bottom', '2px solid #2AAF74');
            $('#form_flname').css("margin-top", "auto");
        } else {
            $('#fname_error_message').html("Requerido. Caracteres de A-Z");
            $("#fname_error_message").show();
            $('#form_fname').css("border-bottom", "2px solid #dd3333");
            $('#form_flname').css("margin-top", "28px");
            error_fname = true;
        }
    }

    function check_flname() {
        var pattern = /^[a-zA-Z]*$/;
        var flname = $('#form_flname').val();
        if (pattern.test(flname) && flname !== '') {
            $("#flname_error_message").hide();
            $('#form_flname').css('border-bottom', '2px solid #2AAF74');
            $('#form_fname').css("margin-top", "auto");
        } else {
            $('#flname_error_message').html("Requerido. Caracteres de A-Z");
            $("#flname_error_message").show();
            $('#form_flname').css("border-bottom", "2px solid #dd3333");
            $('#form_fname').css("margin-top", "28px");
            error_flname = true;
        }
    }

    function check_fcountry() {
        var currentIndex = $('.select.pais option:selected').val();
        if (currentIndex >= 1) {
            $("#fcountry_error_message").hide();
            $('.sel.pais').css('border-bottom', '2px solid #2AAF74');
            $('#form_ftel').css("margin-top", "auto");
        } else {
            $('#fcountry_error_message').html("Requerido. Elija un pais");
            $("#fcountry_error_message").show();
            $('.sel.pais').css("border-bottom", "2px solid #dd3333");
            $('#form_ftel').css("margin-top", "28px");
            error_fcountry = true;
        }
    }

    function check_ftel() {
        var currentIndexCountry = $('.select.pais option:selected').val();
        switch (currentIndexCountry) {
            case "1":
                var pattern = /^((\+?503([ \t|\-])?)?[0-9]{4}?([ \t|\-])?[0-9]{4})$/;
                $('#form_ftel').attr("placeholder", "+503 xxxx-xxxx")
                break;
            case "2":
        }
        var ftel = $('#form_ftel');
        if (pattern.test(ftel) && ftel !== '') {
            $("#ftel_error_message").hide();
            $('#form_ftel').css('border-bottom', '2px solid #2AAF74');
            $('.sel.pais').css("margin-top", "auto");
        } else {
            $('#ftel_error_message').html("Requerido. Formato de telefono valido");
            $("#ftel_error_message").show();
            $('#form_ftel').css("border-bottom", "2px solid #dd3333");
            $('.sel.pais').css("margin-top", "28px");
            error_flname = true;
        }

    }

    /**Correcciones css */
    if ($('.select.pais option:selected').val() == 5) {
        $('span.sel__placeholder.sel__placeholderect1.pais').css("padding-right", "20px");
    }

});
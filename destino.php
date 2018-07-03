<?php
    if( isset($_POST["nombre"]) && !empty($_POST["nombre"]) &&
    isset($_POST["apellido"]) && !empty($_POST["apellido"]) &&
    $_POST["pais"] !== '' &&
    isset($_POST["celular"]) && !empty($_POST["celular"]) &&
    isset($_POST["empresa"]) && !empty($_POST["empresa"]) &&
    isset($_POST["email"]) && !empty($_POST["email"]) &&
    $_POST["documento"] !== '' &&
    isset($_POST["numero-documento"]) && !empty($_POST["numero-documento"]) &&
    isset($_POST["numero-documento"]) && !empty($_POST["numero-documento"])
        ) {
            return print("ok");
    }

    return print("No se realizo")
?>
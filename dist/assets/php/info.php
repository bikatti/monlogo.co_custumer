<?php
 $destinatario = 'team@monlogo.co';
 // esto es al correo al que se enviará el mensaje
 $nombre = $_POST['nombre'];
 $mensaje = $_POST['mensaje'];
 $email = $_POST['email'];

 $asunto = $email . ". Mensaje enviado desde website";
 $header = "Enviado por un cliente desde la página de Monlogo.co";
 $mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre . "\nDe:" . $email  . "\n" . $header;
 
 mail($destinatario, $asunto, $mensajeCompleto);
 echo "<script>alert('correo enviado exitosamente')</script>";
 echo "<script> setTimeout(\"location.href='/'\", 1000)</script>";
?>
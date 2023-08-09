<?php
// Datos de conexión a la base de datos
$servername = "nombre_del_servidor";
$username = "nombre_de_usuario";
$password = "contraseña_del_usuario";
$dbname = "nombre_de_la_base_de_datos";

// Establecer conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Obtener los datos del formulario
$username = $_POST['username'];
$password = $_POST['password'];

// Consulta SQL para verificar el usuario y contraseña
$sql = "SELECT * FROM usuarios WHERE nombre_usuario = '$username' AND contrasena = '$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Usuario válido, puedes redirigirlo a otra página o realizar alguna acción aquí
    echo "Inicio de sesión exitoso.";
} else {
    // Usuario o contraseña incorrectos
    echo "Nombre de usuario o contraseña incorrectos.";
}

$conn->close();
?>

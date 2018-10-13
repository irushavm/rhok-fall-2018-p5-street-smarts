<?php

session_start();
error_reporting(E_ALL);
$username = $_SESSION['username']; 

include 'inc/connect.php';
include 'template/header.php'

echo "<a href="login.php">Login</a>"
echo "<a href="register.php">Register</a>"


include 'template/footer.php'

?>





</body>

</html>
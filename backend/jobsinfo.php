<?php

session_start();
error_reporting(E_ALL);
$username = $_SESSION['username']; 

include 'inc/connect.php';
include 'template/header.php'

$user_sql = mysqli_query($connection, "SELECT * FROM jobs");


$user_resultsarr = mysqli_fetch_assoc($user_sql);



json_encode($user_resultsarr);

include 'template/footer.php'

?>





</body>

</html>
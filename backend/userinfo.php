<?php

//session_start();
//error_reporting(E_ALL);
//$username = $_SESSION['username']; 

$username = $_POST['username'];

include 'inc/connect.php';

$user_sql = mysqli_query($connection, "SELECT * FROM users WHERE name='$username'");


$user_resultsarr = mysqli_fetch_assoc($user_sql);

echo json_encode($user_resultsarr);

?>


</body>

</html>
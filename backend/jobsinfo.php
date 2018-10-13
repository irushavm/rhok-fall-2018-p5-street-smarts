<?php

//session_start();
//error_reporting(E_ALL);
//$username = $_SESSION['username']; 


include 'inc/connect.php';

$user_sql = mysqli_query($connection, "SELECT * FROM jobs");


$user_resultsarr = mysqli_fetch_assoc($user_sql);



echo json_encode($user_resultsarr);

?>





</body>

</html>
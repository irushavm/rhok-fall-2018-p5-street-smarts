<?php

	session_start();

include 'inc/connect.php';

$username = $_POST['username'];


$sql = mysqli_query($connection, "SELECT * FROM users WHERE name='$username'");


$password = 'password';

while ($rows = mysqli_fetch_assoc($sql)) {

	if (password_verify($_POST['post_password'], $rows[$password])) {

	$_SESSION['username'] = "$username";

	header("Location: userinfo.php");

	exit;

	}

	else {
include 'template/header.php';
    echo 'Invalid password. <br>';
include 'template/footer.php';
	} 


}



?>








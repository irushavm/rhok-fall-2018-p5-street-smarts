<?php

include 'inc/connect.php';

//salt and cost

$options = [

    'cost' => 9,

    'salt' => mcrypt_create_iv(22, MCRYPT_DEV_URANDOM),

];

$username = $_POST['username'];

$password = password_hash($_POST['password'], PASSWORD_BCRYPT, $options);


$sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";

	$hash = password_hash($_POST['password'], PASSWORD_BCRYPT, $options);



	if (password_verify($_POST['password'], $hash)) {

		mysqli_query($connection, $sql);

		header("Location: usersettings.php");

		} 

	else {


	}





?>
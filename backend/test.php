<?php

session_start();
error_reporting(E_ALL);
$username = $_SESSION['username']; 

include 'connect.php';

$user_sql = mysqli_query($connection, "SELECT * FROM users WHERE user='$username'");


$user_resultsarr = mysqli_fetch_assoc($user_sql);

$user_email = $user_resultsarr["email"];
$user_agency = $user_resultsarr["agency"];
$user_role = $user_resultsarr["role"];
$user_canViewJobs = $user_resultsarr["canViewJobs"];
$user_canViewCandidates = $user_resultsarr["canViewCandidates"];
$user_phone = $user_resultsarr["phone"];
$user_lastOnline = $user_resultsarr["lastOnline"];
$user_userStatus = $user_resultsarr["userStatus"];
$user_relationships = $user_resultsarr["relationships"];
$user_contract = $user_resultsarr["contract"];
$user_favourites = $user_resultsarr["favourites"];
 
echo " email " + $user_email;
echo " agency " + $user_agency;
echo " role " + $user_role;
echo " canViewJobs " + $user_canViewJobs;
echo " canViewCandidates " + $user_canViewCandidates;
echo " phone " + $user_phone;
echo " lastOnline " + $user_lastOnline;
echo " userStatus " + $user_userStatus;
echo " relationships " + $user_relationships;
echo " contract " + $user_contract;
echo " favourites " + $user_favourites;


?>





</body>

</html>
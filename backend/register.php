
<?php
include 'template/header.php';

include 'inc/connect.php';


?>


<form action="registered.php" method="post">

Username: <input type="text" name="username"><br>

Password: <input type="password" name="password"><br>

Do you agree to our Terms of Service? <input type='checkbox' name='tos'>

<input type="submit">

</form>

<?php

include 'template/footer.php'

?>

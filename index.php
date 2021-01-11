<?php
if(isset($_POST['submit'])){
move_uploaded_file($_FILES['file']['tmp_name'],"uploads/".$_FILES['file']['name']);
}
?>
<!doctype html>
<html>
<body>
<form method="post" enctype="multipart/form-data">
<input type="file" name"file">
<input type="submit" name="submit" value="upload">
</form>
</body>
</html>

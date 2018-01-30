<?php
  $password = 'foobar';
  $guess = file_get_contents('php://input');

  exit($guess);
?>
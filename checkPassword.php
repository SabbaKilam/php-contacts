<?php
  $password = 'foobar';
  $guess = file_get_contents('php://input');
  $access = '';

  if( $guess === $password){
    $access = 'ok';
  }
  exit($access);
?>
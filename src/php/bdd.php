<?php
  try {
      $pdo = new \PDO("mysql:dbname=utilisateur;port=3306;host=http:localhost:8080","root", "root");
      $pdo->setAttribute( \PDO::ATTR_ERRMODE , \PDO::ERRMODE_EXCEPTION);
      $pdo->exec("SET NAMES UTF8");

    } catch(\Error $e) {
      die("One two three ...");

    }
?>
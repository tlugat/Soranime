<?php 
  if(isset($_POST['confirm_register'])) {
    if(isset($_POST['email']) AND isset($_POST['username']) AND isset($_POST['password']) AND isset($_POST['password_confirm'])) {
      if(!empty($_POST['email']) AND !empty($_POST['username']) AND !empty($_POST['password']) AND !empty($_POST["password_confirm"])) {
        $email = trim(htmlspecialchars($_POST['email'])); //protège des caractères speciaux
        $username = trim(htmlspecialchars($_POST['username'])); //protège des caractères speciaux
        $password = trim(htmlspecialchars($_POST['password'])); //protège des caractères speciaux
        $password_confirm = trim(htmlspecialchars($_POST['password_confirm'])); //protège des caractères speciaux
        if(strlen($email) <= 255) {
          if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
            if(strlen($username) >= 3 AND strlen($username) <= 255) {
              if(strlen($password) >= 8 AND strlen($password) <= 100) { 
                if($password == $password_confirm) {
                  //criptation du mot de passe 
                  $password_cripted = sha1($password);
                  $req = $bdd->prepare("INSERT INTO users (username, password, email) VALUES (?,?,?)");
                  $req->execute(array($username, $email, $password_cripted));
                  $error = "Votre compte à été créé avec succès";
                } else { 
                  echo($error = "vos mots de passe ne correspondent pas");
                } 
              } else {
                echo($error = "Votre mot de passe doit comporter entre 8 et 100 caractères");
              } 
            } else {
              echo($error = "Votre pseudo doit comporter entre 3 et 255 caractères");
            }
          }else echo($error = "Votre email à un format incorrect");
        } else {
          echo($error = "Votre email doit faire moins de 255 caractères");
        }
      } else {
        echo($error = "veuillez remplir tous les champs");
      }
    }
  }
?>
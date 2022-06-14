<?php
//On inclut le fichier config.php qui va servir à se connecter à la base de donnée.
include 'config.php';

//Ce code va récupérer les données de la table "user".
    $listUser = $dbh->prepare('SELECT * FROM `user`');
    $listUser->execute();
        while($User = $listUser->fetch(PDO::FETCH_ASSOC)){
            $data[] = array("prenom" => $User['prenom'], "nom" => $User['nom']);
        }
        //On fait un echo qui va afficher les données en format json.
    echo json_encode($data);
?>
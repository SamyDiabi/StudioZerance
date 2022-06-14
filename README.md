# StudioZerance

# Principe de l’application

Un utilisateur arrive sur l'application et démarre un jeu. L'application lui affiche un prénom l'utilisateur doit en trouver le genre (masculin / féminin). 
L'utilisateur démarre avec un capital de 10 points. S’il se trompe de genre, il perd un point. S’il trouve le bon, il gagne un point. 
Si l'utilisateur arrive à 0 points, il a perdu. S’il arrive à 20 points, il a gagné.


# Tutoriel 

Etape 1 : 
  
  Installer le fichier bdd.sql dans votre base de donnée. Il se situe dans le dossier "StudioZerance" puis "Sql".

Etape 2 :
  
  Télécharger le dossier StudioZerance puis mettez le sur votre serveur ftp.
  
Etape 3 :

  Modifier le fichier "Config.php" qui se trouve dans le dossier "assets" puis "php".
  
Attention :
  Il y a des URL qui faudra sûrement modifier, comme par exemple celui qui se trouve dans assets->js->script.js
  

# Information complémentaire

  Comment fonctionne mon code ?
Je récupère les noms & prénoms qui se trouvent dans la base de données, puis je les affiche. À chaque réponse de l'utilisateur, on vérifie si c'est un prénom masculin ou féminin en s'aidant de l'api "https://api.genderize.io".
Si la réponse est correcte, on gagne un point. Lorsqu'on arrive à 20, on a gagné. 

Le temps passé : 1 jour


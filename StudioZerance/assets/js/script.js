$(document).ready(function() {
  //On récupère les données pour les mettres dans la variable json.
  $.ajax({
      type: "GET",
      url: "http://localhost:8888/StudioZerance/assets/php/listUser.php",
      dataType: "html",
      success: function(data) {
          json = JSON.parse(data)
          //On définit notre score à 10.
          var score = 10;

          var app = new Vue({
              el: "#app",
              data: {
                  //questionIndex sélectionne le premier nom qui sera affiché sur notre page.
                  questionIndex: Math.floor((Math.random() * 200) + 1)
              },

              methods: {
                  //La methode restart va servir à recommencer lorsqu'on aura terminé le test.
                  restart: function() {
                      //questionIndex sélectionne le premier nom qui sera affiché sur notre page.
                      this.questionIndex = Math.floor((Math.random() * 200) + 1);
                      //Ce code permet de faire réapparaitre les questions et cacher la div resultat
                      document.getElementById("resultat").style.display = "none";
                      document.getElementById("question").style.display = "block";
                      //On redefini le score à 1O
                      score = 10;
                  },
                  //La methode choiceFunctionH va servir à savoir si le resultat de l'utilisateur est bon.
                  choiceFunctionH: function() {
                      //On récupère le nom afficher.
                      var name = json[this.questionIndex].prenom;
                      this.questionIndex++;
                      //Cette partie va nous servir à savoir si le prénom est masculin ou féminin.
                      $.ajax({
                          url: 'https://api.genderize.io',
                          type: 'GET',
                          data: {
                              name: name
                          },
                          success: function(response) {
                              //Si le résultat est "Male", on gagne un point.
                              if (response.gender == 'male') {
                                  score++;
                                  console.log(score);
                                  //Si le résultat est égale à 20, on affiche la div resultat + un message.
                                  if (score === 20) {
                                      document.getElementById("resultat").style.display = "block";
                                      document.getElementById("question").style.display = "none";
                                      document.getElementById('text-resultat').innerHTML += "Bravoooooooooo p'tit bg !! Vous avez réussi le test.";
                                      confetti();
                                  }
                                  //Si le résultat est "Female", on perd un point.
                              } else if (response.gender == 'female') {
                                  score--;
                                  console.log(score);
                                  //Si le résultat est égale à 0, on affiche la div resultat + un message.
                                  if (score === 0) {
                                      document.getElementById("resultat").style.display = "block";
                                      document.getElementById("question").style.display = "none";
                                      document.getElementById('text-resultat').innerHTML += "Aie aie aie !! Vous avez loupé le test...";
                                  }
                              }
                          }
                      })
                  },
                  //La methode choiceFunctionF va servir à savoir si le resultat de l'utilisateur est bon.
                  choiceFunctionF: function() {
                      //On récupère le nom afficher.
                      var name = json[this.questionIndex].prenom;
                      this.questionIndex++;
                      //Cette partie va nous servir à savoir si le prénom est masculin ou féminin.
                      $.ajax({
                          url: 'https://api.genderize.io',
                          type: 'GET',
                          data: {
                              name: name
                          },
                          success: function(response) {
                              //Si le résultat est "Female", on gagne un point.
                              if (response.gender == 'female') {
                                  score++;
                                  console.log(score);
                                  //Si le résultat est égale à 20, on affiche la div resultat + un message.
                                  if (score === 20) {
                                      document.getElementById("resultat").style.display = "block";
                                      document.getElementById("question").style.display = "none";
                                      document.getElementById('text-resultat').innerHTML += "Bravoooooooooo p'tit bg !! Vous avez réussi le test.";
                                      confetti();
                                  }
                                  //Si le résultat est "Male", on perd un point.
                              } else if (response.gender == 'male') {
                                  score--;
                                  console.log(score);
                                  //Si le résultat est égale à 0, on affiche la div resultat + un message.
                                  if (score === 0) {
                                      document.getElementById("resultat").style.display = "block";
                                      document.getElementById("question").style.display = "none";
                                      document.getElementById('text-resultat').innerHTML += "Aie aie aie !! Vous avez loupé le test...";
                                  }
                              }
                          }
                      })
                  },
              }
          });
      }
  });

});
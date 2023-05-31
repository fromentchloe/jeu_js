$(document).ready(function() {
  
let scores, roundScore, activePlayer, gamePlaying;
    // Déclaration des variables pour les scores, le score du tour, le joueur actif et le statut du jeu
let playerNames = [];
    // Déclaration du tableau pour les noms des joueurs
  
    $('.btn-new').click(function() {
      // Lorsque le bouton "Nouvelle partie" est cliqué
      getPlayerNames();
      // Appelle la fonction getPlayerNames()
    });
  
    $('.btn-replay').click(function() {
         // Lorsque le bouton "rejouer" est cliqué
        init();
        // Appelle la fonction init()
    });

    function getPlayerNames() {
      // Fonction pour obtenir les noms des joueurs
      const player1 = prompt("Entrez le nom du joueur 1:");
      // Demande le nom du joueur 1 via une boîte de dialogue
      const player2 = prompt("Entrez le nom du joueur 2:");
      // Demande le nom du joueur 2 via une boîte de dialogue
      playerNames = [player1, player2];
      // Stocke les noms des joueurs dans le tableau playerNames
      init();
      // Initialise le jeu en appelant la fonction init()
    }
  
    $('.btn-roll').click(function() {
      // Lorsque le bouton "Lancer" est cliqué
      if (gamePlaying) {
        // Si le jeu est en cours
        const dice = Math.floor(Math.random() * 6) + 1;
        // Génère un nombre aléatoire entre 1 et 6 pour simuler le lancer de dé
        const diceDOM = $('.dice');
        // Sélectionne l'élément avec la classe "dice"
        diceDOM.attr('src', 'image/' + dice + '.png');
        // Change l'image du dé selon le résultat du lancer
        diceDOM.css('display', 'block');
        // Affiche le dé
  
        if (dice !== 1) {
          // Si le résultat du lancer n'est pas égal à 1
          roundScore += dice;
          // Ajoute le résultat du lancer au score du tour
          $('#current-' + activePlayer).text(roundScore);
          // Met à jour l'affichage du score du tour pour le joueur actif
        } else {
          // Si le résultat du lancer est égal à 1
          $('#egal').text('Perdu ! le lancé est égal à 1, tu perds tous tes points, Joueur suivant !').fadeIn().fadeOut(3000);
          // Affiche un message d'erreur temporaire pour indiquer que le joueur a perdu tous ses points du tour
          setTimeout(nextPlayer, 500);
          // Passe au joueur suivant après un délai de 3 secondes
        }
      }
    });
  
    $('.btn-hold').click(function() {
      // Lorsque le bouton "Hold" est cliqué
      if (gamePlaying) {
        // Si le jeu est en cours
        scores[activePlayer] += roundScore;
        // Ajoute le score du tour au score global du joueur actif
        $('#score-' + activePlayer).text(scores[activePlayer]);
        // Met à jour l'affichage du score global du joueur actif
  
        if (scores[activePlayer] >= 100) {
          // Si le score global du joueur actif atteint ou dépasse 10
          gamePlaying = false;
          // Définit le statut du jeu à false pour indiquer que le jeu est terminé
          $('#message').text(playerNames[activePlayer] + ' a gagné le jeu !');
          // Affiche un message indiquant que le joueur actif a gagné
        } else {
          // Si le score global du joueur actif est inférieur à 10
          nextPlayer();
          // Passe au joueur suivant
        }
      }
    });
  
    function nextPlayer() {
      // Fonction pour passer au joueur suivant
      roundScore = 0;
      // Réinitialise le score du tour à 0
      $('#current-' + activePlayer).text('0');
      // Met à jour l'affichage du score du tour à 0 pour le joueur actif
      activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
      // Passe au joueur suivant (0 devient 1 et 1 devient 0)
  
      $('.player-0-panel').toggleClass('active');
      $('.player-1-panel').toggleClass('active');
      // Alterne la classe "active" entre les classes des joueurs pour indiquer le joueur actif
  

      // Cache le dé
      $('#message').text('');
      // Efface le message
    }
  
    function init() {
      // Fonction d'initialisation du jeu
      scores = [0, 0];
      // Initialise les scores globaux des joueurs à 0
      roundScore = 0;
      // Initialise le score du tour à 0
      activePlayer = 0;
      // Définit le joueur actif à 0 (premier joueur)
      gamePlaying = true;
      // Définit le statut du jeu à true (en cours)
  
   
  
      $('#score-0').text('0');
      $('#score-1').text('0');
      // Met à jour l'affichage des scores globaux à 0 pour les deux joueurs
  
      $('#current-0').text('0');
      $('#current-1').text('0');
      // Met à jour l'affichage des scores du tour à 0 pour les deux joueurs
  
      $('#name-0').text(playerNames[0]);
      $('#name-1').text(playerNames[1]);
      // Met à jour les noms des joueurs dans l'affichage
  
      $('.player-0-panel').removeClass('winner');
      $('.player-1-panel').removeClass('winner');
      // Supprime la classe "winner" des classes des joueurs pour enlever la surbrillance
  
      $('.player-0-panel').removeClass('active');
      $('.player-1-panel').removeClass('active');
      // Supprime la classe "active" des classes des joueurs pour enlever la mise en évidence
      $('.player-0-panel').addClass('active');
      // Ajoute la classe "active" à la classe du premier joueur pour le mettre en surbrillance
      $('#message').text('');
      // Efface le message
    }
  });
  
    // Au chargement de la page
    $('#fade').show();
    // Affiche l'élément avec l'id "fade"
    $('#fade_rules').hide();
    // Cache l'élément avec l'id "fade_rules"
  
  
  $('#fade_rules').click(function() {
    // Au clic sur le bouton "Afficher les règles"
    $('#fade_rules').hide();
    // Cache le bouton "Afficher les règles"
    $('#hide_rules').show();
    // Affiche le bouton "Masquer les règles"
    $('#fade').show();
    // Affiche l'élément avec l'id "fade" (les règles)
  });
  
  $('#hide_rules').click(function() {
    // Au clic sur le bouton "Masquer les règles"
    $('#hide_rules').hide();
    // Cache le bouton "Masquer les règles"
    $('#fade_rules').show();
    // Affiche le bouton "Afficher les règles"
    $('#fade').hide();
    // Cache l'élément avec l'id "fade" (les règles)
  });








  var canvas = document.getElementById("diceCanvas");
  var ctx = canvas.getContext("2d");

  // Dessiner le dé
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "black";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(canvas.width / 4, canvas.height / 4, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(canvas.width / 4 * 3, canvas.height / 4 * 3, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(canvas.width / 4 * 3, canvas.height / 4, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(canvas.width / 4, canvas.height / 4 * 3, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(canvas.width / 4, canvas.height / 2, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(canvas.width / 4 * 3, canvas.height / 2, 5, 0, Math.PI * 2);
  ctx.fill();
 
  

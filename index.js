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
      // obtennir les noms des joueurs
      const player1 = prompt("Entrez le nom du joueur 1:");
      // Demande le nom du joueur 1 
      const player2 = prompt("Entrez le nom du joueur 2:");
      // Demande le nom du joueur 2 
      playerNames = [player1, player2];
      // Stocke les noms des joueurs dans le tableau playerNames
      init();
      // Initialise le jeu 
    }
  
    $('.btn-roll').click(function() {
      // Lorsque "Lancer" est cliqué
      if (gamePlaying) {
      
        const dice = Math.floor(Math.random() * 6) + 1;
        // Génère un nombre aléatoire entre 1 et 6
        const diceDOM = $('.dice');
        // Sélectionne l'élément "dice"
        diceDOM.attr('src', 'image/' + dice + '.png');
        // Change l'image du dé 
        diceDOM.css('display', 'block');
        // Affiche le dé
  
        if (dice !== 1) {
          // Si le résultat du lancer n'est pas égal à 1
          roundScore += dice;
          // Ajoute le résultat du lzncer au score du tour
          $('#current-' + activePlayer).text(roundScore);
          // Met à jour l'affichage du score du tour pour le joueur
        } else {
          // Si le résultat du lancer est égal à 1
          $('#egal').text('Perdu ! le lancé est égal à 1, tu perds tous tes points, Joueur suivant !').fadeIn().fadeOut(3000);
          // Affiche un message d'erreur temporaire pour indiquer que le joueur a perdu tous ses temporaire
          setTimeout(nextPlayer, 500);
          // Passe au joueur suivant après un délai
        }
      }
    });
  
    $('.btn-hold').click(function() {
      // Lorsque le bouton est cliqué
      if (gamePlaying) {
    
        scores[activePlayer] += roundScore;
        // Ajoute le score du tour au score global du joueur
        $('#score-' + activePlayer).text(scores[activePlayer]);
        // Met à jour l'affichage du score global du joueur actif
  
        if (scores[activePlayer] >= 100) {
          // Si le score global du joueur actif atteint ou dépasse 100
          gamePlaying = false;
          // Définit le statut du jeu à false pour indiquer que le jeu est terminé
          $('#message').text(playerNames[activePlayer] + ' a gagné le jeu !');
          // Affiche un message le joueur actif a gagné
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
      // Passe au joueur suivant (0 devcient 1 et 1 devient 0)
  
      $('.player-0-panel').toggleClass('active');
      $('.player-1-panel').toggleClass('active');
      // Alterne la classe "active" entre les classes des joueurs pour indiquer le joueur actif
  

      // Cache le dé
      $('#message').text('');
      // Efface le message
    }
  
    function init() {
      // Fonction d'initialsation du jeu
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
      // Met à jour l'affichage des scores globaux à 0 
  
      $('#current-0').text('0');
      $('#current-1').text('0');
      // Met à jour l'affichage des scores du tour à 0 
  
      $('#name-0').text(playerNames[0]);
      $('#name-1').text(playerNames[1]);
      // Met à jour les noms des joueurs dans l'affichage
  
      $('.player-0-panel').removeClass('winner');
      $('.player-1-panel').removeClass('winner');
      // Supprime la classe "winner" des classes des joueurs 
  
      $('.player-0-panel').removeClass('active');
      $('.player-1-panel').removeClass('active');
      // Supprime la classe "active" des classes des joueurs 
      $('.player-0-panel').addClass('active');
      // Ajoute la classe "active" à la classe du premier joueur 
      $('#message').text('');
      // Efface le message
    }
  });
  
    // Au chargement de la page
    $('#fade').show();
    // Affiche  "fade"
    $('#fade_rules').hide();
    // Cache  "fade_rules"
  
  
  $('#fade_rules').click(function() {
    // Au clic "Afficher les règles"
    $('#fade_rules').hide();
    // Cache "Afficher les règles"
    $('#hide_rules').show();
    // Affiche"Masquer les règles"
    $('#fade').show();
    // Affiche  (les règles)
  });
  
  $('#hide_rules').click(function() {
    // Au clic sur "Masqué les règles"
    $('#hide_rules').hide();
    // Cache "Masquer les règles"
    $('#fade_rules').show();
    // Affiche "Afficher les règles"
    $('#fade').hide();
    // Cache (les règles)
  });
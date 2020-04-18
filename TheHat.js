function render_game_builder(thehat) {
    const game_builder = document.getElementById('game_builder')

    if (thehat.current_round == 0) {
        const word_list = document.getElementById('word_list')
        for (const word of thehat.words) {
            item = document.createElement('li')
            item.textContent = word
            word_list.appendChild(item)
        }
    }
    else {
        game_builder.style.display = "none";
    }
}

function render_game_state(thehat) {
    const scoreboard = document.getElementById('scoreboard')
    Object.keys(thehat.scoreboard).forEach(function(player_id) {
        row = document.createElement('tr')

        player = document.createElement('td')
        player.textContent = player_id
        score = document.createElement('td')
        score.textContent = thehat.scoreboard[player_id]
        
        row.appendChild(player)
        row.appendChild(score)

        scoreboard.appendChild(row)
    });

    const explainer = document.getElementById('explainer')
    explainer.textContent = thehat.current_move.explainer
    
    const explainee = document.getElementById('explainee')
    explainee.textContent = document.current_move.explainee
}

function render_current_move(thehat) {
    
}

function render_hat(thehat) {
    render_game_builder(thehat)
    render_current_move(thehat)
    render_game_state(thehat)
}

hatid = window.location.pathname
query = firebase.firestore().collection('hats').doc(hatid);

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      document.getElementById('uid').textContent = user.uid
    }
  });

query.onSnapshot((snapshot) => {
    document.getElementById('hatid').textContent = snapshot.id
    render_hat(snapshot.data())
  });

function do_word_guessed() {

}

function do_next_move() {

}

function do_next_round() {

}
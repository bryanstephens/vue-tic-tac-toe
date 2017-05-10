const state = {
  playerTurn: 'X',
  wins: {
    'X': 0,
    'O': 0
  },
  currentMoves: createEmptyMovesArray(3)
}

const getters = {
  currentPlayerTurn: state => {
    return state.playerTurn
  },
  currentScore: state => {
    return state.wins
  },
  selectedMoves: state => {
    return state.currentMoves
  }
}

const actions = {
  makeMove: (context, move) => {
    if (!context.state.currentMoves[move.x][move.y]) {
      move.player = context.state.playerTurn
      context.commit('SET_MOVE_SELECTION', move)
      context.commit('TOGGLE_PLAYER_TURN')
    }
  }
}

const mutations = {
  TOGGLE_PLAYER_TURN: (state) => {
    if (state.playerTurn === 'X') {
      state.playerTurn = 'O'
    } else {
      state.playerTurn = 'X'
    }
  },
  SET_MOVE_SELECTION: (state, move) => {
    state.currentMoves[move.x].splice(move.y, 1, move.player)
  },
  RESET_MOVES: (state) => {
    state.currentMoves = createEmptyMovesArray(3)
  },
  INCREMENT_PLAYER_WIN: (state, player) => {
    state.wins.player++
  },
  RESET_SCORE: (state) => {
    state.wins = {
      'X': 0,
      'O': 0
    }
  }
}

const module = {
  state,
  getters,
  actions,
  mutations
}

function createEmptyMovesArray (size) {
  var arr = new Array(size)
  for (var i = 0; i < size; i++) {
    arr[i] = new Array(size)
  }
  return arr
}

export default module

<template>
  <div class="game-container">
    <game-board v-bind:moves="moves" v-bind:player="player" v-on:chosen="processPlayerSelection" v-bind:gameOver="gameOver"></game-board>
    <score-board v-bind:player="player" v-bind:wins="winsMap" v-on:resetGame="resetGame" v-on:resetScore="resetScore"></score-board>
  </div>
</template>

<style>
.game-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>

<script>
import GameBoard from './game-board'
import ScoreBoard from './score-board'

export default {
  components: {
    'game-board': GameBoard,
    'score-board': ScoreBoard
  },
  data () {
    return this.getDefaultData()
  },
  methods: {
    getDefaultData () {
      return {
        player: 'X',
        winsMap: {
          'X': 0,
          'O': 0
        },
        moves: this.createEmptyMovesArray(3)
      }
    },
    createEmptyMovesArray (size) {
      var arr = new Array(size)
      for (var i = 0; i < size; i++) {
        arr[i] = new Array(size)
      }
      return arr
    },
    processPlayerSelection (value) {
      this.moves[value.y].splice(value.x, 1, this.player)
      if (this.player === 'X') {
        this.player = 'O'
      } else {
        this.player = 'X'
      }
    },
    resetGame () {
      var resetScoreData = this.getDefaultData()
      resetScoreData.winsMap = this.$data.winsMap
      Object.assign(this.$data, resetScoreData)
    },
    resetScore () {
      var resetScoreData = this.getDefaultData()
      resetScoreData.player = this.$data.player
      resetScoreData.gameOver = this.$data.gameOver
      resetScoreData.moves = this.$data.moves
      Object.assign(this.$data, resetScoreData)
    }
  }
}
</script>

<template>
  <div class="game-container">
    <game-board v-bind:moves="moves" v-bind:player="player" v-on:chosen="processPlayerSelection"></game-board>
    <score-board v-bind:player="player" v-bind:wins="winsMap"></score-board>
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
    return {
      player: 'X',
      winsMap: {
        1: 0,
        2: 0
      },
      moves: this.createBoardSelections(3)
    }
  },
  methods: {
    createBoardSelections (size) {
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
    }
  }
}
</script>

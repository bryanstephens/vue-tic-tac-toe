<template>
<div class="score-board">
  <h3>Player's turn: {{currentPlayerTurn}}</h3>
  <h4 v-for="(numberWins, player) in currentScore">Player {{player}} wins: {{numberWins}}</h4>
  <button @click="RESET_MOVES">Reset Game</button>
  <button @click="RESET_SCORE">Clear Score</button>
</div>
</template>

<script>
import {
  mapMutations,
  mapGetters
} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'currentPlayerTurn',
      'currentScore'
    ])
  },
  methods: {
    ...mapMutations([
      'RESET_MOVES',
      'RESET_SCORE'
    ])
  }
}
</script>

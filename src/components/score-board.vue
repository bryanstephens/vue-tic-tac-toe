<template>
  <div class="score-board">
    <h3>Player's turn: {{player}}</h3>
    <h4 v-for="(numberWins, key) in wins">Player {{key}} wins: {{numberWins}}</h4>
    <button @click="triggerResetGame">Reset Game</button>
    <button @click="triggerResetScore">Clear Score</button>
  </div>
</template>

<script>
export default {
  props: {
    player: {
      type: String,
      required: true
    },
    wins: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    triggerResetGame () {
      this.$emit('resetGame')
    },
    triggerResetScore () {
      this.$emit('resetScore')
    }
  }
}
</script>

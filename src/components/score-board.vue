<template>
  <div class="score-board">
    <h3>Player's turn: {{player}}</h3>
    <h4 v-for="(numberWins, key) in wins">Player {{key}} wins: {{numberWins}}</h4>
  </div>
</template>

<script>
export default {
  props: {
    player: {
      type: Number,
      required: true
    },
    wins: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>

<template>
  <div class="game-board">
    <template v-for="(moveRow, rowKey, rowIndex) in moves">
      <div v-for="(moveCol, colKey, colIndex) in moveRow" @click="playerSelect" class="grid-square" v-bind:data-x="colKey" v-bind:data-y="rowKey">
        {{moves[rowKey][colKey]}}
      </div>
    </template>
  </div>
</template>

<style>
.game-board {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 500px;
  height: 500px;
}

.grid-square {
  font-size: 40px;
  border: 1px solid black;
  flex-basis: calc(100% * (1/3) - 2px);
  width: calc(100% * (1/3));
  height: calc(100% * (1/3));
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<script>
export default {
  methods: {
    playerSelect (event) {
      var selectedGridSquare = event.target
      if (!selectedGridSquare.classList.contains('chosen')) {
        selectedGridSquare.classList.add('chosen')
        var x = event.target.dataset.x
        var y = event.target.dataset.y
        this.$emit('chosen', {'x': x, 'y': y})
      }
    }
  },
  props: {
    player: {
      type: Number,
      required: true
    },
    moves: {
      type: Array
    }
  },
  data () {
    return {}
  }
}
</script>

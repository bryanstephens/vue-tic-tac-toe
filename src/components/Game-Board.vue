<template>
  <div class="game">
    <span>Player turn: {{player}}</span>
    <div class="game-board">
      <template v-for="(selectionRow, rowKey, rowIndex) in selections">
        <div v-for="(selectionColumn, colKey, colIndex) in selectionRow" @click="playerSelect" class="grid-square" v-bind:data-x="rowKey" v-bind:data-y="colKey">
          {{selections[rowKey][colKey]}}
        </div>
      </template>
      <!-- <div @click="playerSelect" class="grid-square" data-grid-position="br">
        {{selections['br']}}
      </div> -->
    </div>
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
      var x = event.target.dataset.x
      var y = event.target.dataset.y
      var successfulMove = this.setMove(x, y, this.player)
      if (successfulMove) {
        if (this.player === 1) {
          this.player = 2
        } else {
          this.player = 1
        }
      }
    },
    createBoardSelections (size) {
      var arr = new Array(size)
      for (var i = 0; i < size; i++) {
        arr[i] = new Array(size)
      }
      return arr
    },
    setMove (x, y, player) {
      if (!this.selections[x][y]) {
        this.selections[x][y] = player
        return true
      } else {
        return false
      }
    }

  },
  props: {
    initialSize: {
      type: Number,
      default: 3
    }
  },
  data () {
    return {
      player: 1,
      size: this.initialSize,
      selections: this.createBoardSelections(this.initialSize)
    }
  }
}

</script>

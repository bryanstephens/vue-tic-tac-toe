<template>
  <table cellspacing="0">
    <tr v-for="(moveRow, rowKey, rowIndex) in moves">
      <td v-for="(moveCol, colKey, colIndex) in moveRow" @click="playerSelect" v-bind:data-x="colKey" v-bind:data-y="rowKey">{{moves[rowKey][colKey]}}</td>
    </tr>
  </table>
</template>

<style>
table {
  width: 500px;
  height: 500px;
}
td {
  border: 3px solid black;
  margin: 0px;
  padding: 0px;
  width: calc(100% * (1/3));
  height: calc(100% * (1/3));
  font-size: 100px;
  white-space: pre-wrap;
  text-align: center;
}

td:first-child {
  border-left: 0px;
}

td:last-child {
  border-right: 0px;
}

tr:first-child td {
  border-top: 0px;
}

tr:last-child td {
  border-bottom: 0px;
}
</style>

<script>
export default {
  methods: {
    playerSelect (event) {
      console.log(event.target)
      var x = event.target.dataset.x
      var y = event.target.dataset.y
      if (!this.moves[y][x]) {
        this.$emit('chosen', {'x': x, 'y': y})
      }
    }
  },
  props: {
    player: {
      type: String,
      required: true
    },
    moves: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>

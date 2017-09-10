<template>
<table cellspacing="0">
  <tr v-for="(moveRow, rowKey, rowIndex) in moves">
    <td v-for="(moveCol, colKey, colIndex) in moveRow" @click="playerSelect(colKey, rowKey)">{{moves[colKey][rowKey]}}</td>
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
import {
  mapGetters
} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      moves: 'selectedMoves'
    })
  },
  methods: {
    playerSelect: function (x, y) {
      this.$store.dispatch('makeMove', {
        'x': x,
        'y': y
      })
    }
  }
}
</script>

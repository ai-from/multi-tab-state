<template>
  <div>
    <h1>Coords</h1>
    X: {{ coords.x }}<br/>
    Y: {{ coords.y }}
  </div>
</template>

<script>
export default {
  name: 'CoordsComponent',
  computed: {
    coords() {
      return this.$store.getters.getCoords
    }
  },
  mounted() {
    window.addEventListener('mousemove', e => {
      this.$store.commit('setCoords', {x: e.clientX, y: e.clientY})
    })
  }
}
</script>

<style>

</style>
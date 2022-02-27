<template>
  <div>
    <div class="game-container">
      <div id="game"></div>
    </div>
    VN chapter: {{chapter}} / {{JSON.stringify(cards)}}
  </div>
</template>

<script>

export default {
  props: ['chapter', 'cards'],
  data: () => ({
    //
  }),
  mounted() {
    setTimeout(() => {
      if (window.EthyriaVN) {
        window.EthyriaVN.startChapter('game', 1);
      }
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.game-container {
  width:600px;
}
</style>

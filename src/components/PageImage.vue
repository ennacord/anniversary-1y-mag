<template>
  <div>
    image: {{file}} / {{JSON.stringify(cards)}}
  </div>
</template>

<script>

export default {
  props: ['file', 'cards'],
  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>

</style>

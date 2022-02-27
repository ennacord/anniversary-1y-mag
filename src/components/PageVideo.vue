<template>
  <div>
    youtube video {{embed}} / {{JSON.stringify(cards)}}
  </div>
</template>

<script>

export default {
  props: ['embed', 'cards'],
  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>

</style>

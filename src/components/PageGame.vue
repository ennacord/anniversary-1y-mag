<template>
  <div>
    VN chapter: {{chapter}} / {{JSON.stringify(cards)}}
  </div>
</template>

<script>

export default {
  props: ['chapter', 'cards'],
  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>

</style>

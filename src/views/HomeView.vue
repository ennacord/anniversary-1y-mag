<template>
  <div>
    <div v-for="(page, index) in MagazineData.pages" :key="`page-${index}`" class="page">
      <div v-if="page && page.type === 'cover'">
        <PageCover/>
      </div>
      <div v-if="page && page.type === 'credits'">
        <PageCredits/>
      </div>
      <div v-if="page && page.type === 'game'">
        <PageGame :chapter="page.chapter" :cards="page.cards" />
      </div>
      <div v-if="page && page.type === 'image'">
        <PageImage :file="page.image" :cards="page.cards" />
      </div>
      <div v-if="page && page.type === 'video'">
        <PageVideo :embed="page.video" :cards="page.cards" />
      </div>
    </div>
  </div>
</template>

<script>
import MagazineData from '@/data/magazine';
import PageCover from '@/components/PageCover.vue';
import PageCredits from '@/components/PageCredits.vue';
import PageGame from '@/components/PageGame.vue';
import PageImage from '@/components/PageImage.vue';
import PageVideo from '@/components/PageVideo.vue';

export default {
  name: 'HomeView',
  data: () => ({
    MagazineData,
  }),
  components: {
    PageCover,
    PageCredits,
    PageGame,
    PageImage,
    PageVideo,
  },
};
</script>

<template>
  <div class="vertical-carousel">
    <div class="carousel-container" ref="carouselContainer">
      <div
        class="carousel-item"
        v-for="(item, index) in 1"
        :key="index"
        :style="{
          transform: `translateY(-${currentIndex * itemHeight}px) translateY(${
            index * itemHeight
          }px)`,
          transition: `transform 0.5s ease ${index * 0.5}s`,
        }"
      >
        <img
          :src="require(`~/assets/images/${index + 1}.png`)"
          :alt="`image-${index + 1}`"
          class="m-auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [require(`~/assets/images/${1}.png`)],
      currentIndex: 0,
      itemHeight: 0,
    };
  },
  mounted() {
    this.itemHeight =
      this.$refs.carouselContainer.querySelector(".carousel-item").offsetHeight;

    // this.startCarousel();
  },
  methods: {
    startCarousel() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
      }, 3000);
    },
  },
};
</script>

<style scoped>
.vertical-carousel {
  overflow: hidden;
}

.carousel-container {
  transition: transform 0.5s ease;
}

.carousel-item {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: white;
  /* background-color: #3498db; */
}
</style>

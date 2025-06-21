<template>
  <Transition name="fade">
    <button
      v-show="showButton"
      @click="scrollToTop"
      class="back-to-top"
      aria-label="Back to top"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4L4 12H9V20H15V12H20L12 4Z"
          fill="currentColor"
        />
      </svg>
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showButton = ref(false);

const checkScroll = () => {
  showButton.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0, 188, 212, 0.9);
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 188, 212, 0.3);
  min-width: 50px;
  min-height: 50px;
}

.back-to-top:hover {
  background: rgba(0, 188, 212, 1);
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(0, 188, 212, 0.4);
}

.back-to-top:active {
  transform: translateY(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

/* Mobile Optimizations */
@media (max-width: 480px) {
  .back-to-top {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
    min-width: 45px;
    min-height: 45px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .back-to-top {
    bottom: 25px;
    right: 25px;
    width: 48px;
    height: 48px;
    min-width: 48px;
    min-height: 48px;
  }
}

/* Landscape orientation on mobile */
@media (max-width: 768px) and (orientation: landscape) {
  .back-to-top {
    bottom: 15px;
    right: 15px;
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
  }
}

/* High DPI displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .back-to-top {
    box-shadow: 0 2px 10px rgba(0, 188, 212, 0.3);
  }
}
</style> 
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar from './components/navbar.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Gallery from './components/Gallery.vue';
import Contact from './components/Contact.vue';
import BackToTop from './components/BackToTop.vue';
import { createScrollAnimations, cleanupAnimations } from './utils/animations';
import { RouterLink } from 'vue-router';

const canvasRef = ref(null);
const gridSize = 48;
const baseColor = 'rgba(255,255,255,0.025)';
const glowColor = 'rgba(0,188,212,0.08)';
const glowRadius = 60; // px, for grid line highlight
const radialGlowRadius = 80; // px, for the soft glow
const radialGlowColor = 'rgba(0,188,212,0.10)'; // subtle, not too bright

function drawGrid(ctx, width, height, pointer) {
  ctx.clearRect(0, 0, width, height);
  // Draw all grid lines in base color
  ctx.strokeStyle = baseColor;
  ctx.lineWidth = 1;
  for (let x = 0; x <= width; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 0; y <= height; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  // If pointer exists, draw only the subtle radial glow at the intersection
  if (pointer) {
    // Find the closest grid intersection to the pointer
    const px = Math.round(pointer.x / gridSize) * gridSize;
    const py = Math.round(pointer.y / gridSize) * gridSize;
    if (
      px >= 0 && px <= width &&
      py >= 0 && py <= height
    ) {
      // Draw a subtle radial glow at the intersection
      const grad = ctx.createRadialGradient(px, py, 0, px, py, radialGlowRadius);
      grad.addColorStop(0, radialGlowColor);
      grad.addColorStop(1, 'rgba(0,188,212,0)');
      ctx.beginPath();
      ctx.arc(px, py, radialGlowRadius, 0, 2 * Math.PI);
      ctx.fillStyle = grad;
      ctx.globalAlpha = 1;
      ctx.fill();
    }
  }
}

const pointer = ref(null);
let animationFrame;

function renderGrid() {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const dpr = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  drawGrid(ctx, width, height, pointer.value);
}

function onPointerMove(e) {
  pointer.value = { x: e.clientX, y: e.clientY };
  cancelAnimationFrame(animationFrame);
  animationFrame = requestAnimationFrame(renderGrid);
}
function onResize() {
  cancelAnimationFrame(animationFrame);
  animationFrame = requestAnimationFrame(renderGrid);
}

onMounted(() => {
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('resize', onResize);
  renderGrid();
  
  // Initialize GSAP scroll animations
  createScrollAnimations();
});
onUnmounted(() => {
  window.removeEventListener('mousemove', onPointerMove);
  window.removeEventListener('resize', onResize);
  cancelAnimationFrame(animationFrame);
  
  // Clean up GSAP animations
  cleanupAnimations();
});
</script>

<template>
  <canvas ref="canvasRef" class="dynamic-grid-bg"></canvas>
  <main>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Gallery />
    <Contact />
    <BackToTop />

    <!-- <RouterView /> -->
  </main>
</template>

<style scoped>
.dynamic-grid-bg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
}
main {
  position: relative;
  z-index: 3;
}
</style>

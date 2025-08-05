<template>
  <section class="hello-hero">
    <div class="hello-content">
      <h1>
        <span class="wave">👋</span>
        Welcome to <span class="gradient-text">My Portfolio</span>
      </h1>
      <p>
        Explore my projects, skills, and creative journey.<br>
        Let's build something <span class="highlight">amazing</span> together!
      </p>
      <router-link to="/" class="cta-btn">Get Started</router-link>
    </div>
    <div class="hello-bg-shapes">
      <div class="circle"></div>
      <div class="triangle"></div>
      <div class="square"></div>
    </div>
  </section>
</template>

<script setup>
// No script logic needed for this simple welcome page
</script>

<style scoped>
.hello-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #0fd9ff 0%, #0e1e2b 100%);
  position: relative;
  overflow: hidden;
}
.hello-content {
  z-index: 2;
  background: rgba(20, 30, 40, 0.85);
  padding: 3rem 4rem;
  border-radius: 2rem;
  box-shadow: 0 8px 32px 0 rgba(0,188,212,0.18);
  text-align: center;
  max-width: 480px;
}
.hello-content h1 {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 1.2rem;
  color: #fff;
  letter-spacing: 1px;
}
.wave {
  font-size: 2.2rem;
  animation: wave 2s infinite;
  display: inline-block;
  transform-origin: 70% 70%;
}
@keyframes wave {
  0%, 60%, 100% { transform: rotate(0deg);}
  10% { transform: rotate(18deg);}
  20% { transform: rotate(-12deg);}
  30% { transform: rotate(18deg);}
  40% { transform: rotate(-8deg);}
  50% { transform: rotate(12deg);}
}
.gradient-text {
  background: linear-gradient(90deg, #00bcd4, #0fd9ff, #fff 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hello-content p {
  color: #c8f7fa;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}
.highlight {
  color: #00e6b8;
  font-weight: bold;
  text-shadow: 0 0 8px #00bcd4;
}
.cta-btn {
  display: inline-block;
  padding: 0.9rem 2.2rem;
  background: linear-gradient(90deg, #00bcd4, #0fd9ff);
  color: #0e1e2b;
  font-weight: 700;
  border-radius: 2rem;
  font-size: 1.1rem;
  text-decoration: none;
  box-shadow: 0 4px 16px 0 rgba(0,188,212,0.18);
  transition: background 0.2s, color 0.2s, transform 0.2s;
}
.cta-btn:hover {
  background: linear-gradient(90deg, #0fd9ff, #00bcd4);
  color: #fff;
  transform: translateY(-2px) scale(1.04);
}
.hello-bg-shapes {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}
.circle {
  position: absolute;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: radial-gradient(circle, #00bcd4 0%, #0fd9ff 80%, transparent 100%);
  top: 10%;
  left: 5%;
  opacity: 0.18;
  filter: blur(2px);
  animation: float1 8s ease-in-out infinite alternate;
}
.triangle {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 110px solid transparent;
  border-right: 110px solid transparent;
  border-bottom: 180px solid #00e6b8;
  bottom: 8%;
  right: 10%;
  opacity: 0.13;
  filter: blur(1.5px);
  animation: float2 10s ease-in-out infinite alternate;
}
.square {
  position: absolute;
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #fff 0%, #0fd9ff 100%);
  top: 60%;
  left: 70%;
  opacity: 0.09;
  border-radius: 1.2rem;
  filter: blur(1.2px);
  animation: float3 7s ease-in-out infinite alternate;
}
@keyframes float1 {
  0% { transform: translateY(0) scale(1);}
  100% { transform: translateY(40px) scale(1.08);}
}
@keyframes float2 {
  0% { transform: translateY(0) rotate(-6deg);}
  100% { transform: translateY(-30px) rotate(6deg);}
}
@keyframes float3 {
    0% { transform: translateY(0) scale(1);}
    100% { transform: translateY(-24px) scale(1.1);}
  }
</style>
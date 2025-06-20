<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
  // Close mobile menu if open
  isOpen.value = false;
};
</script>

<template>
  <nav class="navbar">
    <div class="navbar__logo" @click="scrollToSection('home')">My Portfolio</div>
    <button class="navbar__toggle" @click="toggleMenu" aria-label="Toggle navigation">
      <span :class="{'open': isOpen}"></span>
      <span :class="{'open': isOpen}"></span>
      <span :class="{'open': isOpen}"></span>
    </button>
    <ul :class="['navbar__links', { 'navbar__links--open': isOpen }]">
      <li><a @click="scrollToSection('home')" class="nav-link">Home</a></li>
      <li><a @click="scrollToSection('about')" class="nav-link">About</a></li>
      <li><a @click="scrollToSection('projects')" class="nav-link">Projects</a></li>
      <li><a @click="scrollToSection('gallery')" class="nav-link">Gallery</a></li>
      <li><a @click="scrollToSection('contact')" class="nav-link">Contact</a></li>
    </ul>
  </nav>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap');

.navbar {
  font-family: 'Fira Code', monospace;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: rgba(10, 14, 23, 0.7);
  color: #fff;
  position: relative;
  z-index: 10;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.navbar__logo {
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
  transition: color 0.2s;
}

.navbar__logo:hover {
  color: #00bcd4;
}

.navbar__links {
  display: flex;
  gap: 2rem;
  list-style: none;
  transition: right 0.3s ease, top 0.3s ease;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s;
  cursor: pointer;
}

.nav-link:hover {
  color: #00bcd4;
}

.navbar__toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 20;
  width: 40px;
  height: 40px;
}

.navbar__toggle span {
  display: block;
  width: 25px;
  height: 3px;
  background: #fff;
  border-radius: 2px;
  transition: all 0.3s;
  position: relative;
}

.navbar__toggle span.open:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.navbar__toggle span.open:nth-child(2) {
  opacity: 0;
}
.navbar__toggle span.open:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem 0.5rem;
  }
  .navbar__logo {
    font-size: 1.1rem;
    margin-left: 0.5rem;
  }
  .navbar__links {
    position: absolute;
    top: -300px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(10, 14, 23, 0.85);
    width: 100vw;
    padding: 1rem 0;
    gap: 1.5rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    transition: top 0.3s ease;
    align-items: center;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  .navbar__links--open {
    top: 50px;
  }
  .navbar__toggle {
    display: flex;
  }
}
</style>

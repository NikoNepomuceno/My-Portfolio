<script setup>
import { ref, watch } from 'vue';
import { gsap } from 'gsap';

const isOpen = ref(false);
let tl;

watch(isOpen, (newValue) => {
  if (newValue) {
    // Animate in
    gsap.set('.navbar__links', { display: 'flex' });
    tl = gsap.timeline()
      .to('.navbar__links', {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.inOut',
        onStart: () => {
          gsap.set('.navbar__links', { pointerEvents: 'auto' });
        }
      })
      .fromTo('.nav-link', {
        y: 20,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
        ease: 'power2.out',
      });
  } else {
    // Animate out
    if (tl) {
      tl.reverse().then(() => {
        gsap.set('.navbar__links', { pointerEvents: 'none' });
      });
    }
  }
});

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
  if (isOpen.value) {
    isOpen.value = false;
  }
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
    <ul class="navbar__links">
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
  padding: var(--spacing-md) var(--spacing-lg);
  background: rgba(10, 14, 23, 0.7);
  color: #fff;
  position: relative;
  z-index: 10;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.navbar__logo {
  font-size: var(--font-size-xl);
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
  gap: var(--spacing-lg);
  list-style: none;
  transition: right 0.3s ease, top 0.3s ease;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: var(--font-size-base);
  transition: color 0.2s;
  cursor: pointer;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: 0.25rem;
}

.nav-link:hover {
  color: #00bcd4;
  background: rgba(0, 188, 212, 0.1);
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
  width: 44px;
  height: 44px;
  padding: var(--spacing-xs);
  border-radius: 0.25rem;
  transition: background 0.2s;
}

.navbar__toggle:hover {
  background: rgba(255, 255, 255, 0.1);
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

/* Mobile Styles */
@media (max-width: 768px) {
  .navbar {
    padding: var(--spacing-sm) var(--spacing-md);
  }
  
  .navbar__logo {
    font-size: var(--font-size-lg);
    z-index: 101;
    color: #fff;
  }
  
  .navbar__links {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #0A0E17;
    display: none; /* Initially hidden, managed by GSAP */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-lg);
    
    opacity: 0;
    pointer-events: none;
    z-index: 100;
  }

  .navbar__links .nav-link {
    font-size: var(--font-size-xl);
    padding: var(--spacing-sm) var(--spacing-md);
    min-height: 44px;
    display: flex;
    align-items: center;
  }
  
  .navbar__toggle {
    display: flex;
    z-index: 101;
  }

  .navbar__toggle span.open {
    background: #fff;
  }
}

/* Tablet Styles */
@media (min-width: 769px) and (max-width: 1024px) {
  .navbar {
    padding: var(--spacing-md) var(--spacing-lg);
  }
  
  .navbar__logo {
    font-size: var(--font-size-lg);
  }
  
  .navbar__links {
    gap: var(--spacing-md);
  }
  
  .nav-link {
    font-size: var(--font-size-sm);
    padding: var(--spacing-xs) var(--spacing-sm);
  }
}

/* Small Mobile */
@media (max-width: 480px) {
  .navbar {
    padding: var(--spacing-sm);
  }
  
  .navbar__logo {
    display: none;
  }
  
  .navbar__links .nav-link {
    font-size: var(--font-size-lg);
    padding: var(--spacing-md);
  }
  
  .navbar__toggle {
    width: 40px;
    height: 40px;
  }
  
  .navbar__toggle span {
    width: 22px;
    height: 2px;
  }
}

/* Landscape orientation on mobile */
@media (max-width: 768px) and (orientation: landscape) {
  .navbar__links {
    gap: var(--spacing-md);
  }
  
  .navbar__links .nav-link {
    font-size: var(--font-size-lg);
    padding: var(--spacing-sm);
  }
}
</style>

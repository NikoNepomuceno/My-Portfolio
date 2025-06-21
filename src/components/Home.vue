<template>
  <section id="home" class="hero">
    <h1 ref="titleRef" class="hero__title">Hi, I'm Nikolai Nepomuceno</h1>
    <h2 ref="subtitleRef" class="hero__subtitle">Backend Developer</h2>
    <p ref="descRef" class="hero__desc">
      Developing the core infrastructure and unseen mechanisms <br />
      that drive dynamic web and mobile applications.
    </p>
    <div ref="actionsRef" class="hero__actions">
      <button @click="scrollToSection('projects')" class="hero__btn hero__btn--primary">View My Work</button>
      <button @click="scrollToSection('contact')" class="hero__btn hero__btn--secondary">Get In Touch</button>
    </div>
    <div ref="socialsRef" class="hero__socials">
      <a href="#" class="hero__icon" aria-label="Instagram">
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
      </a>
      <a href="#" class="hero__icon" aria-label="LinkedIn">
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="16" y1="8" x2="16" y2="16"/><line x1="8" y1="8" x2="8" y2="16"/><line x1="12" y1="12" x2="12" y2="16"/></svg>
      </a>
      <a href="#" class="hero__icon" aria-label="Email">
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
      </a>
    </div>
    <div ref="arrowRef" class="hero__down-arrow">
      <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="8 12 16 20 24 12"/></svg>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { textReveal, floating } from '../utils/animations';

const titleRef = ref(null);
const subtitleRef = ref(null);
const descRef = ref(null);
const actionsRef = ref(null);
const socialsRef = ref(null);
const arrowRef = ref(null);

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

onMounted(() => {
    const tl = gsap.timeline();

    if (titleRef.value) {
        tl.from(titleRef.value, { autoAlpha: 0, duration: 0.01, onComplete: () => {
            if(titleRef.value) {
                tl.add(textReveal(titleRef.value), 0);
            }
        }}, 0.5);
    }

    tl.from(subtitleRef.value, { duration: 0.8, scale: 0.5, autoAlpha: 0, ease: 'back.out(2)' }, 1)
      .from(descRef.value, { duration: 0.8, scale: 0.5, autoAlpha: 0, ease: 'back.out(2)' }, 1.2)
      .from(actionsRef.value.children, { duration: 0.5, scale: 0.5, autoAlpha: 0, stagger: 0.15, ease: 'back.out(1.7)' }, 1.4)
      .from(socialsRef.value.children, { duration: 0.5, scale: 0.5, autoAlpha: 0, stagger: 0.15, ease: 'back.out(1.7)' }, 1.6)
      .from(arrowRef.value, { duration: 1, y: -30, autoAlpha: 0, ease: 'bounce.out' }, 2)
      .add(() => {
          if (arrowRef.value) {
              floating(arrowRef.value);
          }
      });
});
</script>

<style scoped>
.hero {
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  padding: var(--spacing-2xl) var(--spacing-md) var(--spacing-md) var(--spacing-md);
}

.hero__title {
  font-size: var(--font-size-4xl);
  font-weight: 800;
  margin-bottom: var(--spacing-xs);
  letter-spacing: 2px;
  text-shadow: 0 4px 32px rgba(0,0,0,0.4);
  line-height: 1.1;
}

.hero__subtitle {
  font-size: var(--font-size-xl);
  font-weight: 400;
  margin-bottom: var(--spacing-lg);
  color: #e0e0e0;
}

.hero__desc {
  font-size: var(--font-size-lg);
  color: #b0b8c9;
  margin-bottom: var(--spacing-xl);
  line-height: 1.5;
  max-width: 600px;
}

.hero__actions {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
  justify-content: center;
}

.hero__btn {
  font-size: var(--font-size-base);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: 0.5rem;
  border: 1px solid #222b3a;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s, color 0.2s, border 0.2s;
  min-height: 44px;
  min-width: 120px;
}

.hero__btn--primary {
  background: #111216;
  color: #fff;
  border: 1.5px solid #222b3a;
  box-shadow: 0 2px 12px rgba(0,0,0,0.12);
}

.hero__btn--primary:hover {
  background: #181f2a;
  color: #00bcd4;
}

.hero__btn--secondary {
  background: transparent;
  color: #fff;
  border: 1.5px solid #222b3a;
}

.hero__btn--secondary:hover {
  background: #181f2a;
  color: #00bcd4;
}

.hero__socials {
  display: flex;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  justify-content: center;
  flex-wrap: wrap;
}

.hero__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 0.5rem;
  background: rgba(10, 14, 23, 0.5);
  border: 1px solid #222b3a;
  color: #b0b8c9;
  font-size: 1.7rem;
  transition: background 0.2s, color 0.2s;
  min-width: 56px;
  min-height: 56px;
}

.hero__icon:hover {
  background: #181f2a;
  color: #00bcd4;
}

.hero__down-arrow {
  margin-top: var(--spacing-md);
  color: #b0b8c9;
}

/* Mobile Optimizations */
@media (max-width: 480px) {
  .hero {
    padding: var(--spacing-xl) var(--spacing-sm) var(--spacing-sm) var(--spacing-sm);
    min-height: 90vh;
  }
  
  .hero__title {
    font-size: var(--font-size-3xl);
    letter-spacing: 1px;
  }
  
  .hero__subtitle {
    font-size: var(--font-size-lg);
  }
  
  .hero__desc {
    font-size: var(--font-size-base);
    padding: 0 var(--spacing-sm);
  }
  
  .hero__actions {
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-sm);
  }
  
  .hero__btn {
    width: 100%;
    max-width: 280px;
  }
  
  .hero__socials {
    gap: var(--spacing-md);
  }
  
  .hero__icon {
    width: 48px;
    height: 48px;
    min-width: 48px;
    min-height: 48px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .hero__title {
    font-size: var(--font-size-3xl);
  }
  
  .hero__subtitle {
    font-size: var(--font-size-lg);
  }
  
  .hero__desc {
    font-size: var(--font-size-base);
  }
  
  .hero__actions {
    gap: var(--spacing-sm);
  }
  
  .hero__btn {
    padding: var(--spacing-sm) var(--spacing-md);
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .hero__title {
    font-size: var(--font-size-4xl);
  }
  
  .hero__subtitle {
    font-size: var(--font-size-xl);
  }
  
  .hero__desc {
    font-size: var(--font-size-lg);
  }
}

/* Landscape orientation on mobile */
@media (max-width: 768px) and (orientation: landscape) {
  .hero {
    min-height: 100vh;
    padding: var(--spacing-lg) var(--spacing-md);
  }
  
  .hero__title {
    font-size: var(--font-size-2xl);
  }
  
  .hero__subtitle {
    font-size: var(--font-size-base);
  }
  
  .hero__desc {
    font-size: var(--font-size-sm);
    margin-bottom: var(--spacing-md);
  }
  
  .hero__actions {
    margin-bottom: var(--spacing-md);
  }
  
  .hero__socials {
    margin-bottom: var(--spacing-md);
  }
}
</style> 
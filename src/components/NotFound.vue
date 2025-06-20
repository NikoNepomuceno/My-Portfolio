<template>
  <section class="not-found">
    <div class="not-found__container">
      <div class="not-found__content">
        <h1 class="not-found__title">404</h1>
        <h2 class="not-found__subtitle">Page Not Found</h2>
        <p class="not-found__description">
          Oops! The page you're looking for doesn't exist. 
          It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <div class="not-found__actions">
          <router-link to="/" class="not-found__btn not-found__btn--primary">
            Go Home
          </router-link>
          <button @click="goBack" class="not-found__btn not-found__btn--secondary">
            Go Back
          </button>
        </div>
      </div>
      <div class="not-found__illustration">
        <svg width="200" height="200" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="100" cy="100" r="80"/>
          <line x1="60" y1="60" x2="140" y2="140"/>
          <line x1="140" y1="60" x2="60" y2="140"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.push('/')
  }
}
</script>

<style scoped>
.not-found {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  color: #fff;
}

.not-found__container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}

.not-found__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.not-found__title {
  font-size: 8rem;
  font-weight: 900;
  color: #00bcd4;
  text-shadow: 0 4px 32px rgba(0, 188, 212, 0.3);
  margin: 0;
  line-height: 1;
}

.not-found__subtitle {
  font-size: 2.5rem;
  font-weight: 700;
  color: #e0e0e0;
  margin: 0;
}

.not-found__description {
  font-size: 1.2rem;
  color: #b0b8c9;
  line-height: 1.6;
  max-width: 500px;
  margin: 0;
}

.not-found__actions {
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.not-found__btn {
  font-size: 1.1rem;
  padding: 0.9rem 2.2rem;
  border-radius: 0.5rem;
  border: 1px solid #222b3a;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s, color 0.2s, border 0.2s;
  text-decoration: none;
  display: inline-block;
}

.not-found__btn--primary {
  background: #111216;
  color: #fff;
  border: 1.5px solid #222b3a;
  box-shadow: 0 2px 12px rgba(0,0,0,0.12);
}

.not-found__btn--primary:hover {
  background: #181f2a;
  color: #00bcd4;
  border-color: #00bcd4;
}

.not-found__btn--secondary {
  background: transparent;
  color: #fff;
  border: 1.5px solid #222b3a;
}

.not-found__btn--secondary:hover {
  background: #181f2a;
  color: #00bcd4;
  border-color: #00bcd4;
}

.not-found__illustration {
  color: #00bcd4;
  opacity: 0.3;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@media (max-width: 768px) {
  .not-found__title {
    font-size: 6rem;
  }
  
  .not-found__subtitle {
    font-size: 2rem;
  }
  
  .not-found__description {
    font-size: 1rem;
  }
  
  .not-found__actions {
    flex-direction: column;
    align-items: center;
  }
  
  .not-found__btn {
    width: 200px;
  }
}
</style> 
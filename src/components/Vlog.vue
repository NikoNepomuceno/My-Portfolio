<template>
  <section id="vlog" class="vlog">
    <div class="vlog__container">
      <h1 class="vlog__title">OJT Vlog</h1>
      <p class="vlog__subtitle">A behind-the-scenes look at my on-the-job training experience</p>
      
      <div class="vlog__content">
        <div class="vlog__video-container">
          <video 
            :src="vlogVideo"
            class="vlog__video"
            controls
            preload="metadata"
            @error="handleVideoError"
          >
            Your browser does not support the video tag.
          </video>
          
          <div class="vlog__placeholder" style="display: none;">
            <svg width="64" height="64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21,15 16,10 5,21"/>
            </svg>
            <p>Video could not be loaded</p>
          </div>
        </div>
        
        <div class="vlog__info">
          <h2>My OJT Journey</h2>
          <p>This vlog captures the highlights and learning experiences from my on-the-job training. It showcases the practical skills I've developed and the real-world challenges I've encountered during my internship.</p>
          
          <div class="vlog__details">
            <div class="vlog__detail-item">
              <h3>Duration</h3>
              <p>Full OJT Experience</p>
            </div>
            <div class="vlog__detail-item">
              <h3>Category</h3>
              <p>On-the-Job Training</p>
            </div>
            <div class="vlog__detail-item">
              <h3>Focus</h3>
              <p>Professional Development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const vlogVideo = ref('/videos/vlog/Vlog.mp4')

const handleVideoError = (event) => {
  // Fallback to placeholder if video fails to load
  event.target.style.display = 'none'
  const placeholder = event.target.parentElement.querySelector('.vlog__placeholder')
  if (placeholder) {
    placeholder.style.display = 'flex'
  }
}
</script>

<style scoped>
.vlog {
  min-height: 80vh;
  padding: var(--spacing-2xl) var(--spacing-md);
  color: #fff;
}

.vlog__container {
  max-width: 1200px;
  margin: 0 auto;
}

.vlog__title {
  font-size: var(--font-size-4xl);
  font-weight: 800;
  margin-bottom: var(--spacing-sm);
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 0 4px 32px rgba(0,0,0,0.4);
}

.vlog__subtitle {
  font-size: var(--font-size-lg);
  color: #b0b8c9;
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.vlog__content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  align-items: center;
}

.vlog__video-container {
  position: relative;
  background: linear-gradient(135deg, #1a1f2e 0%, #2a2f3e 100%);
  border-radius: 0.5rem;
  overflow: hidden;
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16/9;
}

.vlog__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.vlog__placeholder {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #00bcd4;
  opacity: 0.7;
  gap: var(--spacing-sm);
}

.vlog__placeholder p {
  color: #b0b8c9;
  font-size: var(--font-size-base);
}

.vlog__info {
  padding: var(--spacing-lg);
  background: rgba(10, 14, 23, 0.3);
  border: 1px solid rgba(34, 43, 58, 0.5);
  border-radius: 0.5rem;
  width: 100%;
  max-width: 800px;
  text-align: center;
}

.vlog__info h2 {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-sm);
  color: #b0b8c9;
  font-weight: 500;
}

.vlog__info p {
  color: #b0b8c9;
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
  font-size: var(--font-size-sm);
}

.vlog__details {
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.vlog__detail-item {
  padding: var(--spacing-xs) var(--spacing-sm);
  background: rgba(0, 188, 212, 0.05);
  border: 1px solid rgba(0, 188, 212, 0.1);
  border-radius: 0.25rem;
  font-size: var(--font-size-xs);
}

.vlog__detail-item h3 {
  font-size: var(--font-size-xs);
  color: #00bcd4;
  margin-bottom: var(--spacing-xs);
  font-weight: 500;
}

.vlog__detail-item p {
  font-size: var(--font-size-xs);
  color: #b0b8c9;
  margin: 0;
}

/* Mobile Optimizations */
@media (max-width: 768px) {
  .vlog {
    padding: var(--spacing-xl) var(--spacing-sm);
  }
  
  .vlog__title {
    font-size: var(--font-size-3xl);
  }
  
  .vlog__subtitle {
    font-size: var(--font-size-base);
    margin-bottom: var(--spacing-lg);
  }
  
  .vlog__content {
    gap: var(--spacing-lg);
  }
  
  .vlog__video-container {
    max-width: 100%;
  }
  
  .vlog__info {
    padding: var(--spacing-md);
    max-width: 100%;
  }
  
  .vlog__info h2 {
    font-size: var(--font-size-base);
  }
  
  .vlog__info p {
    font-size: var(--font-size-xs);
  }
  
  .vlog__details {
    gap: var(--spacing-sm);
  }
  
  .vlog__detail-item {
    padding: var(--spacing-xs);
  }
  
  .vlog__detail-item h3 {
    font-size: var(--font-size-xs);
  }
  
  .vlog__detail-item p {
    font-size: var(--font-size-xs);
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .vlog__title {
    font-size: var(--font-size-3xl);
  }
  
  .vlog__content {
    gap: var(--spacing-lg);
  }
  
  .vlog__info h2 {
    font-size: var(--font-size-base);
  }
}

/* Landscape orientation on mobile */
@media (max-width: 768px) and (orientation: landscape) {
  .vlog {
    padding: var(--spacing-lg) var(--spacing-md);
  }
  
  .vlog__title {
    font-size: var(--font-size-2xl);
  }
  
  .vlog__subtitle {
    font-size: var(--font-size-sm);
    margin-bottom: var(--spacing-md);
  }
  
  .vlog__content {
    gap: var(--spacing-md);
  }
  
  .vlog__video-container {
    max-width: 100%;
  }
  
  .vlog__info {
    padding: var(--spacing-sm);
    max-width: 100%;
  }
  
  .vlog__info h2 {
    font-size: var(--font-size-sm);
    margin-bottom: var(--spacing-xs);
  }
  
  .vlog__info p {
    font-size: var(--font-size-xs);
    margin-bottom: var(--spacing-sm);
  }
}
</style> 
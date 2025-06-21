<template>
  <section id="gallery" class="gallery">
    <div class="gallery__container">
      <h1 class="gallery__title">Gallery</h1>
      <p class="gallery__subtitle">A visual showcase of my work and projects</p>
      
      <div class="gallery__filters">
        <button 
          v-for="filter in filters" 
          :key="filter.id"
          @click="activeFilter = filter.id"
          :class="['filter-btn', { 'filter-btn--active': activeFilter === filter.id }]"
        >
          {{ filter.name }}
        </button>
      </div>

      <div class="gallery__grid">
        <div 
          v-for="item in filteredItems" 
          :key="item.id"
          class="gallery__item"
          @click="openModal(item)"
        >
          <div class="gallery__image">
            <div class="gallery__placeholder">
              <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21,15 16,10 5,21"/>
              </svg>
            </div>
            <div class="gallery__overlay">
              <div class="gallery__overlay-content">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
                <span class="gallery__category">{{ item.category }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="selectedItem" class="modal" @click="closeModal">
      <div class="modal__content" @click.stop>
        <button class="modal__close" @click="closeModal">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <div class="modal__image">
          <div class="modal__placeholder">
            <svg width="64" height="64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21,15 16,10 5,21"/>
            </svg>
          </div>
        </div>
        <div class="modal__info">
          <h2>{{ selectedItem.title }}</h2>
          <p>{{ selectedItem.description }}</p>
          <div class="modal__details">
            <span class="modal__category">{{ selectedItem.category }}</span>
            <span class="modal__date">{{ selectedItem.date }}</span>
          </div>
          <div class="modal__tech" v-if="selectedItem.technologies">
            <span class="tech-tag" v-for="tech in selectedItem.technologies" :key="tech">{{ tech }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('all')
const selectedItem = ref(null)

const filters = [
  { id: 'all', name: 'All' },
  { id: 'web', name: 'Web Apps' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'api', name: 'APIs' },
  { id: 'database', name: 'Databases' }
]

const galleryItems = ref([
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "Admin dashboard for managing products, orders, and analytics",
    category: "web",
    date: "2024",
    technologies: ["Vue.js", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Secure mobile application for banking operations",
    category: "mobile",
    date: "2023",
    technologies: ["React Native", "Node.js", "PostgreSQL"]
  },
  {
    id: 3,
    title: "RESTful API Gateway",
    description: "Microservices API gateway with authentication and rate limiting",
    category: "api",
    date: "2024",
    technologies: ["Express.js", "Redis", "JWT"]
  },
  {
    id: 4,
    title: "Database Architecture",
    description: "Scalable database design for high-traffic applications",
    category: "database",
    date: "2023",
    technologies: ["PostgreSQL", "Redis", "MongoDB"]
  },
  {
    id: 5,
    title: "Task Management System",
    description: "Collaborative project management platform",
    category: "web",
    date: "2024",
    technologies: ["Vue.js", "Django", "PostgreSQL"]
  },
  {
    id: 6,
    title: "Real-time Chat API",
    description: "WebSocket-based messaging system with encryption",
    category: "api",
    date: "2023",
    technologies: ["Socket.io", "Node.js", "MongoDB"]
  },
  {
    id: 7,
    title: "Inventory Management",
    description: "Comprehensive inventory tracking and reporting system",
    category: "web",
    date: "2024",
    technologies: ["React", "Spring Boot", "MySQL"]
  },
  {
    id: 8,
    title: "Fitness Tracking App",
    description: "Mobile app for tracking workouts and health metrics",
    category: "mobile",
    date: "2023",
    technologies: ["Flutter", "Firebase", "SQLite"]
  }
])

const filteredItems = computed(() => {
  if (activeFilter.value === 'all') {
    return galleryItems.value
  }
  return galleryItems.value.filter(item => item.category === activeFilter.value)
})

const openModal = (item) => {
  selectedItem.value = item
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedItem.value = null
  document.body.style.overflow = 'auto'
}
</script>

<style scoped>
.gallery {
  min-height: 80vh;
  padding: var(--spacing-2xl) var(--spacing-md);
  color: #fff;
}

.gallery__container {
  max-width: 1200px;
  margin: 0 auto;
}

.gallery__title {
  font-size: var(--font-size-4xl);
  font-weight: 800;
  margin-bottom: var(--spacing-sm);
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 0 4px 32px rgba(0,0,0,0.4);
}

.gallery__subtitle {
  font-size: var(--font-size-lg);
  color: #b0b8c9;
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.gallery__filters {
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
}

.filter-btn {
  padding: var(--spacing-xs) var(--spacing-md);
  background: transparent;
  color: #b0b8c9;
  border: 1px solid #222b3a;
  border-radius: 2rem;
  cursor: pointer;
  font-size: var(--font-size-sm);
  transition: all 0.2s;
  min-height: 44px;
}

.filter-btn:hover,
.filter-btn--active {
  background: rgba(0, 188, 212, 0.1);
  color: #00bcd4;
  border-color: #00bcd4;
}

.gallery__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-lg);
}

.gallery__item {
  cursor: pointer;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.2s;
}

.gallery__item:hover {
  transform: translateY(-4px);
}

.gallery__image {
  position: relative;
  height: 220px;
  background: linear-gradient(135deg, #1a1f2e 0%, #2a2f3e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00bcd4;
}

.gallery__placeholder {
  opacity: 0.7;
}

.gallery__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.gallery__item:hover .gallery__overlay {
  opacity: 1;
}

.gallery__overlay-content {
  text-align: center;
  padding: var(--spacing-sm);
}

.gallery__overlay-content h3 {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-xs);
  color: #e0e0e0;
}

.gallery__overlay-content p {
  font-size: var(--font-size-sm);
  color: #b0b8c9;
  margin-bottom: var(--spacing-sm);
  line-height: 1.4;
}

.gallery__category {
  background: rgba(0, 188, 212, 0.2);
  color: #00bcd4;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: 1rem;
  font-size: var(--font-size-xs);
  border: 1px solid rgba(0, 188, 212, 0.3);
}

/* Modal Styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--spacing-lg);
}

.modal__content {
  background: rgba(10, 14, 23, 0.95);
  border: 1px solid #222b3a;
  border-radius: 0.5rem;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modal__close {
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
  background: none;
  border: none;
  color: #b0b8c9;
  cursor: pointer;
  z-index: 10;
  padding: var(--spacing-xs);
  border-radius: 0.3rem;
  transition: all 0.2s;
  min-height: 44px;
  min-width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__close:hover {
  color: #00bcd4;
  background: rgba(0, 188, 212, 0.1);
}

.modal__image {
  height: 300px;
  background: linear-gradient(135deg, #1a1f2e 0%, #2a2f3e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00bcd4;
}

.modal__placeholder {
  opacity: 0.7;
}

.modal__info {
  padding: var(--spacing-lg);
}

.modal__info h2 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-sm);
  color: #e0e0e0;
}

.modal__info p {
  color: #b0b8c9;
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.modal__details {
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  flex-wrap: wrap;
}

.modal__category,
.modal__date {
  background: rgba(0, 188, 212, 0.1);
  color: #00bcd4;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: 1rem;
  font-size: var(--font-size-sm);
  border: 1px solid rgba(0, 188, 212, 0.3);
}

.modal__tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.tech-tag {
  background: rgba(0, 188, 212, 0.1);
  color: #00bcd4;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: 1rem;
  font-size: var(--font-size-xs);
  border: 1px solid rgba(0, 188, 212, 0.3);
}

/* Mobile Optimizations */
@media (max-width: 480px) {
  .gallery {
    padding: var(--spacing-xl) var(--spacing-sm);
  }
  
  .gallery__title {
    font-size: var(--font-size-3xl);
  }
  
  .gallery__subtitle {
    font-size: var(--font-size-base);
    margin-bottom: var(--spacing-lg);
  }
  
  .gallery__filters {
    gap: var(--spacing-xs);
    margin-bottom: var(--spacing-lg);
  }
  
  .filter-btn {
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: var(--font-size-xs);
  }
  
  .gallery__grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  
  .gallery__image {
    height: 180px;
  }
  
  .modal {
    padding: var(--spacing-sm);
  }
  
  .modal__content {
    max-height: 95vh;
  }
  
  .modal__info {
    padding: var(--spacing-md);
  }
  
  .modal__info h2 {
    font-size: var(--font-size-xl);
  }
  
  .modal__image {
    height: 200px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .gallery__title {
    font-size: var(--font-size-3xl);
  }
  
  .gallery__grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  .modal {
    padding: var(--spacing-md);
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .gallery__title {
    font-size: var(--font-size-4xl);
  }
  
  .gallery__grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

/* Landscape orientation on mobile */
@media (max-width: 768px) and (orientation: landscape) {
  .gallery {
    padding: var(--spacing-lg) var(--spacing-md);
  }
  
  .gallery__title {
    font-size: var(--font-size-2xl);
  }
  
  .gallery__subtitle {
    font-size: var(--font-size-sm);
    margin-bottom: var(--spacing-md);
  }
  
  .gallery__filters {
    margin-bottom: var(--spacing-md);
  }
  
  .gallery__grid {
    gap: var(--spacing-sm);
  }
  
  .gallery__image {
    height: 150px;
  }
}
</style> 
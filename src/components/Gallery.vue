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
          v-for="item in paginatedItems" 
          :key="item.id"
          class="gallery__item"
          @click="openModal(item)"
        >
          <div class="gallery__image">
            <!-- Video Element -->
            <video 
              v-if="item.video"
              :src="item.video"
              class="gallery__video"
              preload="metadata"
              @error="handleVideoError"
              muted
            >
              Your browser does not support the video tag.
            </video>
            
            <!-- Image Element -->
            <img 
              v-else
              :src="item.image" 
              :alt="item.title"
              class="gallery__img"
              @error="handleImageError"
            />
            
            <div class="gallery__placeholder" style="display: none;">
              <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21,15 16,10 5,21"/>
              </svg>
            </div>
            
            <!-- Video Play Icon Overlay -->
            <div v-if="item.video" class="gallery__video-overlay">
              <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="5,3 19,12 5,21 5,3"/>
              </svg>
            </div>
            
            <div class="gallery__overlay">
              <div class="gallery__overlay-content">
                <!-- <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p> -->
                <!-- <span class="gallery__category">{{ item.category }}</span> -->
              </div>
            </div>
          </div>
        </div>
        
        <!-- View More / Show Less Button -->
        <div class="gallery__load-more" v-if="hasMoreItems || isShowingAllItems">
          <button 
            v-if="hasMoreItems && !isShowingAllItems"
            class="load-more-btn"
            @click="loadMoreItems"
          >
            <span>View More</span>
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="8" x2="13" y2="8"/>
              <polyline points="10,5 13,8 10,11"/>
            </svg>
          </button>
          
          <button 
            v-if="isShowingAllItems"
            class="load-more-btn load-more-btn--less"
            @click="showLessItems"
          >
            <span>Show Less</span>
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="9" y1="8" x2="3" y2="8"/>
              <polyline points="6,5 3,8 6,11"/>
            </svg>
          </button>
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
          <!-- Video Element in Modal -->
          <video 
            v-if="selectedItem.video"
            :src="selectedItem.video"
            class="modal__video"
            controls
            preload="metadata"
            @error="handleModalVideoError"
          >
            Your browser does not support the video tag.
          </video>
          
          <!-- Image Element in Modal -->
          <img 
            v-else
            :src="selectedItem.image" 
            :alt="selectedItem.title"
            class="modal__img"
            @error="handleModalImageError"
          />
          
          <div class="modal__placeholder" style="display: none;">
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
            <!-- <span class="modal__date">{{ selectedItem.date }}</span> -->
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
import { ref, computed, watch } from 'vue'

const activeFilter = ref('all')
const selectedItem = ref(null)
const itemsPerPage = ref(9) // 3x3 grid
const currentPage = ref(1)

const filters = [
  { id: 'all', name: 'All' },
  { id: 'OJT', name: 'OJT Photos' },
  { id: 'OJT Videos', name: 'OJT Videos' },
  { id: 'OJT Vlog', name: 'OJT Vlog' }
]

const galleryItems = ref([
  {
    id: 1,
    description:"Troubleshooting PC boot-drive",
    category: "OJT",
    image: "/images/gallery/IMG_5827.JPG",
},
  {
    id: 2,
    description:"Troubleshooting PC boot-drive",
    category: "OJT",
    image: "/images/gallery/IMG_5833.jpg",
  },
  {
    id: 3 ,
    description:"Troubleshooting PC boot-drive",
    category: "OJT",
    image: "/images/gallery/IMG_5830.jpg",
  },
  {
    id: 4 ,
    description:"Troubleshooting printer not turning on",
    category: "OJT",
    image: "/images/gallery/IMG_5304.JPG",
  },
  {
    id: 5 ,
    description:"Organizing voter files in the blue book",
    category: "OJT",
    image: "/images/gallery/IMG_5136.jpg",
  },
  {
    id: 6 ,
    description:"Organizing voter files in the blue book",
    category: "OJT",
    image: "/images/gallery/IMG_5137.jpg",
  },
  {
    id: 7 ,
    description:"Organizing voter files in the blue book",
    category: "OJT",
    image: "/images/gallery/IMG_5138.jpg",
  },
  {
    id: 8 ,
    description:"Organizing voter files in the blue book",
    category: "OJT",
    image: "/images/gallery/IMG_5140.jpg",
  },
  {
    id: 9 ,
    description:"Sworn Declarations from the BIR Form 2316 related to teachers' compensation",
    category: "OJT",
    image: "/images/gallery/IMG_5158.jpg",
  },
  {
    id: 10,
    description:"Sworn Declarations from the BIR Form 2316 related to teachers' compensation",
    category: "OJT",
    image: "/images/gallery/IMG_5160.jpg",
  },
  {
    id: 11,
    description:"Maintaining office equipment",
    category: "OJT",
    image: "/images/gallery/IMG_5142.jpg",
  },
  {
    id: 12,
    description:"Data backup and recovery",
    category: "OJT",
    image: "/images/gallery/IMG_5143.jpg",
  },
  {
    id: 13,
    description:"Software installation and updates",
    category: "OJT",
    image: "/images/gallery/IMG_5144.jpg",
  },
  {
    id: 14,
    description:"Hardware troubleshooting",
    category: "OJT",
    image: "/images/gallery/IMG_5145.jpg",
  },
  {
    id: 15,
    description:"System maintenance tasks",
    category: "OJT",
    image: "/images/gallery/IMG_5146.jpg",
  },
  {
    id: 16,
    category: "OJT Videos",
    video: "/videos/IMG_5828.mp4",
  },
  {
    id: 17,
    category: "OJT Videos",
    video: "/videos/IMG_5162.mp4",
  },
  {
    id: 18,
    category: "OJT Videos",
    video: "/videos/IMG_5168.mp4",
  },
  {
    id: 19,
    category: "OJT Videos",
    video: "/videos/IMG_5193.mp4",
  },
  {
    id: 20,
    category: "OJT Videos",
    video: "/videos/IMG_5301.mp4",
  },
])

const filteredItems = computed(() => {
  if (activeFilter.value === 'all') {
    return galleryItems.value
  }
  return galleryItems.value.filter(item => item.category === activeFilter.value)
})

const paginatedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value
  const endIndex = startIndex + itemsPerPage.value
  return filteredItems.value.slice(startIndex, endIndex)
})

const hasMoreItems = computed(() => {
  return paginatedItems.value.length < filteredItems.value.length
})

const isShowingAllItems = computed(() => {
  return currentPage.value > 1
})

const totalPages = computed(() => {
  return Math.ceil(filteredItems.value.length / itemsPerPage.value)
})

const openModal = (item) => {
  selectedItem.value = item
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedItem.value = null
  document.body.style.overflow = 'auto'
}

const handleImageError = (event) => {
  // Fallback to placeholder if image fails to load
  event.target.style.display = 'none'
  const placeholder = event.target.parentElement.querySelector('.gallery__placeholder')
  if (placeholder) {
    placeholder.style.display = 'flex'
  }
}

const handleModalImageError = (event) => {
  // Fallback to placeholder if modal image fails to load
  event.target.style.display = 'none'
  const placeholder = event.target.parentElement.querySelector('.modal__placeholder')
  if (placeholder) {
    placeholder.style.display = 'flex'
  }
}

const handleVideoError = (event) => {
  // Fallback to placeholder if video fails to load
  event.target.style.display = 'none'
  const placeholder = event.target.parentElement.querySelector('.gallery__placeholder')
  if (placeholder) {
    placeholder.style.display = 'flex'
  }
}

const handleModalVideoError = (event) => {
  // Fallback to placeholder if modal video fails to load
  event.target.style.display = 'none'
  const placeholder = event.target.parentElement.querySelector('.modal__placeholder')
  if (placeholder) {
    placeholder.style.display = 'flex'
  }
}

const loadMoreItems = () => {
  if (hasMoreItems.value) {
    currentPage.value++
  }
}

const showLessItems = () => {
  currentPage.value = 1
}

const resetPagination = () => {
  currentPage.value = 1
}

// Reset pagination when filter changes
watch(activeFilter, () => {
  resetPagination()
})
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
  overflow: hidden;
}

.gallery__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery__item:hover .gallery__img {
  transform: scale(1.05);
}

.gallery__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery__item:hover .gallery__video {
  transform: scale(1.05);
}

.gallery__video-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  z-index: 2;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;
  pointer-events: none;
}

.gallery__item:hover .gallery__video-overlay {
  background: rgba(0, 188, 212, 0.2);
  border-color: #00bcd4;
  transform: translate(-50%, -50%) scale(1.1);
}

.gallery__video-overlay svg {
  width: 32px;
  height: 32px;
  fill: #00bcd4;
  stroke: #00bcd4;
  stroke-width: 2;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
  transition: all 0.3s ease;
  position: relative;
  left: 2px;
}

.gallery__item:hover .gallery__video-overlay svg {
  fill: #fff;
  stroke: #fff;
  transform: scale(1.1);
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

/* View More Button Styles */
.gallery__load-more {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: var(--spacing-xl);
  width: 100%;
  grid-column: 1 / -1;
}

.load-more-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-lg);
  background: linear-gradient(135deg, #00bcd4 0%, #0097a7 100%);
  color: #fff;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  font-size: var(--font-size-base);
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 188, 212, 0.3);
  min-height: 48px;
  min-width: 140px;
}

.load-more-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 188, 212, 0.4);
  background: linear-gradient(135deg, #00acc1 0%, #008ba3 100%);
}

.load-more-btn:active {
  transform: translateY(0);
}

.load-more-btn svg {
  transition: transform 0.3s ease;
}

.load-more-btn:hover svg {
  transform: translateX(2px);
}

.load-more-btn--less {
  background: linear-gradient(135deg, #666 0%, #444 100%);
  box-shadow: 0 4px 15px rgba(102, 102, 102, 0.3);
}

.load-more-btn--less:hover {
  background: linear-gradient(135deg, #555 0%, #333 100%);
  box-shadow: 0 6px 20px rgba(102, 102, 102, 0.4);
}

.load-more-btn--less:hover svg {
  transform: translateX(-2px);
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
  height: 450px;
  background: linear-gradient(135deg, #1a1f2e 0%, #2a2f3e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00bcd4;
  overflow: hidden;
}

.modal__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  
  /* Modal Mobile Optimizations */
  .modal {
    padding: var(--spacing-xs);
  }
  
  .modal__content {
    max-height: 98vh;
    max-width: 95vw;
    margin: var(--spacing-xs);
  }
  
  .modal__close {
    top: var(--spacing-xs);
    right: var(--spacing-xs);
    min-height: 40px;
    min-width: 40px;
  }
  
  .modal__image {
    height: 180px;
  }
  
  .modal__info {
    padding: var(--spacing-md);
  }
  
  .modal__info h2 {
    font-size: var(--font-size-lg);
  }
  
  .modal__info p {
    font-size: var(--font-size-sm);
  }
  
  .modal__details {
    gap: var(--spacing-xs);
  }
  
  .modal__category,
  .modal__date {
    font-size: var(--font-size-xs);
    padding: var(--spacing-xs) var(--spacing-sm);
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .gallery__title {
    font-size: var(--font-size-3xl);
  }
  
  .gallery__grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  /* Modal Tablet Optimizations */
  .modal {
    padding: var(--spacing-sm);
  }
  
  .modal__content {
    max-width: 90vw;
    max-height: 92vh;
  }
  
  .modal__image {
    height: 300px;
  }
  
  .modal__info h2 {
    font-size: var(--font-size-xl);
  }
  
  .modal__info p {
    font-size: var(--font-size-base);
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
  
  .load-more-btn {
    padding: var(--spacing-xs) var(--spacing-md);
    font-size: var(--font-size-sm);
    min-height: 44px;
  }
  
  .load-more-btn--less {
    padding: var(--spacing-xs) var(--spacing-md);
    font-size: var(--font-size-sm);
    min-height: 44px;
  }
  
  /* Modal Landscape Optimizations */
  .modal {
    padding: var(--spacing-xs);
  }
  
  .modal__content {
    max-height: 96vh;
    max-width: 98vw;
  }
  
  .modal__image {
    height: 120px;
  }
  
  .modal__info {
    padding: var(--spacing-sm);
  }
  
  .modal__info h2 {
    font-size: var(--font-size-lg);
    margin-bottom: var(--spacing-xs);
  }
  
  .modal__info p {
    font-size: var(--font-size-sm);
    margin-bottom: var(--spacing-sm);
  }
  
  .modal__details {
    margin-bottom: var(--spacing-sm);
  }
}
</style> 
<template>
  <section id="projects" class="projects">
    <div class="projects__container">
      <h1 class="projects__title animate-on-scroll">My Projects</h1>
      <div class="projects__grid scale-animate">
        <div class="project-card" v-for="project in projects" :key="project.id">
          <div class="project-card__image">
            <div class="project-card__placeholder">
              <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
          </div>
          <div class="project-card__content">
            <h3 class="project-card__title">{{ project.title }}</h3>
            <p class="project-card__description">{{ project.description }}</p>
            <div class="project-card__tech">
              <span class="tech-tag" v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
            </div>
            <div class="project-card__links">
              <a :href="project.github" class="project-link" target="_blank" rel="noopener">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Code
              </a>
              <a :href="project.live" class="project-link" target="_blank" rel="noopener" v-if="project.live">
                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15,3 21,3 21,9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    title: "Check-Ease",
    description: "An Online web application to check student attendace and clarance for more seemless and paperless transaction.",
    technologies: ["Vue.js", "PHP", "JWT", "MySQL", "AJAX"],
    github: "https://github.com/yourusername/ecommerce-api",
    // live: "https://api-demo.example.com"
  },
  {
    id: 2,
    title: "Pawnder",
    description: "A centralized web application for reporting Lost & Found pets.",
    technologies: ["Laravel", "MySQL", "Cloudinary", "LiveWire", "AJAX"],
    github: "https://github.com/yourusername/task-manager",
    live: null
  },
  {
    id: 3,
    title: "Gordon College Directory",
    description: "A simple 2D directory of Gordon College.",
    technologies: ["HTML", "CSS", "JavaScript", "Figma", "Canva"],
    github: "https://github.com/yourusername/microservices-platform",
    live: null
  },
        // {
        //   id: 4,
        //   title: "Real-time Chat Application",
        //   description: "A real-time messaging application with WebSocket support, file sharing, and end-to-end encryption for secure communications.",
        //   technologies: ["C#", ".NET Core", "SignalR", "SQL Server", "Azure"],
        //   github: "https://github.com/yourusername/chat-app",
        //   live: "https://chat-demo.example.com"
        // }
])
</script>

<style scoped>
.projects {
  min-height: 80vh;
  padding: var(--spacing-2xl) var(--spacing-md);
  color: #fff;
}

.projects__container {
  max-width: 1200px;
  margin: 0 auto;
}

.projects__title {
  font-size: var(--font-size-4xl);
  font-weight: 800;
  margin-bottom: var(--spacing-xl);
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 0 4px 32px rgba(0,0,0,0.4);
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--spacing-lg);
}

.project-card {
  background: rgba(10, 14, 23, 0.5);
  border: 1px solid #222b3a;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.2s, border-color 0.2s;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: #00bcd4;
}

.project-card__image {
  height: 200px;
  background: linear-gradient(135deg, #1a1f2e 0%, #2a2f3e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00bcd4;
}

.project-card__placeholder {
  opacity: 0.7;
}

.project-card__content {
  padding: var(--spacing-md);
}

.project-card__title {
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
  color: #e0e0e0;
}

.project-card__description {
  color: #b0b8c9;
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
  font-size: var(--font-size-sm);
}

.project-card__tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-md);
}

.tech-tag {
  background: rgba(0, 188, 212, 0.1);
  color: #00bcd4;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: 1rem;
  font-size: var(--font-size-xs);
  border: 1px solid rgba(0, 188, 212, 0.3);
}

.project-card__links {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.project-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: #b0b8c9;
  text-decoration: none;
  font-size: var(--font-size-sm);
  padding: var(--spacing-xs) var(--spacing-sm);
  border: 1px solid #222b3a;
  border-radius: 0.3rem;
  transition: all 0.2s;
  min-height: 44px;
}

.project-link:hover {
  color: #00bcd4;
  border-color: #00bcd4;
  background: rgba(0, 188, 212, 0.1);
}

/* Mobile Optimizations */
@media (max-width: 480px) {
  .projects {
    padding: var(--spacing-xl) var(--spacing-sm);
  }
  
  .projects__title {
    font-size: var(--font-size-3xl);
    margin-bottom: var(--spacing-lg);
  }
  
  .projects__grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  
  .project-card__content {
    padding: var(--spacing-sm);
  }
  
  .project-card__title {
    font-size: var(--font-size-base);
  }
  
  .project-card__description {
    font-size: var(--font-size-xs);
  }
  
  .project-card__links {
    flex-direction: column;
  }
  
  .project-link {
    justify-content: center;
    padding: var(--spacing-sm);
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .projects__title {
    font-size: var(--font-size-3xl);
  }
  
  .projects__grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  
  .project-card__links {
    flex-direction: column;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .projects__title {
    font-size: var(--font-size-4xl);
  }
  
  .projects__grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
}

/* Landscape orientation on mobile */
@media (max-width: 768px) and (orientation: landscape) {
  .projects {
    padding: var(--spacing-lg) var(--spacing-md);
  }
  
  .projects__title {
    font-size: var(--font-size-2xl);
    margin-bottom: var(--spacing-md);
  }
  
  .projects__grid {
    gap: var(--spacing-sm);
  }
  
  .project-card__image {
    height: 150px;
  }
}
</style> 
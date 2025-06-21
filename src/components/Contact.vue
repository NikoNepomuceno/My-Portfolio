<template>
  <section id="contact" class="contact">
    <div class="contact__container">
      <h1 class="contact__title animate-on-scroll">Get In Touch</h1>
      <div class="contact__content">
        <div class="contact__info">
          <h3 class="contact__subtitle animate-on-scroll">Let's Connect</h3>
          <p class="contact__description animate-on-scroll">
            I'm always interested in new opportunities and exciting projects.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div class="contact__methods stagger-animate">
            <div class="contact__method">
              <div class="contact__icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div class="contact__details">
                <h4>Contact Number</h4>
                <a href="tel:+639165916722">(+63) 916 591 6722</a>
              </div>    
            </div>
            
            <div class="contact__method">
              <div class="contact__icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div class="contact__details">
                <h4>Email</h4>
                <a href="mailto:nikonepomuceno2005@gmail.com">nikonepomuceno2005@gmail.com</a>
              </div>
            </div>

            <div class="contact__method">
              <div class="contact__icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="2" />
                  <line x1="16" y1="8" x2="16" y2="16" />
                  <line x1="8" y1="8" x2="8" y2="16" />
                  <line x1="12" y1="12" x2="12" y2="16" />
                </svg>
              </div>
              <div class="contact__details">
                <h4>LinkedIn</h4>
                <a href="https://linkedin.com/in/nikolai-nepomuceno-856252331" target="_blank"
                  rel="noopener">linkedin.com/in/nikolai-nepomuceno-856252331</a>
              </div>
            </div>
            <div class="contact__method">
              <div class="contact__icon">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div class="contact__details">
                <h4>GitHub</h4>
                <a href="https://github.com/NikoNepomuceno" target="_blank" rel="noopener">github.com/NikoNepomuceno</a>
              </div>
            </div>
          </div>
        </div>
        <div class="contact__form">
          <h3 class="contact__subtitle animate-on-scroll">Send a Message</h3>
          <form @submit.prevent="handleSubmit" class="form stagger-animate">
            <div class="form__group">
              <label for="name" class="form__label">Name</label>
              <input type="text" id="name" v-model="form.name" class="form__input" required />
            </div>
            <div class="form__group">
              <label for="email" class="form__label">Email</label>
              <input type="email" id="email" v-model="form.email" class="form__input" required />
            </div>
            <div class="form__group">
              <label for="subject" class="form__label">Subject</label>
              <input type="text" id="subject" v-model="form.subject" class="form__input" required />
            </div>
            <div class="form__group">
              <label for="message" class="form__label">Message</label>
              <textarea id="message" v-model="form.message" class="form__textarea" rows="5" required></textarea>
            </div>
            <button type="submit" class="form__submit" :disabled="isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true

  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Here you would typically send the form data to your backend
  console.log('Form submitted:', form.value)

  // Reset form
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  isSubmitting.value = false
  alert('Message sent successfully!')
}
</script>

<style scoped>
.contact {
  min-height: 80vh;
  padding: var(--spacing-2xl) var(--spacing-md);
  color: #fff;
}

.contact__container {
  max-width: 1200px;
  margin: 0 auto;
}

.contact__title {
  font-size: var(--font-size-4xl);
  font-weight: 800;
  margin-bottom: var(--spacing-xl);
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 0 4px 32px rgba(0, 0, 0, 0.4);
}

.contact__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  align-items: start;
}

.contact__info {
  margin-top: -56px;
}

.contact__subtitle {
  font-size: var(--font-size-2xl);
  font-weight: 600;
  margin-bottom: var(--spacing-md);
  color: #e0e0e0;
}

.contact__description {
  color: #b0b8c9;
  line-height: 1.7;
  margin-bottom: var(--spacing-2xl);
  font-size: var(--font-size-base);
}

.contact__methods {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.contact__method {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm);
  background: rgba(10, 14, 23, 0.5);
  border: 1px solid #222b3a;
  border-radius: 0.5rem;
  transition: border-color 0.2s;
}

.contact__method:hover {
  border-color: #00bcd4;
}

.contact__icon {
  color: #00bcd4;
  flex-shrink: 0;
}

.contact__details h4 {
  font-size: var(--font-size-base);
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
  color: #e0e0e0;
}

.contact__details a {
  color: #b0b8c9;
  text-decoration: none;
  font-size: var(--font-size-sm);
  transition: color 0.2s;
  word-break: break-all;
}

.contact__details a:hover {
  color: #00bcd4;
}

.form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.form__group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.form__label {
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: #e0e0e0;
}

.form__input,
.form__textarea {
  padding: var(--spacing-sm) var(--spacing-md);
  background: rgba(10, 14, 23, 0.5);
  border: 1px solid #222b3a;
  border-radius: 0.3rem;
  color: #fff;
  font-size: var(--font-size-base);
  transition: border-color 0.2s;
  min-height: 44px;
}

.form__input:focus,
.form__textarea:focus {
  outline: none;
  border-color: #00bcd4;
}

.form__textarea {
  resize: vertical;
  min-height: 120px;
}

.form__submit {
  padding: var(--spacing-sm) var(--spacing-lg);
  background: #111216;
  color: #fff;
  border: 1.5px solid #222b3a;
  border-radius: 0.5rem;
  font-size: var(--font-size-base);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: var(--spacing-sm);
  min-height: 44px;
}

.form__submit:hover:not(:disabled) {
  background: #181f2a;
  color: #00bcd4;
  border-color: #00bcd4;
}

.form__submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Mobile Optimizations */
@media (max-width: 480px) {
  .contact {
    padding: var(--spacing-xl) var(--spacing-sm);
  }
  
  .contact__title {
    font-size: var(--font-size-3xl);
    margin-bottom: var(--spacing-lg);
  }
  
  .contact__content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
  
  .contact__info {
    margin-top: 0;
  }
  
  .contact__subtitle {
    font-size: var(--font-size-xl);
  }
  
  .contact__description {
    font-size: var(--font-size-sm);
    margin-bottom: var(--spacing-lg);
  }
  
  .contact__method {
    flex-direction: column;
    text-align: center;
    padding: var(--spacing-md);
  }
  
  .contact__details a {
    font-size: var(--font-size-xs);
  }
  
  .form__input,
  .form__textarea {
    font-size: 16px; /* Prevents zoom on iOS */
  }
  
  .form__submit {
    width: 100%;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .contact__title {
    font-size: var(--font-size-3xl);
  }
  
  .contact__content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
  
  .contact__method {
    flex-direction: column;
    text-align: center;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .contact__title {
    font-size: var(--font-size-4xl);
  }
  
  .contact__content {
    gap: var(--spacing-xl);
  }
}

/* Landscape orientation on mobile */
@media (max-width: 768px) and (orientation: landscape) {
  .contact {
    padding: var(--spacing-lg) var(--spacing-md);
  }
  
  .contact__title {
    font-size: var(--font-size-2xl);
    margin-bottom: var(--spacing-md);
  }
  
  .contact__description {
    margin-bottom: var(--spacing-lg);
  }
  
  .contact__methods {
    gap: var(--spacing-sm);
  }
}
</style>
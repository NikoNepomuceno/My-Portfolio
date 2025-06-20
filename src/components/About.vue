<template>
  <section id="about" class="about">
    <div class="about__container">
      <h1 class="about__title animate-on-scroll">About Me</h1>
      <div class="about__content">
        <div class="about__text">
          <p class="about__paragraph animate-on-scroll">
            I'm a passionate backend developer with expertise in building robust, scalable, and efficient server-side
            applications.
            My journey in software development has been driven by a deep curiosity for how systems work behind the
            scenes.
          </p>
          <p class="about__paragraph animate-on-scroll">
            With experience in multiple programming languages and frameworks, I specialize in creating APIs,
            database architectures, and microservices that power modern web applications. I believe in writing
            clean, maintainable code and following best practices to ensure long-term project success.
          </p>
          <div class="about__skills">
            <h3 class="about__skills-title animate-on-scroll">Technical Skills</h3>
            <div class="about__skills-grid stagger-animate">
              <div class="skill-category">
                <h4>Languages</h4>
                <ul>
                  <li>JavaScript/TypeScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>C#</li>
                </ul>
              </div>
              <div class="skill-category">
                <h4>Frameworks</h4>
                <ul>
                  <li>Node.js/Express</li>
                  <li>Laravel</li>
                  <li>Vue.js</li>
                  <li>Next.js</li>
                  <li>Angular</li>
                </ul>
              </div>
              <div class="skill-category">
                <h4>Databases</h4>
                <ul>
                  <li>PostgreSQL</li>
                  <li>Supabase</li>
                  <li>MySQL</li>
                </ul>
              </div>
              <div class="skill-category">
                <h4>Tools</h4>
                <ul>
                  <li>Docker</li>
                  <li>Git</li>
                  <li>Cloudinary</li>
                  <li>Google Dashboard</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script logic needed for static about section
</script>

<style scoped>
.about {
  min-height: 80vh;
  padding: 3rem 1rem;
  color: #fff;
}

.about__container {
  max-width: 1200px;
  margin: 0 auto;
}

.about__title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 0 4px 32px rgba(0, 0, 0, 0.4);
}

.about__content {
  display: flex;
  gap: 3rem;
  align-items: flex-start;
}

.about__text {
  flex: 1;
}

.about__paragraph {
  font-size: 1.2rem;
  color: #b0b8c9;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.about__skills {
  margin-top: 3rem;
}

.about__skills-title {
  padding-top: 40px;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #e0e0e0;
}

.about__skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: rgba(10, 14, 23, 0.5);
  border: 1px solid #222b3a;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.skill-category h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #00bcd4;
}

.skill-category ul {
  list-style: none;
  padding: 0;
}

.skill-category li {
  color: #b0b8c9;
  padding: 0.3rem 0;
  font-size: 1rem;
}

.skill-category li:before {
  content: "▹";
  color: #00bcd4;
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .about__title {
    font-size: 2.5rem;
  }

  .about__content {
    flex-direction: column;
  }

  .about__skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
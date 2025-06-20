import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Fade in animation from bottom
export const fadeInUp = (element, delay = 0) => {
  return gsap.fromTo(element, 
    {
      y: 60,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: "power3.out"
    }
  );
};

// Fade in animation from left
export const fadeInLeft = (element, delay = 0) => {
  return gsap.fromTo(element,
    {
      x: -60,
      opacity: 0
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: "power3.out"
    }
  );
};

// Fade in animation from right
export const fadeInRight = (element, delay = 0) => {
  return gsap.fromTo(element,
    {
      x: 60,
      opacity: 0
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: "power3.out"
    }
  );
};

// Scale in animation
export const scaleIn = (element, delay = 0) => {
  return gsap.fromTo(element,
    {
      scale: 0.8,
      opacity: 0
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: "back.out(1.7)"
    }
  );
};

// Rotation animation
export const rotateIn = (element, delay = 0) => {
  return gsap.fromTo(element,
    {
      rotation: -180,
      opacity: 0,
      scale: 0.5
    },
    {
      rotation: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      delay,
      ease: "back.out(1.7)"
    }
  );
};

// Bounce animation
export const bounceIn = (element, delay = 0) => {
  return gsap.fromTo(element,
    {
      y: -100,
      opacity: 0,
      scale: 0.3
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      delay,
      ease: "bounce.out"
    }
  );
};

// Stagger animation for multiple elements
export const staggerFadeIn = (elements, stagger = 0.1, delay = 0) => {
  return gsap.fromTo(elements,
    {
      y: 40,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger,
      delay,
      ease: "power3.out"
    }
  );
};

// Stagger scale animation
export const staggerScaleIn = (elements, stagger = 0.1, delay = 0) => {
  return gsap.fromTo(elements,
    {
      scale: 0.5,
      opacity: 0
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      stagger,
      delay,
      ease: "back.out(1.7)"
    }
  );
};

// Parallax effect
export const parallax = (element, speed = 0.5) => {
  return gsap.to(element, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
};

// Text reveal animation
export const textReveal = (element, delay = 0) => {
  const text = element.textContent;
  element.textContent = '';
  
  const chars = text.split('').map(char => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.display = 'inline-block';
    span.style.opacity = '0';
    span.style.transform = 'translateY(20px)';
    element.appendChild(span);
    return span;
  });

  return gsap.to(chars, {
    opacity: 1,
    y: 0,
    duration: 0.05,
    stagger: 0.02,
    delay,
    ease: "power3.out"
  });
};

// Floating animation
export const floating = (element) => {
  return gsap.to(element, {
    y: -10,
    duration: 2,
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1
  });
};

// Pulse animation
export const pulse = (element) => {
  return gsap.to(element, {
    scale: 1.05,
    duration: 1,
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1
  });
};

// Scroll-triggered animations
export const createScrollAnimations = () => {
  // Fade in sections with different directions
  gsap.utils.toArray('section').forEach((section, index) => {
    const elements = section.querySelectorAll('.animate-on-scroll');
    
    elements.forEach((element, elementIndex) => {
      let animation;
      
      // Alternate animation directions for visual variety
      if (elementIndex % 3 === 0) {
        animation = fadeInUp(element, elementIndex * 0.1);
      } else if (elementIndex % 3 === 1) {
        animation = fadeInLeft(element, elementIndex * 0.1);
      } else {
        animation = fadeInRight(element, elementIndex * 0.1);
      }
      
      ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        animation: animation,
        toggleActions: "play none none reverse"
      });
    });
  });

  // Parallax effects for background elements
  gsap.utils.toArray('.parallax').forEach(element => {
    parallax(element, 0.3);
  });

  // Stagger animations for lists
  gsap.utils.toArray('.stagger-animate').forEach(container => {
    const items = container.children;
    const animation = staggerFadeIn(items, 0.1);
    
    ScrollTrigger.create({
      trigger: container,
      start: "top 80%",
      animation: animation,
      toggleActions: "play none none reverse"
    });
  });

  // Scale animations for cards
  gsap.utils.toArray('.scale-animate').forEach(container => {
    const items = container.children;
    const animation = staggerScaleIn(items, 0.15);
    
    ScrollTrigger.create({
      trigger: container,
      start: "top 80%",
      animation: animation,
      toggleActions: "play none none reverse"
    });
  });

  // Floating animations for decorative elements
  gsap.utils.toArray('.floating').forEach(element => {
    floating(element);
  });

  // Pulse animations for interactive elements
  gsap.utils.toArray('.pulse').forEach(element => {
    pulse(element);
  });
};

// Clean up animations
export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}; 
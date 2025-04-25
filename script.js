// DOM Elements
const mobileMenuBtn = document.getElementById('menu-toggle');
const mobileNavbar = document.querySelector('.mobile-navbar');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const skillsSection = document.getElementById('skills');
const skillsContainer = document.getElementById('skills-container');
const projectsContainer = document.getElementById('projects-container');
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const currentYearEl = document.getElementById('current-year');
const greetingEl = document.getElementById('greeting');

// Set current year in footer
currentYearEl.textContent = new Date().getFullYear();

// Theme Toggle
function setTheme(isDark) {
  if (isDark) {
    document.body.classList.add('dark-theme');
    themeIcon.className = 'bx bx-sun';
  } else {
    document.body.classList.remove('dark-theme');
    themeIcon.className = 'bx bx-moon';
  }
}

// Check local storage for theme preference
if (localStorage.getItem('darkTheme') === 'true') {
  setTheme(true);
} else {
  setTheme(false);
}

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-theme');
  localStorage.setItem('darkTheme', isDark);
  setTheme(isDark);
});

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
  const menuIcon = document.getElementById('menu-icon');
  mobileNavbar.classList.toggle('active');
  
  if (mobileNavbar.classList.contains('active')) {
    menuIcon.className = 'bx bx-x';
  } else {
    menuIcon.className = 'bx bx-menu';
  }
});

// Hide mobile menu when clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNavbar.classList.remove('active');
    document.getElementById('menu-icon').className = 'bx bx-menu';
  });
});

// Typing effect
function setupTypingEffect() {
  const roles = ['I am an AIML Student and Future Data Scientist', 'I love Coding and Learning', 'I am Exploring AI & ML'];
  let currentIndex = 0;
  
  const typed = new Typed('#typing-text', {
    strings: roles,
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 2000,
    startDelay: 500,
    loop: true,
    preStringTyped: () => {
      currentIndex = (currentIndex + 1) % roles.length;
    }
  });
}

// Greeting based on time of day
function updateGreeting() {
  const hour = new Date().getHours();
  let greeting = 'Hello';
  
  if (hour < 12) {
    greeting = 'Good Morning';
  } else if (hour < 18) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }
  
  greetingEl.textContent = greeting;
}

// Skills data
const skills = [
  {
    name: 'HTML & CSS',
    level: 90,
    category: 'frontend'
  },
  {
    name: 'Python',
    level: 85,
    category: 'frontend'
  },
  {
    name: 'C Programming',
    level: 70,
    category: 'frontend'
  },
  {
    name: 'MySQL',
    level: 75,
    category: 'COURSE'
  },
  {
    name: 'Data Visualization ',
    level: 70,
    category: 'COURSE'
  },
  {
    name: 'Augmented Reality (AR Basics)',

    level: 65,
    category: 'COURSE'
  },
  {
    name: 'Machine Learning Basics',
    level: 80,
    category: 'WORK'
  },
  
  {
    name: 'Git',
    level: 85,
    category: 'tools'
  },
  {
    name: 'Responsive  Web Design',
    level: 60,
    category: 'FRONTED'
  },
  {
    name: 'CANVA',
    level: 90,
    category: 'TOOL'
  },
  {
    name: 'DBMS',
    level: 70,
    category: 'TOOL'
  }
];

// Project data
const projects = [
  {
    id: 1,
    title: 'Zero hunger',
    description: 'Zero Hunger is a project that helps reduce food waste and feed the needy. We have created a website that connects hotels and restaurants with volunteers,who collect extra food and distribute it to people in need. This ensures that surplus food is not wasted but reaches those who need it most. ',
    image: 'https://tse4.mm.bing.net/th?id=OIP.iBKTfNXebB0u4eUCwuyoSgHaHa&pid=Api&P=0&h=180',
    tags: ['Website '],
    categories: ['My Project'],
    link: ' https://drive.google.com/file/d/1_po5M4WmOAsi7H39Dw6jsj0D5x3JOoai/view?usp=sharing',
    featured: true
  },
  {
    id: 2,
    title: 'Avinya ',
    description: 'Avinya is a research project that studies Earth’s surface using radar data from Sentinel-1 satellites.We analyze how radar signals interact with different surfaces to better understand land conditions. This research can help in areas like environmental monitoring, farming, and disaster management.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
    tags: ['Report '],
    categories: ['My Project'],
    link: 'https://drive.google.com/file/d/1LMabnZu9Sgyt9uVRfWeRP2WdUA8yUeH1/view?usp=sharing',
    featured: false
  },
  {
    id: 3,
    title: 'Python Essential 1',
    description: 'Completed a comprehensive foundational course in Python programming, covering core concepts such as variables, data types, control structures, functions, and file handling',
    image: 'https://www.kdnuggets.com/wp-content/uploads/wijaya-essential-python-libraries-1.png',
    tags: ['learn,Explore'],
    categories: ['Certificates'],
    link: 'https://drive.google.com/file/d/1Q_W9VK0RMo_rCuEVvtbVw3CdKB1j0NZK/view?usp=sharing',
    featured: true
  },
  {
    id: 4,
    title: 'Python Essential 2',
    description: 'Gained hands-on experience through coding exercises and real-world mini-projects. Developed proficiency in writing clean, efficient Python code and built a strong base for further learning in areas like data science, web development, and automation.',
    image: 'https://tse3.mm.bing.net/th?id=OIP.RcSq7fCq68ht0OA8VwLJlgHaE8&pid=Api&P=0&h=180',
    tags: ['explore new thing and learn coding'],
    categories: ['Certificates'],
    link: 'https://drive.google.com/file/d/1xfOWH8CKpVsM9tUoXTzxwTlVAjnXOM0U/view?usp=sharing',
    featured: false
  },
  {
    id: 5,
    title: 'My sql',
    description: 'MySQL is an open-source relational database management system (RDBMS) that uses SQL (Structured Query Language) to manage and manipulate databases. It’s widely used in web development, data storage, and enterprise applications',
    image: 'https://tse3.mm.bing.net/th?id=OIP.eU-8W92aB5FcvdB7MvyYogHaHa&pid=Api&P=0&h=180',
    tags: ['My SQL,Oracle'],
    categories: ['Certificates'],
    link: 'https://drive.google.com/file/d/17BqHRWSkbvmeuuiYTnnkpQF51HVrJBKE/view?usp=sharing.',
    featured: false
  },
  {
    id: 6,
    title: 'Augmented Reality',
    description: 'Augmented Reality (AR) is a technology that overlays digital content (such as images, videos, 3D models, or information) onto the real-world environment in real time, enhancing what we see, hear, and interact with. It bridges the gap between the physical and digital worlds.',
    image: 'https://tse3.mm.bing.net/th?id=OIP.STQAseNtR4Ka2j-jGTgcSwHaE7&pid=Api&P=0&h=180',
    tags: ['Exploring career opportunities in AR'],
    categories: ['Certificates'],
    link: 'https://drive.google.com/file/d/1TeccjvzXXkX6BczVXCclboKTVZZxH4Xk/view?usp=sharing',
    featured: true
  }
];

// Render skills
function renderSkills(category = 'all') {
  skillsContainer.innerHTML = '';
  
  const filteredSkills = category === 'all'
    ? skills
    : skills.filter(skill => skill.category === category);
  
  filteredSkills.forEach((skill, index) => {
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-card';
    skillCard.style.transitionDelay = `${index * 100}ms`;
    skillCard.innerHTML = `
      <div class="skill-header">
        <h3 class="skill-name">${skill.name}</h3>
        <span class="skill-level">${skill.level}%</span>
      </div>
      <div class="progress-bg">
        <div class="progress-bar" style="width: ${skill.level}%"></div>
      </div>
    `;
    
    skillsContainer.appendChild(skillCard);
  });
}

// Render projects
function renderProjects(category = 'all') {
  projectsContainer.innerHTML = '';
  
  const filteredProjects = category === 'all'
    ? projects
    : projects.filter(project => project.categories.includes(category));
  
  filteredProjects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.style.transitionDelay = `${index * 100}ms`;
    
    projectCard.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
        ${project.featured ? '<span class="featured-badge">Featured</span>' : ''}
      </div>
      <div class="project-content">
        <div class="project-tags">
          ${project.tags.slice(0, 3).map(tag => `<span class="project-tag">${tag}</span>`).join('')}
          ${project.tags.length > 3 ? `<span class="project-tag">+${project.tags.length - 3}</span>` : ''}
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <a href="${project.link}" class="project-link">
          View  <i class='bx bx-link-external'></i>
        </a>
      </div>
    `;
    
    projectsContainer.appendChild(projectCard);
  });
}

// Add click event listeners to filter buttons
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    const category = e.target.dataset.category;
    const parent = e.target.parentElement;
    
    // Remove active class from all buttons in the same group
    parent.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    e.target.classList.add('active');
    
    // Render the appropriate content based on the parent container
    if (parent.closest('#skills')) {
      renderSkills(category);
      animateSkillBars();
    } else if (parent.closest('#projects')) {
      renderProjects(category);
      animateElements('.project-card');
    }
  });
});

// Form validation
function validateForm() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');
  
  let isValid = true;
  
  // Validate name
  if (nameInput.value.length < 3) {
    nameInput.classList.add('error');
    nameError.textContent = 'Name must be at least 3 characters';
    nameError.classList.add('visible');
    isValid = false;
  } else {
    nameInput.classList.remove('error');
    nameError.classList.remove('visible');
  }
  
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailInput.classList.add('error');
    emailError.textContent = 'Please enter a valid email address';
    emailError.classList.add('visible');
    isValid = false;
  } else {
    emailInput.classList.remove('error');
    emailError.classList.remove('visible');
  }
  
  // Validate message
  if (messageInput.value.length < 20) {
    messageInput.classList.add('error');
    messageError.textContent = 'Message must be at least 20 characters';
    messageError.classList.add('visible');
    isValid = false;
  } else {
    messageInput.classList.remove('error');
    messageError.classList.remove('visible');
  }
  
  submitBtn.disabled = !isValid;
  return isValid;
}

// Add input event listeners to form fields for real-time validation
if (contactForm) {
  const formInputs = contactForm.querySelectorAll('input, textarea');
  formInputs.forEach(input => {
    input.addEventListener('input', validateForm);
  });
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically call a function to send the form data
      // For now, we'll just show an alert
      alert('Form submitted successfully! In a real application, this would send your message.');
      contactForm.reset();
    }
  });
}

// Intersection Observer for animations
function createObserver(elements, callback) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  elements.forEach(el => observer.observe(el));
  return observer;
}

// Animate elements when they come into view
function animateElements(selector) {
  const elements = document.querySelectorAll(selector);
  createObserver(elements, (element) => {
    element.classList.add('visible');
  });
}

// Animate skill bars when they come into view
function animateSkillBars() {
  setTimeout(() => {
    const bars = document.querySelectorAll('.progress-bar');
    bars.forEach(bar => {
      bar.classList.add('animate');
    });
  }, 300);
}

// Update active navigation link based on scroll position
function updateActiveLink() {
  let currentSectionId = '';
  const scrollPosition = window.scrollY + 100; // Offset for navbar height
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      currentSectionId = section.id;
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.add('active');
    }
  });
}

// Initialize the page
function init() {
  // Update greeting
  updateGreeting();
  setInterval(updateGreeting, 60000); // Update every minute
  
  // Setup typing effect
  setupTypingEffect();
  
  // Render skills and projects
  renderSkills();
  renderProjects();
  
  // Add scroll event listener
  window.addEventListener('scroll', updateActiveLink);
  
  // Initial call to set the active link
  updateActiveLink();
  
  // Setup animations
  animateElements('.skill-card');
  animateElements('.project-card');
  setTimeout(animateSkillBars, 500);
  
  // Initialize form validation
  if (contactForm) {
    validateForm();
  }
}

// Run initialization when DOM is ready
document.addEventListener('DOMContentLoaded', init);

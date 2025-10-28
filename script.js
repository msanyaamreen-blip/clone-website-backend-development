// Amphitrite Technologies - Main JavaScript
// Converted from Next.js/React to vanilla JavaScript

// ===== UTILITY FUNCTIONS =====
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease-out forwards';
    setTimeout(() => {
      container.removeChild(toast);
    }, 300);
  }, 3000);
}

// ===== NAVIGATION =====
function initNavigation() {
  const header = document.getElementById('navigation');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-cta');
  
  // Handle scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  mobileMenuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    
    if (isOpen) {
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'block';
      document.body.style.overflow = 'hidden';
    } else {
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
  
  // Close mobile menu when clicking a link
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  });
}

// ===== HERO SECTION =====
function initHero() {
  // Consultation form submission
  const consultationForm = document.getElementById('consultation-form');
  
  consultationForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      company: document.getElementById('company').value,
      email: document.getElementById('email').value,
      service: document.getElementById('service').value
    };
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.email || !formData.service) {
      showToast('Please fill in all required fields', 'error');
      return;
    }
    
    const submitButton = consultationForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    try {
      // Send email via API
      const response = await fetch('/api/send-consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        showToast('Consultation request sent successfully! We\'ll contact you soon.', 'success');
        consultationForm.reset();
      } else {
        showToast(data.error || 'Failed to send request. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      showToast('Failed to send request. Please try again.', 'error');
    } finally {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  });
  
  // Explore solutions button
  const exploreSolutionsBtn = document.getElementById('explore-solutions-btn');
  exploreSolutionsBtn.addEventListener('click', () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

// ===== INDUSTRIES DATA & RENDERING =====
function initIndustries() {
  const industries = [
    { name: 'Manufacturing', icon: 'factory' },
    { name: 'Pharma', icon: 'test-tube' },
    { name: 'Textiles', icon: 'shirt' },
    { name: 'Food Processing', icon: 'cooking-pot' },
    { name: 'Chemicals', icon: 'flask' },
    { name: 'Tannery', icon: 'layers' },
    { name: 'Schools', icon: 'school' },
    { name: 'Colleges', icon: 'graduation-cap' },
    { name: 'Large Hotels', icon: 'building' }
  ];
  
  const industriesGrid = document.getElementById('industries-grid');
  
  industries.forEach(industry => {
    const card = document.createElement('div');
    card.className = 'industry-card';
    card.innerHTML = `
      <div class="industry-icon">
        ${getIconSVG(industry.icon)}
      </div>
      <h4 class="industry-name">${industry.name}</h4>
    `;
    industriesGrid.appendChild(card);
  });
}

// ===== PROJECTS DATA & RENDERING =====
function initProjects() {
  const projects = [
    {
      title: 'ABC Textile Mill ETP',
      category: 'Textile Industry',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_8.jpg',
      categoryColor: 'background: #dbeafe; color: #1e40af;'
    },
    {
      title: 'Metro Residency STP',
      category: 'Real Estate',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_7.jpg',
      categoryColor: 'background: #d1fae5; color: #065f46;'
    },
    {
      title: 'PharmaLife Industries ETP',
      category: 'Pharmaceutical',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_6.jpg',
      categoryColor: 'background: #e9d5ff; color: #6b21a8;'
    },
    {
      title: 'ChemTech Solutions ETP',
      category: 'Chemical Industry',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_5.jpg',
      categoryColor: 'background: #fecaca; color: #991b1b;'
    },
    {
      title: 'GrandView Hotel STP',
      category: 'Hospitality',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_4.jpg',
      categoryColor: 'background: #fed7aa; color: #9a3412;'
    },
    {
      title: 'FoodCorp Processing ETP',
      category: 'Food Processing',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_3.jpg',
      categoryColor: 'background: #fef3c7; color: #92400e;'
    }
  ];
  
  const projectsGrid = document.getElementById('projects-grid');
  
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-image-wrapper">
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-image-overlay"></div>
      </div>
      <div class="project-info">
        <h4 class="project-title">${project.title}</h4>
        <span class="project-category" style="${project.categoryColor}">${project.category}</span>
      </div>
    `;
    projectsGrid.appendChild(card);
  });
}

// ===== TEAM DATA & RENDERING =====
function initTeam() {
  const teamMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      title: 'Founder & Chief Engineer',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_9.jpg'
    },
    {
      name: 'Priya Sharma',
      title: 'Senior Project Manager',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_10.jpg'
    },
    {
      name: 'Amit Patel',
      title: 'Technical Head - ETP',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_11.jpg'
    },
    {
      name: 'Kavita Desai',
      title: 'Environmental Compliance Officer',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_12.jpg'
    },
    {
      name: 'Suresh Nair',
      title: 'Operations Manager',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_13.jpg'
    }
  ];
  
  const teamGrid = document.getElementById('team-grid');
  
  teamMembers.forEach(member => {
    const card = document.createElement('div');
    card.className = 'team-card';
    card.innerHTML = `
      <div class="team-image-wrapper">
        <img src="${member.image}" alt="${member.name}" class="team-image">
        <div class="team-overlay"></div>
        <div class="team-social">
          <a href="#" class="social-link" aria-label="${member.name} on LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="#" class="social-link" aria-label="${member.name} on Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="team-info">
        <h3 class="team-name">${member.name}</h3>
        <p class="team-title">${member.title}</p>
      </div>
    `;
    teamGrid.appendChild(card);
  });
}

// ===== CLIENTS DATA & RENDERING =====
function initClients() {
  const clients = [
    {
      name: 'ABC Textiles Ltd.',
      logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_14.jpg',
      hasVideo: false
    },
    {
      name: 'PharmaLife Industries',
      logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_15.jpg',
      hasVideo: true
    },
    {
      name: 'GrandView Resorts',
      logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_16.jpg',
      hasVideo: false
    },
    {
      name: 'FoodCorp Industries',
      logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_17.jpg',
      hasVideo: false
    },
    {
      name: 'Metro Real Estate',
      logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_18.jpg',
      hasVideo: true
    }
  ];
  
  const clientsGrid = document.getElementById('clients-grid');
  
  clients.forEach(client => {
    const card = document.createElement('div');
    card.className = 'client-card';
    card.innerHTML = `
      <img src="${client.logo}" alt="${client.name}" class="client-logo">
      ${client.hasVideo ? '<div class="client-badge">Case Study Video</div>' : ''}
    `;
    clientsGrid.appendChild(card);
  });
}

// ===== TESTIMONIALS DATA & RENDERING =====
function initTestimonials() {
  const testimonials = [
    {
      quote: 'Amphitrite Technologies delivered an exceptional ETP system for our textile plant. The team was professional, and we achieved 100% PCB compliance on the first inspection.',
      name: 'Ramesh Krishnan',
      title: 'Plant Manager, ABC Textiles',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_19.jpg'
    },
    {
      quote: 'Outstanding service and support. The STP installation was completed on time, and their AMC team is always responsive. Highly recommend for any industrial water treatment needs.',
      name: 'Lakshmi Iyer',
      title: 'Facility Head, Metro Residency',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_20.jpg'
    },
    {
      quote: 'We saved ₹15 lakhs annually on water costs after installing their water recycling system. The ROI was evident within the first year. Excellent technical expertise!',
      name: 'Dr. Ashok Mehta',
      title: 'Director, PharmaLife Industries',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_21.jpg'
    },
    {
      quote: 'Professional team with deep knowledge of PCB regulations. They guided us through the entire compliance process and delivered a custom ETP solution that perfectly fits our needs.',
      name: 'Sunil Reddy',
      title: 'Operations Head, ChemTech Solutions',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_22.jpg'
    },
    {
      quote: '15 years of excellent service! From initial consultation to ongoing maintenance, Amphitrite has been our trusted partner for all water treatment needs across our hotel properties.',
      name: 'Meera Nambiar',
      title: 'GM Operations, GrandView Resorts',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_23.jpg'
    }
  ];
  
  const testimonialsTrack = document.getElementById('testimonials-track');
  
  testimonials.forEach(testimonial => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    card.innerHTML = `
      <div class="testimonial-rating">
        ${Array(5).fill('').map(() => `
          <svg class="star-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        `).join('')}
      </div>
      <blockquote class="testimonial-quote">"${testimonial.quote}"</blockquote>
      <div class="testimonial-author">
        <img src="${testimonial.image}" alt="${testimonial.name}" class="author-image">
        <div>
          <p class="author-name">${testimonial.name}</p>
          <p class="author-title">${testimonial.title}</p>
        </div>
      </div>
    `;
    testimonialsTrack.appendChild(card);
  });
  
  // Carousel navigation
  const prevBtn = document.getElementById('testimonials-prev');
  const nextBtn = document.getElementById('testimonials-next');
  
  prevBtn.addEventListener('click', () => {
    testimonialsTrack.scrollBy({
      left: -testimonialsTrack.offsetWidth / 2,
      behavior: 'smooth'
    });
  });
  
  nextBtn.addEventListener('click', () => {
    testimonialsTrack.scrollBy({
      left: testimonialsTrack.offsetWidth / 2,
      behavior: 'smooth'
    });
  });
}

// ===== FAQ ACCORDION =====
function initFAQ() {
  const faqData = [
    {
      question: 'What is the typical cost of an STP/ETP plant?',
      answer: 'The cost of an STP/ETP plant varies significantly based on factors like capacity, technology used, site conditions, and effluent quality requirements. We provide custom quotes after a detailed assessment of your needs. A small-scale plant might start from ₹5 lakhs, while large industrial plants can cost several crores.'
    },
    {
      question: 'Do you handle government approvals?',
      answer: 'Yes, absolutely. We provide end-to-end solutions, which include assistance with all necessary government and Pollution Control Board (PCB) approvals. Our team is well-versed in the regulatory landscape to ensure your plant is fully compliant.'
    },
    {
      question: 'Do you provide maintenance services?',
      answer: 'Yes, we offer comprehensive Annual Maintenance Contracts (AMC) to ensure your plant operates efficiently and sustainably. Our services include regular check-ups, operational support, and troubleshooting to maximize plant uptime and performance.'
    }
  ];
  
  const faqAccordion = document.getElementById('faq-accordion');
  
  faqData.forEach((faq, index) => {
    const item = document.createElement('div');
    item.className = 'faq-item';
    if (index === 0) item.classList.add('active');
    
    item.innerHTML = `
      <button class="faq-question">
        <span>${faq.question}</span>
        <svg class="faq-icon plus" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="12" y1="5" x2="12" y2="19"/>
          <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
        <svg class="faq-icon minus" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
      </button>
      <div class="faq-answer">
        <div class="faq-answer-content">${faq.answer}</div>
      </div>
    `;
    
    faqAccordion.appendChild(item);
  });
  
  // Set initial state for first item
  const firstAnswer = faqAccordion.querySelector('.faq-answer');
  if (firstAnswer) {
    firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 'px';
  }
  
  // Add click handlers
  const faqQuestions = faqAccordion.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const answer = item.querySelector('.faq-answer');
      const isActive = item.classList.contains('active');
      
      // Close all items
      faqAccordion.querySelectorAll('.faq-item').forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherAnswer = otherItem.querySelector('.faq-answer');
        otherAnswer.style.maxHeight = '0';
      });
      
      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

// ===== FOOTER FORM =====
function initFooter() {
  const footerForm = document.getElementById('footer-form');
  
  footerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
      name: footerForm.querySelector('input[type="text"]').value,
      email: footerForm.querySelector('input[type="email"]').value
    };
    
    if (!formData.name || !formData.email) {
      showToast('Please fill in all fields', 'error');
      return;
    }
    
    const submitButton = footerForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    try {
      // Simulate API call (you can replace this with actual API endpoint)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      showToast('Thank you! We\'ll contact you soon.', 'success');
      footerForm.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      showToast('Failed to send request. Please try again.', 'error');
    } finally {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  });
}

// ===== ICON SVG GENERATOR =====
function getIconSVG(iconName) {
  const icons = {
    'factory': '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>',
    'test-tube': '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5V2"/><path d="M8.5 2h7"/><path d="M14.5 16h-5"/></svg>',
    'shirt': '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>',
    'cooking-pot': '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12h20"/><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/><path d="m4 8 16-4"/><path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"/></svg>',
    'flask': '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg>',
    'layers': '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>',
    'school': '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 22v-4a2 2 0 1 0-4 0v4"/><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/><path d="M18 5v17"/><path d="m4 6 8-4 8 4"/><path d="M6 5v17"/><circle cx="12" cy="9" r="2"/></svg>',
    'graduation-cap': '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>',
    'building': '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>'
  };
  
  return icons[iconName] || icons['factory'];
}

// ===== SMOOTH SCROLL FOR ALL ANCHOR LINKS =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ===== INITIALIZE EVERYTHING ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHero();
  initIndustries();
  initProjects();
  initTeam();
  initClients();
  initTestimonials();
  initFAQ();
  initFooter();
  initSmoothScroll();
  
  console.log('Amphitrite Technologies website initialized successfully!');
});

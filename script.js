

// Button Animations and Navigation
document.querySelectorAll('.nav-buttons button').forEach((button, index) => {
    // Set sequential animation delays
    button.style.setProperty('--btn-index', index);
    
    // Add click handlers
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('button').forEach(b => 
            b.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Smooth scroll to section
        const sectionId = button.getAttribute('data-section');
        document.getElementById(sectionId).scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
});

// Parallax Scrolling Effect
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        section.style.transform = `translate3d(0px, ${rate}px, 0px)`;
    });

// Create cursor element immediately when page loads
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.createElement('div');
  cursor.id = 'cursor';
  document.body.appendChild(cursor);

  // Track mouse movement
  document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
  });
});
document.querySelectorAll('.nav-buttons button').forEach((button, index) => {
  button.addEventListener('click', () => {
      // Get the section name from data attribute
      const targetSection = button.textContent.toLowerCase();
      
      // Find the section and scroll to it
      document.getElementById(targetSection).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
      
      // Add active state to button
      document.querySelectorAll('.nav-buttons button').forEach(btn => 
          btn.classList.remove('active'));
      button.classList.add('active');
  });
});

document.querySelectorAll('.nav-buttons button').forEach(button => {
  button.addEventListener('click', () => {
      const sectionId = button.getAttribute('data-section');
      const targetSection = document.getElementById(sectionId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
});



function toggleScrollbar() {
    const body = document.body;
    if (body.style.overflow === 'hidden') {
      body.style.overflow = 'auto'; // 
    } else {
      body.style.overflow = 'hidden'; 
    }
  }
  

  document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    if (toggleButton) {
      toggleButton.addEventListener('click', toggleScrollbar);
    }
  });
  
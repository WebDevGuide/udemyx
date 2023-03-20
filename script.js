const displayTextElement = document.getElementById('courses-display-text');
const displayTexts = ['Courses', 'E-books', 'Roadmaps'];
let currentIndex = 0;

function typeWriter(text, i) {
  if (i < text.length) {
    displayTextElement.textContent += text.charAt(i);
    i++;
    setTimeout(() => typeWriter(text, i), 150);
  }
}

function changeDisplayText() {
  const currentText = displayTexts[currentIndex];
  displayTextElement.textContent = '';
  typeWriter(currentText, 0);
  currentIndex = (currentIndex + 1) % displayTexts.length;
}

changeDisplayText(); // call on page load
setInterval(changeDisplayText, 7000);


/*hy*/

const scrollDiv = document.getElementById('scroll-div');
const contactMessage = document.querySelector('.contact-message');

let lastScrollPosition = 0;

window.addEventListener('scroll', function() {
  const currentScrollPosition = window.pageYOffset;
  
  if (currentScrollPosition >= 500 && lastScrollPosition < currentScrollPosition) {
    scrollDiv.style.display = 'block';
  } else if (lastScrollPosition > currentScrollPosition) {
    scrollDiv.style.display = 'none';
  }
  
  lastScrollPosition = currentScrollPosition;
});

contactMessage.addEventListener('mouseover', function() {
  document.body.style.cursor = 'pointer';
});

contactMessage.addEventListener('mouseout', function() {
  document.body.style.cursor = 'auto';
});

// 
    // hide company name 
    setTimeout(() => {
      const companyName = document.querySelector('.company-name');
      companyName.style.bottom = '-20px';
      companyName.style.opacity = 0;
    }, 10000);
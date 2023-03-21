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

// 
    // hide company name 
    setTimeout(() => {
      const companyName = document.querySelector('.company-name');
      companyName.style.bottom = '-20px';
      companyName.style.opacity = 0;
    }, 10000);
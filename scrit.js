const text = " Frontend Developer ";
const typingElement = document.querySelector(".typing");

let index = 0;
let isDeleting = false;

function typeEffect() {
  if (!isDeleting && index <= text.length) {
    typingElement.textContent = text.substring(0, index);
    index++;
  } else if (isDeleting && index >= 0) {
    typingElement.textContent = text.substring(0, index);
    index--;
  }

  if (index === text.length) {
    isDeleting = true;
    setTimeout(typeEffect, 600); // छोटा pause before delete
    return;
  } else if (index < 0) {
    isDeleting = false;
    index = 0;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 80); // fast typing + deleting speed
}

typeEffect();

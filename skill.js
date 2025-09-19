// Animate circular skills
document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".circle");

  circles.forEach(circle => {
    const percent = circle.getAttribute("data-percent");
    let progress = 0;

    const interval = setInterval(() => {
      if (progress >= percent) {
        clearInterval(interval);
      } else {
        progress++;
        circle.style.background = `conic-gradient(#00ffcc ${progress * 3.6}deg, #222 ${progress * 3.6}deg)`;
        circle.setAttribute("data-percent", progress);
      }
    }, 20);
  });
});

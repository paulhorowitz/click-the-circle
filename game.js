document.addEventListener("DOMContentLoaded", function() {
  const circle = document.getElementById("circle");
  
  circle.addEventListener("click", function() {
    alert('yay you finally clicked the circle..you win!')
  });
  console.log(window.innerHeight)
  function moveCircle() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    circle.style.left = x + "px";
    circle.style.top = y + "px";
  }
  
  setInterval(moveCircle, 1000);
});
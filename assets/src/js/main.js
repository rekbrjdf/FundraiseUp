 document.addEventListener("DOMContentLoaded", function () {
   
  function handleSliderInput(slider, output, fill) {

    output.textContent = `${slider.value}px`;
    fill.style.width = `${slider.value}%`;

  }
  
  for (let i = 1; i <= 2; i++) {
    
    const slider = document.getElementById(`myRange-${i}`);
    const output = document.getElementById(`demo-${i}`);
    const fill = document.getElementById(`fill-${i}`); 

    output.textContent = `${slider.value}px`;
   
    slider.addEventListener("input", () => {
      handleSliderInput(slider, output, fill);
    });
  }
    
  const menuTop = document.querySelector(".menu").offsetTop;
  const menu  = document.querySelector(".menu"); 

  window.addEventListener("scroll", function() {
    const scroll = window.scrollY; 
    if (scroll >= menuTop) {
      menu.classList.add("menu_fixed");
    } else {
      menu.classList.remove("menu_fixed");
    }
  });


  const tabMenuLinks = document.querySelectorAll(".tab li a");

  tabMenuLinks.forEach(link => {
    link.addEventListener("click", function() {
      const target = this.getAttribute("data-rel");
      const allLinks = document.querySelectorAll(".tab li a");

      allLinks.forEach(link => link.classList.remove("active"));
      this.classList.add("active");

      const targetTabBox = document.getElementById(target);
      const allTabBoxes = document.querySelectorAll(".tab__content");

      allTabBoxes.forEach(box => box.style.display = "none");
      targetTabBox.style.display = "block";

      return false;
    });
  });
});
 document.addEventListener("DOMContentLoaded", function () {
   
     var slider = document.getElementById("myRange");
     var output = document.getElementById("demo1");
     var fill = document.getElementById("fill1");

     var slider2 = document.getElementById("myRange2"); 
     var output2 = document.getElementById("demo2");
     var fill2 = document.getElementById("fill2");
     output.innerHTML = slider.value + "px";
     
     slider.oninput = function() {
       output.innerHTML = this.value + "px";
       fill.style.width = this.value + "%"; 
   
     }

     output2.innerHTML = slider2.value + "px";
     
     slider2.oninput = function() {
       output2.innerHTML = this.value + "px";
       fill2.style.width = this.value + "%"; 
   
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
function showSlides(n) {
     let slides = document.getElementsByClassName("mySlides");
     let dots = document.getElementsByClassName("dot");
     if (n > slides.length-1 ) {
          slideIndex = 0
     }
     
     if ( n < 0 ) {
          slideIndex = slides.length-1
     }
     
     for ( let i = 0 ; i < slides.length;i++) {
          slides[i].style.display = "none";
          dots[i].className = dots[i].className.replace(" active","");
     }
     slides[slideIndex].style.display= "block";
     dots[slideIndex].className +=" active"
     
}
let slideIndex = 0;

showSlides(slideIndex);
setInterval( plusSlides,2000);
function plusSlides(n=1) {
   showSlides(slideIndex += n);
 }
function currentSlide(n) {
   showSlides(slideIndex = n-1);
 }
//  ===========================

let slideIndex = 1;
showSlides(slideIndex); 
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
  
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
  
    // Ocultar todas las imágenes
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    // Quitar clase activa de todos los puntos
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  
    // Mostrar la imagen activa
    slides[slideIndex - 1].style.display = "block";
  
    // Agregar la clase activa al punto correspondiente
    if (dots[slideIndex - 1]) {
      dots[slideIndex - 1].className += " active";
    }
}

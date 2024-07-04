
var carouselWidth = $('.carousel-inner')[0].scrollWidth;
var cardWidth = $('.carousel-item').width();

var scrollPosition = 0;

$('.carousel-control-next').on('click', function() {
  if(scrollPosition<(carouselWidth - (cardWidth*4))){
    console.log('next');
    scrollPosition = scrollPosition + cardWidth;
    $('.carousel-inner').animate({scrollLeft: scrollPosition}, 600);
  }
});

$('.carousel-control-prev').on('click', function() {
  if(scrollPosition > 0){
    console.log('prev');
    scrollPosition = scrollPosition - cardWidth;
    $('.carousel-inner').animate({scrollLeft: scrollPosition}, 600);
  }
});


function descargarArchivo() {
  const enlace = document.createElement('a');
  enlace.href = 'archivos/LISTA DE PRODUCTOS ACTUAL.xlsx'; // Reemplaza con la ruta a tu archivo
  enlace.download = 'LISTA DE PRODUCTOS ACTUAL.xlsx'; // Reemplaza con el nombre deseado para el archivo descargado
  enlace.click();
}

function mostrarTooltip() {
  document.getElementById('tooltip').style.display = 'block';
}

function ocultarTooltip() {
  document.getElementById('tooltip').style.display = 'none';
}
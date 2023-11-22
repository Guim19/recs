let btnMenu = document.getElementById("btnmenu");
let menu = document.getElementById("menu");
btnMenu.addEventListener("click", function () {
  "use strict";
  menu.classList.toggle("mostrar");
});

document.addEventListener('DOMContentLoaded', function () {
    // Función para mostrar un mensaje al hacer clic en los iconos
    function mostrarMensaje() {
      alert("Se agregará próximamente!");
    }
  
    // Selecciona todos los iconos excepto el del menú
    var iconos = document.querySelectorAll('.social-icon [class*="icon-"]:not(.icon-menu)');
  
    // Agrega un evento de clic a cada icono
    iconos.forEach(function (icono) {
      icono.addEventListener('click', mostrarMensaje);
    });
  });
  
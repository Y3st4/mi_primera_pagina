//alert("Hola este es mi Javascript");
//let nombre ="Juan Diego";
//console.log(nombre)
//let titulo = document.querySelector(".titulo");
//let contenidotitulo = "Acerca de mi";
//CONDICIONALES
//let textotitulo = titulo.innertext;
//console.log(textotitulo);
//if(textotitulo == "Acerca de mi"){
    //titulo.innerHTML = "otro";
//} //else{
    //console.log("no se cumple")
//}

//FUNCIONES
//let parrafo = document.querySelector(".parrafo2")
//function cambiartexto(vida, muchos, aquellos){
    //let contenido = `La ${vida} de un crítico es sencilla en ${muchos} aspectos, arriesgamos poco, y tenemos poder sobre ${aquellos} que ofrecen su trabajo y su servicio a nuestro juicio.`;
    //return contenido;
//}
//parrafo.innertext = cambiartexto( crueldad, muchos, aquellos)

let menu_responsive = document.querySelector(".checkbtn")

menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});    
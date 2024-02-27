// let cuadro = document.getElementById("cuadro");
// let colorBoton = document.getElementById("colorBoton");
// let colorActual = "gris";


// function cambiarColor() {
//   if (colorActual === "gris") {
//     cuadro.style.backgroundColor = "lightblue";
//     cuadro.innerText = "Azul Claro";
//     colorActual = "azul";
//   } else if (colorActual === "azul") {
//     cuadro.style.backgroundColor = "red";
//     cuadro.innerText = "Rojo";
//     colorActual = "rojo";
//   } else {
//     cuadro.style.backgroundColor = "lightgrey";
//     cuadro.innerText = "Gris";
//     colorActual = "gris";
//   }
// }


// colorBoton.addEventListener("click", cambiarColor);




// let cuadroTexto = document.getElementById("cuadroTexto");
// let textoInput = document.getElementById("textoInput");
// let borrarContenido = document.getElementById("borrarContenido");



// function actualizar(){
//     cuadroTexto.innerText = textoInput.value;
// }

// function borrar(){
//     cuadroTexto.innerText = ``;
//     textoInput.value = ``;
// }

// textoInput.addEventListener(`input`, actualizar)

// borrarContenido.addEventListener(`click`, borrar)




// function calcularMasa() {
//     let peso = document.getElementById("peso").value;
//     let estatura = document.getElementById('estatura').value;

//     let heightInMeters = estatura / 100;

//     let bmi = (peso / (heightInMeters * heightInMeters)).toFixed(2);

//     document.getElementById('resultado').value = bmi;
//   }

//   document.getElementById('calcularMasa').addEventListener('click', calcularMasa)




// const conversionRate = 500;

// function convertirADolar() {
//   var monedalocal = document.getElementById('monedalocal').value;
//   var dolares = (monedalocal / conversionRate).toFixed(2);
//   document.getElementById('resultado').value = '$' + dolares;
// }

// function convertirAMonedaLocal() {
//   var montoDolar = document.getElementById('monedalocal').value;
//   var localMoneda = (montoDolar * conversionRate).toFixed(2);
//   document.getElementById('resultado').value = localMoneda + ' Moneda Local ';
// }

// function limpiarDatos() {
//   document.getElementById('monedalocal').value = '';
//   document.getElementById('resultado').value = '';
// }

// document.getElementById('dolarBoton').addEventListener('click', convertirADolar);
// document.getElementById('localBoton').addEventListener('click', convertirAMonedaLocal);
// document.getElementById('limpiarBoton').addEventListener('click', limpiarDatos);
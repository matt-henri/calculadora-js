'use strict'

const display = document.getElementById ( 'display' )
const numeros = document.querySelectorAll ( '[id*=tecla]' )


const inserirNumero = (evento) => display.textContent = evento

console.log(numero => numero.addEventListener('click', inserirNumero) )
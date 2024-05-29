const precio = 400000
let cantidadInicial = 0
let valorTotalInicial = 0
const precioSpan = document.querySelector('.precio-inicial')
const valorTotal = document.querySelector('.valor-total')
const cantidadSpan = document.querySelector('.cantidad')
const botonRestar = document.querySelector('.restar')
const botonSumar = document.querySelector('.sumar')

precioSpan.innerHTML = precio
cantidadSpan.innerHTML = cantidadInicial
valorTotal.innerHTML = valorTotalInicial

botonRestar.addEventListener('click', () => {
  if (cantidadInicial > 0) {
    cantidadInicial--
    cantidadSpan.innerHTML = cantidadInicial
    valorTotal.innerHTML = precio * cantidadInicial
  }
})

botonSumar.addEventListener('click', () => {
  cantidadInicial++
  cantidadSpan.innerHTML = cantidadInicial
  valorTotal.innerHTML = precio * cantidadInicial
})
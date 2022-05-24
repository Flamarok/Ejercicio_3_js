const formulario = document.querySelector("body > form");
const input = document.querySelector("body > form > input[type=number]")

const pizzas = [{
    id: 0,
    name: "Muzzarella",
    ingredientes: "muzarella, sal, tomate",
    precio: 420
  },
  {
    id: 1,
    name: "Pepperoni",
    ingredientes: "pepperoni, queso, tomate",
    precio: 650
  },
  {
    id: 2,
    name: "Fugazzeta",
    ingredientes: "cebolla, queso, tomate",
    precio: 390
  },
  {
    id: 3,
    name: "Hawaiana",
    ingredientes: "piña, queso, tomate",
    precio: 620
  },
  {
    id: 4,
    name: "Mexicana",
    ingredientes: "carne, sal, queso",
    precio: 680
  },
  {
    id: 5,
    name: "Anchoa",
    ingredientes: "anchoas, muzzarella, tomate",
    precio: 500
  }
];


formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Formulario Enviado");
  const resultado = input.value;
  buscadorPizzas(resultado);
});


/* const buscadorPizzas = (resultado) => {
  pizzas.map(pizza => {
    const h2 = document.querySelector("body > h2")
    const h4 = document.querySelector("body > h4")
    if (resultado == pizza.id) {
    h2.textContent = `Nombre: ${pizza.name} `
    h4.textContent = `Precio:${pizza.precio}`
    }  else {
      h2.textContent = `Nombre: ${pizza.name} `
      h4.textContent = `Precio:${pizza.precio}` 
    } 
    // si el parametro "resultado" es distinto al id saltara el mensaje del else (sin terminar de recorrer todo el array). 
  })
};  */


// probando filter
const buscadorPizzas = (resultado) => {
  const pizzaDeseada = pizzas.filter(pizza => resultado == pizza.id);
  const h2 = document.querySelector("body > h2");
  const h4 = document.querySelector("body > h4");
  pizzaDeseada.forEach( elemento => {
    if (resultado == elemento.id) {
      h2.textContent = `Nombre: ${elemento.name} `
      h4.textContent = `Precio:${elemento.precio}`
      }  else {
        h2.textContent = `Nom `
        h4.textContent = `Pre` 
      }
  })
}
document.addEventListener("DOMContentLoaded", function(){

const btnBuscar = document.getElementById("btnBuscar");
let inputBuscar = document.getElementById("inputBuscar");
const URL_NASA = "https://images-api.nasa.gov/search?q=";
// const container = document.getElementById("container");
let item = [];

function createText(options) {
    const element = document.createElement(options.element);
    element.classList.add(options.class);
    element.textContent = options.text;

    return element;
}
  
// crea un elemento IMG y le agrega atributos pasados por parámetro (class, src y alt) 
function createImage(options) {
    const imageElement = document.createElement("img");
    imageElement.classList.add(options.class);
    imageElement.src = options.image;
    imageElement.alt = options.name;

    return imageElement;
}

function displayItem(item) {
    // Crea el contenedor del producto
    const itemElement = document.createElement("div");
    itemElement.className = "item";
  
    // crea elementos del contenedor (imagen, nombre, descripción, precio y cantidad de vendidos)
    const contentList = [
      createImage({ class: 'imageElement', image: item.links[0].href }),
      createText({ element: 'h2', class: 'nameElement', text: item.data[0].title }),
      createText({ element: 'p', class: 'descriptionElement', text: item.data[0].description }),
      createText({ element: 'p', class: 'dateElement', text: item.data[0].date_created }),
    ];
  
    // agrega cada uno de los elementos al contenedor
    contentList.forEach(item => itemElement.appendChild(item));
    // agrega el contenedor a la lista de elementos
    const container = document.getElementById("contenedor");
    container.appendChild(itemElement);
  }

btnBuscar.addEventListener("click", function(){
    let nombre = inputBuscar.value;
    console.log(URL_NASA + nombre);
    fetch(URL_NASA + nombre)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        item = data.collection.items;
        item.forEach(objeto => displayItem(objeto));
    })
    .catch((error) => {
        console.log(error)
    })
})

});
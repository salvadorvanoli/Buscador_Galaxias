document.addEventListener("DOMContentLoaded", function(){

    const btnBuscar = document.getElementById("btnBuscar");
    let inputBuscar = document.getElementById("inputBuscar");
    const URL_NASA = "https://images-api.nasa.gov/search?q=";
    let contenedor = document.getElementById("contenedor");
    let item = [];

    function createText(options) {
        const element = document.createElement(options.element);
        element.classList.add(options.class);
        element.textContent = options.text;

        return element;
    }
    
    function createImage(options) {
        const imageElement = document.createElement("img");
        imageElement.classList.add(options.class);
        imageElement.src = options.image;
        imageElement.alt = options.name;

        return imageElement;
    }

    function displayItem(item) {
        const itemElement = document.createElement("div");
        itemElement.className = "item";
    
        const contentList = [
        createImage({ class: 'imageElement', image: item.links[0].href }),
        createText({ element: 'h2', class: 'nameElement', text: item.data[0].title }),
        createText({ element: 'p', class: 'descriptionElement', text: item.data[0].description }),
        createText({ element: 'p', class: 'dateElement', text: item.data[0].date_created }),
        ];
    

        contentList.forEach(item => itemElement.appendChild(item));
        
        const container = document.getElementById("contenedor");
        container.appendChild(itemElement);
    }

    function borrarLista(){
        contenedor.innerHTML = "";
        inputBuscar.value = "";
    }

    btnBuscar.addEventListener("click", function(){
        let nombre = inputBuscar.value;
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

    btnBorrar.addEventListener("click", function(){
        borrarLista();
    })

});
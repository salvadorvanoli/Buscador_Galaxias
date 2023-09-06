const btnBuscar = document.getElementById("btnBuscar");
let inputBuscar = document.getElementById("inputBuscar");
const URL_NASA = "https://images-api.nasa.gov/search?q=";
const container = document.getElementById("container");

function mostrarResultados(datos){
    let imgTemp = document.createElement("img");
    imgTemp.src = datos.collection.items[0].data[0].href
    imgTemp.width = "300px";
    imgTemp.height = "300px";
    container.appendChild(imgTemp);
}

btnBuscar.addEventListener("click", function(){
    let nombre = inputBuscar.value;
    console.log(URL_NASA + nombre);
    fetch(URL_NASA + nombre)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        mostrarResultados(data);
    })
    .catch((error) => {
        console.log(error)
    })
})
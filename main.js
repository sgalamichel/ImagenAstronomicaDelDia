'use strict'

window.addEventListener('load', obtenerDatos); //escuchador de eventos para que cuando entre a la page se cargue lo extraido de la api

function obtenerDatos(){
    const nasaKey = '2OaLrqrjy4V9A6FbNNyFcODbMlUlhPDnnpkVvJ25';
    const ruta = `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`;  //ruta de la nasa concatenada con la key

    fetch(ruta)  //fetch para acceder a los datos de la ruta
    .then(data => data.json()) //los datos que nos da a formato json
    .then(response => mostrarDatos(response)) 

}

// Funcion para mostrar datos que voy a extraer

function mostrarDatos({date, explanation, media_type, title, url}){ 
    const titulo = document.querySelector('#titulo')
    titulo.innerHTML = title;  //datos que genera el json de la nasa

    const fecha = document.querySelector('#fecha')
    fecha.innerHTML = date;

    const descripcion = document.querySelector('#descripcion')
    descripcion.innerHTML = explanation;

    const multimedia = document.querySelector('#c_multimedia')
        if(media_type == 'video'){  //valido si es imagen o video
            multimedia.innerHTML = `<iframe class="embed-responsive-item" src="${url}"></iframe>` //se introducce un video
        }else{
            multimedia.innerHTML = `<img src="${url} " class="img-fluid" alt="Imagen de la NASA">` //de lo contrario una imagen
        }
}

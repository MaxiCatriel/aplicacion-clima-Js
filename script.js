let urlBase = 'https://api.openweathermap.org/data/2.5/weather?';
let api_key = 'f77e7b07ddecaa76d309b980c819d00c';
let difKelvin = 273.15;

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad){
        fetchdatosClima(ciudad);
    }
})

function fetchdatosClima(ciudad){
    fetch(`${urlBase}q=${ciudad}&appid=${api_key}`)
    .then(response => response.json())
    .then(response => mostrarDatosClima(response));
}

function mostrarDatosClima(data){

    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML='';

    const ciudadNombre = data.name;
    const paisNombre = data.sys.country;
    const temperatura = data.main.temp;
    const humedad = data.main.humidity; 
    const descripcion = data.weather[0].description;
    const icono = data.weather[0].icon;

    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`;
    
    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `La temperatura actual es : ${Math.floor(temperatura-difKelvin)} °C`;

    const humedadInfo = document.createElement('p');
    humedadInfo.textContent = `La humedad es : ${humedad} %`;

    const iconoInfo = document.createElement('img');
    iconoInfo.src = `https://openweathermap.org/img/wn/10d@2x.png`

    const descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = `La descripcion meteorologica es: ${descripcion}`;

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(humedadInfo);
    divDatosClima.appendChild(iconoInfo);
    divDatosClima.appendChild(descripcionInfo);
    


}
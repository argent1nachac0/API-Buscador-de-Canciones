import * as UI from './interfaz.js'
import API from './api.js'

UI.formulario.addEventListener('submit', buscarCancion)


function buscarCancion(e){
    e.preventDefault()

    //Obtener datos del formulario
    const artista = document.querySelector('#artista').value
    const cancion = document.querySelector('#cancion').value

    if(artista === '' || cancion === ''){
        //
        UI.mensajes.textContent = ' Error! Todos los campos son Obligatorios'
        UI.mensajes.classList.add('error')

        setTimeout(()=>{
            UI.mensajes.textContent = ''
            UI.mensajes.classList.remove('error')
        },3000)

        return
    }

    //Consultar la API
    const busqueda = new API(artista,cancion)
    busqueda.consultarAPI()
}
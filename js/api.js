import * as UI from './interfaz.js'


class API {
    constructor(artista,cancion){
        this.artista = artista
        this.cancion = cancion
    }

    consultarAPI(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {

                if(resultado.lyrics){
                const { lyrics} = resultado

                UI.resultado.textContent = lyrics
                UI.heading.textContent = `Letra de la cancion: ${this.cancion} de ${this.artista}`
                }else{
                    UI.mensajes.textContent = 'La cancion buscada no existe! Intente con otra busqueda'
                    UI.mensajes.classList.add('error')

                    setTimeout(()=>{
                        UI.mensajes.textContent = ''
                        UI.mensajes.classList.remove('error')
                    },3000)
                }
            })
    }
}

export default API
const boton = document.getElementById('btn-kitty');


const peticion = `https://api.thecatapi.com/v1/images/search`;
const apiKEY = '78711a1f-0db0-4bdf-b231-1cc94bc3115f';

const imagen = document.getElementById('imagen')

const getKitties = async () => {
    
    
    try{

        const respuesta = await fetch(peticion);
        const data = await respuesta.json();
        const {url} = data[0];
        
        imagen.src = url;
        
        
        
    }catch (error){

        console.log(error)
    }
    
}

boton.addEventListener('click',getKitties)









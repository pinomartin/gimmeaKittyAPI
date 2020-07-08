const boton = document.getElementById('btn-kitty');
const saludo = document.getElementById('greeting');


const peticion = `https://api.thecatapi.com/v1/images/search`;

// https://api.thecatapi.com/images/search
const apiKEY = '78711a1f-0db0-4bdf-b231-1cc94bc3115f';

const imagen = document.getElementById('imagen')
const svg = 'svg/catspinner.svg';

const saludosPack = ['Hi human !','Meowwww !','Katz rule the world! ', 'One cat just leads to another..',
'All you need is love and a cat', 'Kittens are angels with whiskers', 'Time spent with cats is never wasted',
'Cats choose us, we dont own them'];

/**Random Number Generator */
const roll = (min, max, floatFlag) => {
    let r = Math.random() * (max - min) + min
    return floatFlag ? r : Math.floor(r)
}

const getKitties = async () => {
    
    try{

        imagen.src = `${svg}`;
        saludo.innerText = "";
        const respuesta = await fetch(peticion, { headers: { 'x-api-key':`${apiKEY}`} });
        const data = await respuesta.json();
        console.log(data)
        const {url} = data[0];
        
        setTimeout(() => {
            saludo.innerText = saludosPack[roll(0,saludosPack.length)];

        },1000);
        
        imagen.src = url;

        
    }catch (error){

        console.log(error)
    }
    
}




boton.addEventListener('click',getKitties)










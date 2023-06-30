const buttonAgregar = document.querySelector("#agregar");

const cambiarColor =  function (event){
        const elemento = event.target;
        
        if(elemento.className === 'recuadro'){
            elemento.className = 'recuadrogreen';
        }else{
            elemento.className = 'recuadro';
        }
}

const clickHandler =  function(){
    const contenedor = document.querySelector('#contenedor');

    const newDiv = document.createElement('div');
    newDiv.innerText = "Holi, PT 12B";
    newDiv.className = 'recuadro';
    newDiv.addEventListener('click', cambiarColor)
    contenedor.appendChild(newDiv);

    
}

buttonAgregar.addEventListener('click', clickHandler)

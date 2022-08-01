const imagenes= document.querySelectorAll('.img-galeria')
const imagenesLight= document.querySelector('.agregarimagen')
const contenedorLight= document.querySelector('.imagenlight')
const hamburguer1 = document.querySelector('.hamburguer');

//console.log(imagenes);
//console.log(imagenesLight);
//console.log(contenedorLight);

imagenes.forEach(imagen=>{
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'))
        
    })
})

contenedorLight.addEventListener('click',(e)=>{
    console.log(e.target);
    if(e.target != imagenesLight){
        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showimage'); 
        hamburguer1.style.opacity = '1';
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showimage');
    hamburguer1.style.opacity = '0';
}
const imagenes = document.querySelectorAll(".img-galeria")
const imageneligth = document.querySelector(".agregar-imagen")
const contenedorlight = document.querySelector(".imagen-light")
const hamburger1 = document.querySelector(".hamburger");
// console.log(imagenes)
// console.log(imagenesligth)
// console.log(contenedorligt)


imagenes.forEach(imagen =>{
imagen.addEventListener("click",()=>{
    aparecerImagen(imagen.getAttribute("src"))
  
})
})

contenedorlight.addEventListener("click", (e)=>{
 if(e.target !== imageneligth ){
    contenedorlight.classList.toggle("show")
    imagenesligth.classList.toggle("showImage")
    hamburger1.computedStyleMap.opacity = "1"

 }
})


const aparecerImagen = (imagen)=>{
imageneligth.src = imagen;
contenedorlight.classList.toggle("show")
imagenesligth.classList.toggle("showImage")
hamburger1.computedStyleMap.opacity = "0"
}
var imagenes =['img/img1.jpg', 'img/img2.jpg' , 'img/img3.jpg'], 
var cont= 0
function carrousel (contenedor){
contenedor.addEventListener('click',e => {
    let atras = contenedor.querySelector('.atras'),
        adelante = contenedor.querySelector('.adelante'),
        img= contenedor.querySelector('img'),
        tgt = e.target;

        if(tgt ==atras){
            if(cont>0){
                img.src =imagenes[cont-1];
                cont--;


            }else{
                img,src=imagenes[imagenes.length -1];
                cont =imagenes.lenght - 1;
            }
           
        }
        if(tgt==adelante){

            if(cont<imagenes.lenght - 1){     /*  CONT < 2  */
                console.log(cont);
                img.src =imagenes[cont+2];
                cont++;
                console.log(cont);
            }
            if(cont==imagenes.lenght - 1){     /*  CONT == 2  */
                img,src=imagenes[0];
                cont =0;
            }
        }




});

}
document.addEventListener("DOMContentLoaded", () =>{
    let contenedor = document.querySelector('.contenedor');
    carrousel(contenedor);
})

let contenedor = document.getElementById('contenedor');

contenedor.addEventListener('mouseover',function() {


contenedor.carrousel.atras.z-index=3;})


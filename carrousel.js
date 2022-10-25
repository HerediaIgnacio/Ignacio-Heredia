console.log("funca");

var imagenes =['img/imp3d.jpg', 'img/robot.jpg' , 'img/realau.jpg']
var cont=0;

var titulosRef=['IMPRESION 3D ',
                'ROBOTICA',
                'REALIDAD AUMENTADA'
              ]



var textosRef=['Es el proceso de fabricar un objeto sólido tridi­mensional de casi cualquier forma a partir de un modelo digital computarizado. (También llamada fabricación por adición)',
                'Sus objetivos son un incremento significativo de la productividad, la utilización eficiente de los recursos y disminuir los errores en la cadena de producción. Se libera a los empleados de tareas repetitivas o peligrosas, lo que este es un tema controvertido.',
                'Es un entorno de escenas y objetos de apariencia real (generado mediante tecnología informática) que crea en el usuario la sensación de estar inmerso en él. '
              ]
totalima=3;
console.log(cont);
console.log(imagenes.lenght);

//function carrousel (contenedor){

function carrousel (contenedor){
contenedor.addEventListener('click',e => {
    let atras = contenedor.querySelector('.atras'),
        adelante = contenedor.querySelector('.adelante'),
        img= contenedor.querySelector('img'),
        tgt = e.target;
        console.log(cont);

        if(tgt==atras)
        {
            if(cont>0)
             {
                img.src =imagenes[cont-1];
                cont--;                
                console.log("atras mayor a 0, paso a valor de cont:", cont);
                contenedor.querySelector("#tituloFoto").innerHTML=titulosRef[cont];
                contenedor.querySelector("#referencia").innerHTML=textosRef[cont]; 

             }else if(cont==0){
                    img.src=imagenes[totalima -1];
                    cont =totalima - 1;
                    console.log("atras igual a 0, paso a valor de cont:", cont); 
                    contenedor.querySelector("#tituloFoto").innerHTML=titulosRef[cont];
                    contenedor.querySelector("#referencia").innerHTML=textosRef[cont];                      
                   }
           
        } 
        if(tgt==adelante)
          {
            if(cont<totalima -1)
            {   
                console.log(cont);
                cont++;
                img.src =imagenes[cont];
                
                console.log(cont);
                console.log("adelante menor a 2");
                contenedor.querySelector("#tituloFoto").innerHTML=titulosRef[cont];
                contenedor.querySelector("#referencia").innerHTML=textosRef[cont]; 


            } 
            else{
                  if(cont==totalima-1){
                     img.src=imagenes[0];
                     cont=0;
                     console.log(cont);
                     contenedor.querySelector("#tituloFoto").innerHTML=titulosRef[cont];
                     contenedor.querySelector("#referencia").innerHTML=textosRef[cont]; 
                   }
                }
          }



});

}
document.addEventListener("DOMContentLoaded", () =>{
    let contenedor = document.querySelector('.contenedor');
    carrousel(contenedor);
})




/* TIMER */

setInterval(cambiarFoto, 8000);
/*contenedor.addEventListener("mouseover", pararTimer);
contenedor.addEventListener("mouseleave", activarTimer);*/


function cambiarFoto() {
    
  console.log("entro al timer");

  img= contenedor.querySelector('img');
 
  
  if(cont<totalima -1)
          {
              img.src =imagenes[cont+1];
              cont++; 

              contenedor.querySelector("#tituloFoto").innerHTML=titulosRef[cont];
              contenedor.querySelector("#referencia").innerHTML=textosRef[cont];  
              
                

          } 
          else{
                   img.src=imagenes[0];
                   cont=0;
                   contenedor.querySelector("#tituloFoto").innerHTML=titulosRef[cont];
                   contenedor.querySelector("#referencia").innerHTML=textosRef[cont]; 
              }



}




/*function pararTimer()
{
  console.log("parar timer");
  
  

}

function activarTimer()
{
  console.log("activar timer");
  
}
*/
    


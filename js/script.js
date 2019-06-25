/*Uso de temporizador para a troca das funções!
*Tentei colocar a variável name de evento ID em escopo global,
*porém quando tento tirar para encurtar o CODE o slide não funciona!
*/

let contador = 3000;

function um(){
    let image = document.getElementById('id')
    image.src='img/um.jpg';
    image.style.animationName='move';
    setTimeout("dois()", contador)
}


function dois(){
    let image = document.getElementById('id')
    image.src='img/dois.jpg';
    image.style.animationName='moveDois';
    setTimeout("tres()", contador)
}


function tres(){
    let image = document.getElementById('id')
    image.src='img/tres.jpg';
    image.style.animationName='moveTres';
    setTimeout("um()", contador)
}
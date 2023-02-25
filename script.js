const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');



const relogio = setInterval(function time() {
    let dateTody = new Date();
    let hrs = dateTody.getHours();
    let minut = dateTody.getMinutes();
    let segdos = dateTody.getSeconds();

    if (hrs < 10) hrs = '0' + hrs

    if(minut < 10) minut = '0' + minut
    
    if(segdos < 10) segdos = '0' + segdos




    horas.textContent = hrs;
    minutos.textContent = minut;
    segundos.textContent = segdos;

})
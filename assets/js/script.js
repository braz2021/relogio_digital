const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dataToday= new Date();
    let hr = dataToday.getHours();
    let min = dataToday.getMinutes();
    let s = dataToday.getSeconds();

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
}, 1000);
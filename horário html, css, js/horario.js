const data = new Date();
let dia = data.getDay();
switch (dia) {
    case (0): dia = 'Domingo';
    break
    case (1): dia = 'Segunda-feira';
    break
    case (2): dia = 'Terça-feira';
    break
    case (3): dia = 'Quarta-feira';
    break
    case (4): dia = 'Quinta-feira';
    break
    case (5): dia = 'Sexta-feira';
    break
    case (6): dia = 'Sábado';
}
const hora = data.getHours() < 10 ? `0${data.getHours()}` : data.getHours();
// let hora = prompt('hora');
// if (hora > 24) {
//     alert('Hora inválida');
//     hora = 24;
// }
// hora = hora < 10 ? 0 + hora : hora;
const minuto = data.getMinutes() < 10 ? `0${data.getMinutes()}` : data.getMinutes();;
const horario = `Hoje é ${dia}<br> e são ${hora} horas e ${minuto} minutos!`;
document.querySelector('h2').innerHTML = horario;

let body = document.querySelector('body');
let fotoMenor = document.querySelector('#menor');
let fotoMedia = document.querySelector('#media');
let fotoMaior = document.querySelector('#maior');

const ajuste = () => {
     if (hora <= 06) {
         body.style.backgroundColor = '#233';
         fotoMenor.setAttribute('srcset', 'fotos/fotoMadrugada300px.jpg');
         fotoMedia.setAttribute('srcset', 'fotos/fotoMadrugada600px.jpg');
         fotoMaior.setAttribute('srcset', 'fotos/fotoMadrugada1200px.jpg');
     } else if (hora <= 12) {
         body.style.backgroundColor = '#fa0';
         fotoMenor.setAttribute('srcset', 'fotos/fotoManhã300px.jpg');
         fotoMedia.setAttribute('srcset', 'fotos/fotoManhã600px.jpg');
         fotoMaior.setAttribute('srcset', 'fotos/fotoManhã1200px.jpg');
     } else if (hora <= 18) {
         body.style.backgroundColor = '#f70';
         fotoMenor.setAttribute('srcset', 'fotos/fotoTarde300px.jpg');
         fotoMedia.setAttribute('srcset', 'fotos/fotoTarde600px.jpg');
         fotoMaior.setAttribute('srcset', 'fotos/fotoTarde1200px.jpg');
    } else {
         body.style.backgroundColor = '#003';
         fotoMenor.setAttribute('srcset', 'fotos/fotoNoite300px.png');
         fotoMedia.setAttribute('srcset', 'fotos/fotoNoite600px.png');
         fotoMaior.setAttribute('srcset', 'fotos/fotoNoite1200px.png');
    }
}

ajuste();
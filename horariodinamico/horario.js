let hora;
let tempo = 10;

setInterval(() => {
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
    hora = data.getHours() < 10 ? `0${data.getHours()}` : data.getHours();
    const minuto = data.getMinutes() < 10 ? `0${data.getMinutes()}` : data.getMinutes();
    const segundo = data.getSeconds() < 10 ? `0${data.getSeconds()}` : data.getSeconds();
    const horario = `Hoje é ${dia} <br/> ${hora} horas, ${minuto} minutos e ${segundo} segundos!`;
    document.querySelector('h2').innerHTML = horario;
}, tempo);

let body = document.querySelector('body');
let fotoMenor = document.querySelector('#menor');
let fotoMedia = document.querySelector('#media');
let fotoMaior = document.querySelector('#maior');

setTimeout(() => {
    tempo = 1000;
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
}, tempo);
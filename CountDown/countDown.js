let body = document.querySelector('body');
body.classList = 'temaPadraoBody';

let relogio = document.createElement('p');
relogio.setAttribute('class', 'relogioHoraAtual');


let menu = document.createElement('div');
const criarMenu = () => {
    menu.classList.add('menu');
    body.appendChild(menu);
    menu.innerHTML = `
        <aside class="temaPadraoAside">
            <p class="flexTexto">Tema Claro</p>
            <p class="flexTexto">Tema Escuro</p>
            <p class="flexTexto">Tema Inicial</p>
            <a href="#" class="flexTexto" id="reiniciar">Reiniciar</a>
            <label for="check">            
                <p class="flexTexto">Hora Atual</p>    
            </label>
            <input type="checkbox" name="check" id="check">
        </aside>
    `;
    // tempo de espera para a que funcione a transição suave
    setTimeout(() => {
        document.querySelector('aside').setAttribute('id', 'asideTransicao')
    }, 1);
    
    document.querySelector('aside').appendChild(relogio);

    menuVisivel = true;
    body.addEventListener('click', sairDoMenu);
    
    // funcionalidade para mudar os temas
    temas = document.querySelectorAll('aside p');
    temas.forEach(element => {
        element.addEventListener('click', testeCondicionalParaMudarOTema);            
    });

    document.querySelector('a#reiniciar').addEventListener('click', reiniciar);

    document.querySelector('aside').setAttribute('class', temaAsideModificacao);
}      


let temaAsideModificacao = 'temaPadraoAside';

const mudarTema = () => {
    classeDosParagrafos = `[class*=Paragrafo]`;
    classeBody = `[class*=Body]`; 

    paragrafosModificacao = document.querySelectorAll(classeDosParagrafos);
    paragrafosModificacao.forEach(element => {
        element.setAttribute('class', classeModificacaoDosParagrafos);  
    });
    bodyModificacao = document.querySelectorAll(classeBody);
    bodyModificacao.forEach(element => {
        element.setAttribute('class', classeBodyModificacao);  
    });
    iconesModificacao = document.querySelectorAll(classeIcones);
    iconesModificacao.forEach(element => {
        element.style.color =  corIconesModificacao;                
    });
    document.querySelector('aside').setAttribute('class', temaAsideModificacao);
}


const classeIcones = '.voltarPagina';

const testeCondicionalParaMudarOTema = (evento) => {
    if (evento.target.textContent == 'Tema Claro') {
        classeModificacaoDosParagrafos = 'temaClaroParagrafo'; 
        classeBodyModificacao = 'temaClaroBody';
        corIconesModificacao = 'black';
        temaAsideModificacao = 'temaClaroAside';
        mudarTema();
    } else if (evento.target.textContent == 'Tema Escuro') {
        classeModificacaoDosParagrafos = 'temaEscuroParagrafo'; 
        classeBodyModificacao = 'temaEscuroBody';
        corIconesModificacao = 'white';
        temaAsideModificacao = 'temaEscuroAside';
        mudarTema();
    } else if (evento.target.textContent == 'Tema Inicial') {
        classeModificacaoDosParagrafos = 'temaPadraoParagrafo'; 
        classeBodyModificacao = 'temaPadraoBody';
        corIconesModificacao = 'white';
        temaAsideModificacao = 'temaPadraoAside';
        mudarTema();
    }
} 

const sairDoMenu = (evento) => {
    if (menuVisivel && evento.target.classList.value == 'menu') {
        document.querySelector('aside').setAttribute('id', 'menu');
        // tempo de espera para a que funcione a transição suave
        setTimeout(() => {
            body.removeChild(menu);
        }, 500);
        menuVisivel = false;
    }
}

const reiniciar = () => {
    body.removeChild(menu);
    clearInterval(countDown);
}

// aqui começa a parte dos cálculos do CountDown
let data;
let hora;
let minuto;
let segundo;
let horaAtual;

const countDown = () => {
    // esses são os dados de entrada que não mudam no decorrer do tempo
    tempo = document.querySelector('input#tempo');
    horaFinal = Number(tempo.value.slice(0, -3)); 
    minutoFinal = Number(tempo.value.slice(3, tempo.value .lenght));
    minutoFinal = minutoFinal == 1 ? minutoFinal = 2 : minutoFinal;
    minutoFinal = minutoFinal == 0 ? 60 :  minutoFinal - 1;
    segundoFinal = 60;
    
    // daqui para baixo todos os dados são atualizados a cada segundo
    countDownAtivo = setInterval(() => {
        data = new Date();
        hora = data.getHours();
        minuto = data.getMinutes();
        segundo = data.getSeconds();
    
    
        horasRestantes = horaFinal - hora;
        if (minutoFinal == '60') {
            horasRestantes--
            minutoFinal--
        }
        if (minutoFinal < minuto) {
            horasRestantes--
            minutosRestantes = 60 - minuto;
            minutosRestantes += minutoFinal;
        } else {
            minutosRestantes = minutoFinal - minuto;
        }
        segundosRestantes = segundoFinal - segundo;
        
        // cálculo do total dos segundos
        let segundosEmHoras = horasRestantes * 3600;
        let segundosEmMinutos = minutosRestantes * 60;
        let totalDeSegundos = segundosEmHoras + segundosEmMinutos + segundosRestantes;
        
        // cálculo dos valores exatos de horas, minutos e segundos com base no total dos segundos
        segundosCountDown = totalDeSegundos % 60;
        segundosCountDown = segundosCountDown < 10 ? `0${segundosCountDown}` : segundosCountDown;
        minutosCountDown = parseInt(totalDeSegundos / 60) % 60;
        minutosCountDown = minutosCountDown < 10 ? `0${minutosCountDown}` : minutosCountDown;
        horasCountDown = parseInt(parseInt(totalDeSegundos / 60) / 60);
        horasCountDown = horasCountDown < 10 ? `0${horasCountDown}` : horasCountDown;
        
        document.querySelector('p.display').textContent = 
            totalDeSegundos <= 0 ? '00h : 00m : 00s' : `${horasCountDown}h : ${minutosCountDown}m : ${segundosCountDown}s`
        ;
        
        // esse é apenas um relógio que mostra a hora atual
        data = new Date();
        hora = data.getHours() < 10 ? `0${data.getHours()}` : data.getHours();
        minuto = data.getMinutes() < 10 ? `0${data.getMinutes()}` : data.getMinutes();
        segundo = data.getSeconds() < 10 ? `0${data.getSeconds()}` : data.getSeconds();
        horaAtual = `${hora}h : ${minuto}m : ${segundo}s`;
        relogio.textContent = horaAtual;  
        
        // isso está aqui para corrigir minutos acrescentados na outra condicional dos minutos
        if (minutoFinal == '59') {
            minutoFinal++
        }
    }, 1000);
}

// esses são os eventos para ativação das funções
document.querySelector('form a').addEventListener('click', countDown);
document.querySelector('i#menu').addEventListener('click', criarMenu);
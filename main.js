function relogio(){//Criação de uma função data para retornar apenas as horas
    //criaHoraDosSegundos
    function getTimeFromSeconds(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    //Declaração de variaveis globais 
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;

    //iniciaRelogio
    function startClock(){
        timer = setInterval(function(){
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000);
    }


    iniciar.addEventListener('click', function(event){ 
        relogio.classList.remove('pausado');
        clearInterval(timer);
        startClock();
    })

    pausar.addEventListener('click', function(event){
        relogio.classList.add('pausado');
        clearInterval(timer);
        relogio.innerHTML
    })

    zerar.addEventListener('click', function(event){
        relogio.classList.remove('pausado'); 
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    })
}
relogio();

    // OUTRA FORMA DE FAZER CAPTURANDO OS CLICKS
/* document.addEventListener('cick', function(e){
    const el = e.target;

    if(el.classList.contains('iniciar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        tartClock();
    }

    if(el.classList.contains('pausar')){
        relogio.classList.add('pausado');
        clearInterval(timer);
        relogio.innerHTML
    }

    if(el.classList.contains('pausar')){
        relogio.classList.remove('pausado'); 
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;   
    }


}) */
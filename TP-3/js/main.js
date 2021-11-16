//-------------------------------------------------------------------------
// VARIABLES
//-------------------------------------------------------------------------
let gameContainer = document.getElementById("gameContainer");
let pipeline = document.getElementById("city");
let start = document.getElementById("start");
let bird = document.getElementById('bird');
let topPipe = document.getElementById("topPipe")
let bottomPipe = document.getElementById('bottomPipe');
let cont = 0;
let birdLeft = 100;
let birdBottom = -50;
let grav = 3;
let gap = 50;
let isGameOver = false;
let points = 0;
let contObtaculo = 1;
let checking
let pipesTop = [];
let pipesBottom = [];
let gameTimerId;
let reiniciar;
let gameOv;
let ganador;
let mje1;
let mje2;
let seconds = 59;
let minutes = 1;
let temp //= setInterval(timeLimit, 1000);
let chain;
let time = true;
let nivel = 1;

//-------------------------------------------------------------------------
// FUNCIONES PARA EL INICIO DEL JUEGO
//-------------------------------------------------------------------------

function gravity() {
    bird.style.left = birdLeft + 'px';
    bird.style.bottom = birdBottom + 'px';
    bird.style.animation = 'fly .4s steps(4) infinite';
    birdBottom -= grav;
}

function moveBird(e) {
    if (e.keyCode === 32) {
        jump();
    }
}


//En caso de que la tecla espacio esté apretada, el pájaro salta.
function jump() {
    if (birdBottom < 500) birdBottom += 50;
    bird.style.bottom = birdBottom + 'px';
}

function empezarJuego() {
    isGameOver = false;
    pipeline.style.display = `block`;
    gameTimerId = setInterval(gravity, 20);
    generatePipes();
    generateCoin();
    generateExplosion();
    setTimeout(checking = setInterval(check, 20), 4500);
    temp = setInterval(timeLimit, 1000);
    let audio = document.querySelector("audio");
    audio.volume = 0.4;
    audio.play();
    start.style.display = `none`;
}

function setBlue() {
    bird.classList.add('bird-blue');
    empezarJuego();
}

function setRed() {
    bird.classList.add('bird-red');
    empezarJuego();
}

function setGreen() {
    bird.classList.add('bird-green');
    empezarJuego();
}

//-------------------------------------------------------------------------
// FUNCIONES PARA GENERAR OBSTACULOS (TUBOS Y BOLA DE FUEGO) Y LAS MONEDAS
//-------------------------------------------------------------------------

//Se generan los obstaculos y las monedas que coleccionan puntos, en posiciones y tiempo aleatorio.
//Además se hacen los chequeos para saber si el pájaro toca alguno de los bordes de los obstáculos.
function generatePipes() {

    //se crean los elementos generando un nuevo div
    let topPipe = document.createElement('div');
    let bottomPipe = document.createElement('div');
    topPipe.classList.add('topPipe');
    bottomPipe.classList.add('bottomPipe');
    topPipe.setAttribute("id", `topPipe-${cont}`);
    bottomPipe.setAttribute("id", `bottomPipe-${cont}`);
    pipeline.appendChild(topPipe);
    pipeline.appendChild(bottomPipe);

    let randomTop = Math.floor(Math.random() * (5 - 1) + 1);
    let randomBottom = Math.floor(Math.random() * (10 - 6) + 6);

    topPipe.style.animation = `movepp${randomTop} 15s linear infinite`;
    bottomPipe.style.animation = `movepp${randomBottom} 15s linear infinite`;
    pipesTop.push(topPipe);
    pipesBottom.push(bottomPipe);

    if (cont < 5) {
        let random1 = Math.floor(Math.random() * (4000 - 2000) + 2000);
        setTimeout(generatePipes, random1);

        cont++;
    }
}

function generateCoin() {
    let coinLeft = 900;
    let coin = document.createElement('div');
    coin.classList.add('coin');
    //se genera random las posicion de las monedas
    let coinPosition = Math.floor(Math.random() * ((380 - 200) + 200));
    pipeline.appendChild(coin);
    coin.style.top = `${coinPosition}px`;

    let coinInterval = setInterval(moveCoin, 20);

    function moveCoin() {
        if (!isGameOver) {
            coinLeft -= 2;
            coin.style.left = coinLeft + 'px';

            if (coinLeft < -100) {

                //cuando el obstáculo llega al final de la pantalla, dejan de moverse y se eliminan
                clearInterval(coinInterval);
                if (coin != undefined) {
                    pipeline.removeChild(coin);
                }
            }
            // se toman los datos (x,y, alto y ancho) del pajaro
            let birdX = bird.getBoundingClientRect().x;
            let birdXw = birdX + bird.getBoundingClientRect().width;
            let birdY = bird.getBoundingClientRect().y;
            let birdYh = birdY + bird.getBoundingClientRect().height;
            //se toman los datos (x,y, alto y ancho) de la moneda
            let coinX = coin.getBoundingClientRect().x;
            let coinY = coin.getBoundingClientRect().y;
            let coinYh = coinY + coin.getBoundingClientRect().height;
            let coinXw = coinX + coin.getBoundingClientRect().width;
            if (
                ((coinX <= birdXw && coinX >= birdX) && (coinY >= birdY && coinYh <= birdYh)) ||
                ((coinYh <= birdYh && coinYh >= birdY) && (coinX >= birdX && coinX <= birdXw)) ||
                ((coinY >= birdY && coinY <= birdYh) && (coinXw <= birdXw && coinXw >= birdX)) ||
                ((coinYh <= birdYh && coinYh >= birdY) && (coinXw >= birdX && coinXw <= birdXw))) {
                points++;
                document.getElementById("points").innerHTML = ` ${points}`;
                console.log("Puntos: " + points);
                clearInterval(coinInterval);
                setTimeout(removeCoin(coin), 10001);
            }
        }
    }
    if (!isGameOver) {
        let random = Math.floor(Math.random() * (5000 - 3000) + 3000);
        setTimeout(generateCoin, random);
    }
}

function removeCoin(coin) {
    pipeline.removeChild(coin);
}

function generateExplosion() {
    let explosionLeft = 900;
    let explosion = document.createElement('div');
    explosion.classList.add('explosion');
    //se genera random las posicion de la explosion.
    let explosionPosition = Math.floor(Math.random() * ((pipeline.getBoundingClientRect().height / 2)));
    pipeline.appendChild(explosion);
    explosion.style.top = `${explosionPosition}px`;
    let explosionInterval = setInterval(moveExplosion, 10);

    function moveExplosion() {
        if (!isGameOver) {
            explosionLeft -= 2;
            explosion.style.left = explosionLeft + 'px';
            // se toman los datos (x,y, alto y ancho) del pajaro
            let birdX = bird.getBoundingClientRect().x;
            let birdXw = birdX + bird.getBoundingClientRect().width;
            let birdY = bird.getBoundingClientRect().y;
            let birdYh = birdY + bird.getBoundingClientRect().height;
            //se toman los datos (x,y, alto y ancho) de la explosion
            let expX = explosion.getBoundingClientRect().x;
            let expY = explosion.getBoundingClientRect().y;
            let expYh = expY + explosion.getBoundingClientRect().height;
            let expXw = expX + explosion.getBoundingClientRect().width;
            if (
                ((expX <= birdXw && expX >= birdX) && (expY >= birdY && expYh <= birdYh)) ||
                ((expYh <= birdYh && expYh >= birdY) && (expX >= birdX && expX <= birdXw)) ||
                ((expY >= birdY && expY <= birdYh) && (expXw <= birdXw && expXw >= birdX)) ||
                ((expYh <= birdYh && expYh >= birdY) && (expXw >= birdX && expXw <= birdXw))) {
                clearInterval(explosionInterval);
                isGameOver = true;
                gameOver();
            }

            if (explosionLeft < -145) {
                //cuando el obstáculo llega al final de la pantalla, dejan de moverse y se eliminan
                clearInterval(explosionInterval);
                pipeline.removeChild(explosion);

            }
        }
    }
    if (!isGameOver) {
        let random = Math.floor(Math.random() * (10000 - 5000) + 5000);
        setTimeout(generateExplosion, random);

    }
}

//-------------------------------------------------------------------------
// FUNCION PARA CHEQUEAR SI EL PAJARO CHOCA CON ALGUN TUBO O SE CAE
//-------------------------------------------------------------------------

function check() {

    //se toman los datos (x,y, alto y ancho) de cada obstáculo, de las monedas y del pájaro 
    let widthBird = bird.getBoundingClientRect().width;
    let heightBird = bird.getBoundingClientRect().height;
    let birdX = bird.getBoundingClientRect().x + widthBird;
    let birdY = bird.getBoundingClientRect().y + heightBird;
    let birdYT = bird.getBoundingClientRect().y;

    //Chequea si el pajaro cayo por completo
    if (birdBottom < pipeline.getBoundingClientRect().height * (-1) + heightBird) {
        gameOver();
        clearInterval(checking);
    }
    //Chequea si el pajaro se choco alguno de los tubos de arriba
    if (!isGameOver) {
        for (let i = 0; i < pipesTop.length; i++) {
            let topPipeWidth = pipesTop[i].getBoundingClientRect().width;
            let topPipeHeight = pipesTop[i].getBoundingClientRect().height;
            let topPipeX = pipesTop[i].getBoundingClientRect().x;
            let topPipeY = pipesTop[i].getBoundingClientRect().y;

            if (birdBottom < city.getBoundingClientRect().height * (-1) + heightBird ||
                (birdX >= topPipeX && birdX <= topPipeX + topPipeWidth &&
                    birdYT <= topPipeY + topPipeHeight)) {
                gameOver();
                break;
            }

        }
    }
    //Chequea si el pajaro se choco alguno de los tubos de abajo
    if (!isGameOver) {
        for (let i = 0; i < pipesBottom.length; i++) {
            let bottomPipeWidth = pipesBottom[i].getBoundingClientRect().width;
            let bottomPipeHeight = pipesBottom[i].getBoundingClientRect().height;
            let bottomPipeX = pipesBottom[i].getBoundingClientRect().x;
            let bottomPipeY = pipesBottom[i].getBoundingClientRect().y;

            if (birdX >= bottomPipeX && birdX <= bottomPipeX + bottomPipeWidth &&
                birdY >= bottomPipeY && birdY <= bottomPipeY + bottomPipeHeight) {
                gameOver();
                break;
            }
        }
    }
}

//-------------------------------------------------------------------------
// FUNCIONES PARA FINALIZAR EL JUEGO
//-------------------------------------------------------------------------

function gameOver() {
    isGameOver = true;
    clearInterval(checking);
    clearInterval(temp);
    clearInterval(temp);
    clearInterval(gameTimerId);
    pipeline.style.display = "none";
    gameOv = document.createElement('div');
    reiniciar = document.createElement('button');
    gameOv.classList.add('gameOver');
    reiniciar.classList.add('restart');
    reiniciar.id = 'restart';
    gameOv.appendChild(reiniciar);
    gameContainer.appendChild(gameOv);
    reiniciar.innerHTML = "volver a jugar"
    pipeline.remove();
    document.removeEventListener('keyup', moveBird);
    gameOv.style.display = `block`;
    document.getElementById("restart").addEventListener("click", restart);
}

function win() {
    clearInterval(checking);
    clearInterval(temp);
    pipeline.style.display = "none";
    ganador = document.createElement('div');
    mje1 = document.createElement('h1');
    mje2 = document.createElement('h2');
    reiniciar = document.createElement('button');
    ganador.classList.add('win');
    reiniciar.classList.add('reiniciar');
    reiniciar.id = 'restart';
    ganador.appendChild(mje1);
    ganador.appendChild(mje2);
    ganador.appendChild(reiniciar);
    gameContainer.appendChild(ganador);
    mje1.innerHTML = "ganaste!!"
    mje2.innerHTML = "felicitaciones"
    reiniciar.innerHTML = "volver a jugar"
    pipeline.remove();
    document.removeEventListener('keyup', moveBird);

    reiniciar.style.display = `block`;
    document.getElementById("restart").addEventListener("click", restart);
}

//-------------------------------------------------------------------------
// REINICIAR EL JUEGO LUEGO DE GANAR O PERDER
//-------------------------------------------------------------------------
function restart() {
    location.reload();
}

//-------------------------------------------------------------------------
// FUNCION DE TIEMPO
//-------------------------------------------------------------------------

//Se utilizan las variables de minutos y segundos, para generar un conteo regresivo que se puede ver 
//expresado en el dom. Además, cada 30 segundos, se cambia el escenario del juego.
function timeLimit() {
    if (seconds < 10) {
        chain = minutes + ":0" + seconds;
    } else {
        chain = minutes + ":" + seconds;
    }
    document.getElementById("time").innerHTML = chain;

    if (minutes == 0 && seconds == 0) {
        time = false;
        document.getElementById("text").innerHTML = "Se acabo el tiempo";
        clearInterval(temp);
        gameOver();
    } else if (seconds == 0) {
        document.getElementById("level").innerHTML = `${nivel}`;
        nivel++;
        if (nivel == 2) {
            win();
        }
        minutes--;
        seconds = 60;
    }
    seconds--;
}

//-------------------------------------------------------------------------
// EVENTOS
//-------------------------------------------------------------------------

//Se llama a la función que mueve el pájaro ante el evento keydown(tecla presionada)
document.addEventListener('keydown', moveBird);
//Eventos para setear el color del pájaro e iniciar el juego
document.getElementById("birdBlue").addEventListener("click", setBlue);
document.getElementById("birdRed").addEventListener("click", setRed);
document.getElementById("birdGreen").addEventListener("click", setGreen);
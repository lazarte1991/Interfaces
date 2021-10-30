

//Se crean las constantes necesarias para acceder a los elementos del dom
const bird = document.getElementById('bird');
const pipeline = document.getElementById("pipeline")
const topPipe = document.getElementById("topPipe")
const bottomPipe = document.getElementById("bottomPipe");
const container=document.getElementById("gameContainer");
const city=document.getElementById("city");

let birdLeft = 10;
let birdBottom = 100;
let gravity = 3;
let gap = 50;
let isGameOver=false;
let points=0;
let contObtaculo = 1;

    //Se crea la función startGame para que el pájaro comience el juego cayendo
    function startGame() {
        birdBottom -= gravity;
        bird.style.bottom = birdBottom + 'px';
        bird.style.left = birdLeft + 'px';
    }

    //Se usa para llamar a la funcion startGame cada 20 milisegundos
    let gameTimerId = setInterval(startGame, 20);

    //Se crea la función que mueve al pájaro si se apreta la tecla espacio
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

    //Se llama a la función que mueve el pájaro ante el evento keydown(tecla presionada)
    document.addEventListener('keydown', moveBird);


    //Se generan los obstaculos y las monedas que coleccionan puntos, en posiciones y tiempo aleatorio.
    //Además se hacen los chequeos para saber si el pájaro toca alguno de los bordes de los obstáculos.
    function generateObstacle() {
        if(!isGameOver){
            let obstacleLeft=1100;
            //se crean los elementos generando un nuevo div
            let bottomPipe = document.createElement('div');
            let topPipe = document.createElement('div');
            let coin=document.createElement('div');
            let obstacle = document.createElement('div');
            if(contObtaculo<7){
                //a cada div generado, le agregamos una clase que le dará el estilo
                bottomPipe.classList.add('bottomPipe');
                topPipe.classList.add('topPipe');
                coin.classList.add('coin');   
            }
            if (contObtaculo >7) {
                obstacle.classList.add('obstacle2');
            } 
            //se genera el alto de los tubos de mandera random, y las posiciones de las monedas y el segundo obstáculo
            let heightTpipe = Math.floor(Math.random() * ((container.getBoundingClientRect().height/2 - 100)-50) + 50);//170
            let heightBpipe = Math.floor(Math.random() * ((container.getBoundingClientRect().height - heightTpipe - 75)-50) + 50);//170
            let coinPosition= Math.floor(Math.random() * ((pipeline.getBoundingClientRect().height /2)));
            let obstacle2Position = Math.floor(Math.random() * ((pipeline.getBoundingClientRect().height / 2)));
            topPipe.style.height = `${heightTpipe}px`;  
            if(heightBpipe <= 300){
                bottomPipe.style.height = `${heightBpipe}px`;
            }else{
                heightBpipe = 299;
                bottomPipe.style.height = `${heightBpipe}px`;
            }
            let marginBottomPipe=container.getBoundingClientRect().height-heightBpipe;
            bottomPipe.style.marginTop=`${marginBottomPipe}px`;
            //se agregan los div creados a el div pipeline que actúa como contenedor
            pipeline.appendChild(topPipe);
            pipeline.appendChild(bottomPipe);
            pipeline.appendChild(coin);
            pipeline.appendChild(obstacle);
            bottomPipe.style.width='60px';  
            topPipe.style.width='60px';
            coin.style.top= `${coinPosition}px`;
            obstacle.style.top = `${obstacle2Position}px`;
            //se llama a la funcion moveObstacle cada 20 milisegundos
            let timerId = setInterval(moveObstacle, 20);
            function moveObstacle() {
                if(!isGameOver){
                    obstacleLeft -=2;
                    bottomPipe.style.left = obstacleLeft + 'px';
                    topPipe.style.left = obstacleLeft + 'px';
                    coin.style.left=obstacleLeft + 'px';
                    obstacle.style.left = obstacleLeft + 'px';
                    //se toman los datos (x,y, alto y ancho) de cada obstáculo, de las monedas y del pájaro 
                    let widthBird = bird.getBoundingClientRect().width;
                    let heightBird = bird.getBoundingClientRect().height;
                    let birdX = bird.getBoundingClientRect().x + widthBird;
                    let birdY = bird.getBoundingClientRect().y + heightBird;
                    let bottomPipeX = bottomPipe.getBoundingClientRect().x;
                    let bottomPipeY = bottomPipe.getBoundingClientRect().y;
                    let topPipeX = topPipe.getBoundingClientRect().x;
                    let topPipeY = topPipe.getBoundingClientRect().y;
                    let bottomPipeWidth = bottomPipe.getBoundingClientRect().width;
                    let bottomPipeHeight = bottomPipe.getBoundingClientRect().height;
                    let topPipeWidth = topPipe.getBoundingClientRect().width;
                    let topPipeHeight = topPipe.getBoundingClientRect().height;
                    let coinY=coin.getBoundingClientRect().y;
                    let coinX=coin.getBoundingClientRect().x;
                    let coinHeight=coin.getBoundingClientRect().height;
                    let coinWidth=coin.getBoundingClientRect().width;
                    let birdYT = bird.getBoundingClientRect().y;
                    let obstacle2Y = obstacle.getBoundingClientRect().y;
                    let obstacle2X = obstacle.getBoundingClientRect().x;
                    let obstacle2Height = obstacle.getBoundingClientRect().height;
                    let obstacle2Width = obstacle.getBoundingClientRect().width;
                    if (obstacleLeft <  100 ) {
                        //cuando el obstáculo llega al final de la pantalla, dejan de moverse y se eliminan
                        clearInterval(timerId);
                        pipeline.removeChild(bottomPipe);
                        pipeline.removeChild(topPipe);
                        pipeline.removeChild(obstacle);
                        if(coin!=undefined){
                            pipeline.removeChild(coin);
                        }
                
                    }
                    //se comparan las posiciones de los obstaculos con la posición del pájaro. En caso se coincidir dentro
                    // de los paŕametros, se termina el juego.
                    if (birdBottom<container.getBoundingClientRect().height*(-1)+heightBird || 
                        (birdX >= topPipeX && birdX <= topPipeX + topPipeWidth 
                        && birdYT <= topPipeY + topPipeHeight)||
                        ( birdX >= bottomPipeX && birdX <= bottomPipeX + bottomPipeWidth
                            && birdY >= bottomPipeY && birdY <= bottomPipeY + bottomPipeHeight
                            ||  birdX >= obstacle2X && birdX <= obstacle2X + obstacle2Width
                            && birdYT >= obstacle2Y && birdYT <= obstacle2Y + obstacle2Height )) {
                        
                        clearInterval(timerId); 
                        isGameOver = true;
                    
                        clearInterval(temp);
                        gameOver();
                    }
                    //se comparan las posiciones de las monedas con la posicion del pájaro. En caso de coincidir, se suma un punto
                    let coin2=document.createElement('div');
                    if(birdX>=coinX && birdX<= coinX+coinWidth && birdYT<=coinY+ coinHeight && !isGameOver){
                        points++;
                        document.getElementById("points").innerHTML =`${points}`;
                        coin2.classList.add('coin2');
                        pipeline.appendChild(coin2);
                        coin2.style.top= `${coinPosition}px`;
                        pipeline.replaceChild(coin2,coin);  
                    }
                }
            }
            //si el jugador no perdió, se generan los obstáculos y monedas random
            if (!isGameOver){
                let random1 = Math.floor(Math.random() * (4000 - 500) + 500);
                setTimeout(generateObstacle,random1 );//3000
                let random2 = Math.floor(Math.random() * (10 - 1) + 1);
                contObtaculo = random2;

            }  
        }
    } 

    //Se llama  a la funcion que genera los obstáculos
    generateObstacle();

    //En caso que los chequeos hayan dado positivos, se limpia el intervalo que genera el juego, se borra el div contenedor de obstaculos
    //y se limpia el temporizador. Además se setea la variable isGameOver en true para poder utilizarla en la funcion generateObstacle
    function gameOver() {
        let gameOv=document.createElement('div');
        gameOv.classList.add('gameOver');
        city.appendChild(gameOv);
        clearInterval(gameTimerId);
        isGameOver = true;
        pipeline.remove();
        document.removeEventListener('keyup', moveBird);
        clearInterval(temp);    
    }

    let seconds = 59;
    let minutes = 1;
    let temp = setInterval(timeLimit, 1000);
    let chain;
    let time = true;
    let nivel=1;

    //Se utilizan las variables de minutos y segundos, para generar un conteo regresivo que se puede ver 
    //expresado en el dom. Además, cada 30 segundos, se cambia el escenario del juego.
    function timeLimit() {
        if (seconds < 10) {
            chain = minutes + ":0" + seconds;
        } else {
            chain = "Tiempo " +minutes + ":" + seconds;
        }
        document.getElementById("text").innerHTML = chain;
    
        if (minutes == 0 && seconds == 0) {
            time = false;
            document.getElementById("text").innerHTML = "Se acabo el tiempo";
            document.getElementById("text").innerHTML = "Time's up";
            clearInterval(temp);
            gameOver();
        } else if (seconds == 0) {
            document.getElementById("level").innerHTML = `${nivel}`; 
            nivel++;
            minutes--;
            seconds = 60;
        }
        seconds--;
        if(60/2>=seconds){
            city.style.background=`url(img/b1.jpg)`;
        }
        else if(60/2<=seconds){
            city.style.background=`url(img/b3.jpg)`;
        } 
     
    }



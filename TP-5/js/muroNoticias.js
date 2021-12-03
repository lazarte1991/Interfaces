let btnLike1 = document.getElementById("botonLike1").addEventListener("click", actualizarContador1);
let btnLike2 = document.getElementById("botonLike2").addEventListener("click", actualizarContador2);

let valor2 = 2955;
let valor3 = 149;
let like1 = false;
let like2 = false;


function actualizarContador1() {
    let contador1 = document.getElementById("contadorLikes1").innerHTML = valor2 + " likes";

    if (contador1) {
        if (!like1) {
            document.getElementById("like1").src = "https://img.icons8.com/ios-filled/20/fa314a/like--v1.png";
            like1 = true;
            valor2--;
        } else {
            document.getElementById("like1").src = "https://img.icons8.com/ios-filled/20/383635/filled-like.png";
            like1 = false;
            valor2++;
        }
    }
}

function actualizarContador2() {
    let contador2 = document.getElementById("contadorLikes2").innerHTML = valor3 + " likes";
    if (contador2) {
        if (!like2) {
            document.getElementById("like2").src = "https://img.icons8.com/ios-filled/20/fa314a/like--v1.png";
            like2 = true;
            valor3--;
        } else {
            document.getElementById("like2").src = "https://img.icons8.com/ios-filled/20/383635/filled-like.png";
            like2 = false;
            valor3++;
        }
    }

}


let btnComentarios = document.getElementById("botonComentar1").addEventListener("click", actualizarComentarios1);

let valorComentarios1 = 739;

function actualizarComentarios1() {

    let div = document.querySelectorAll("div");
    for (let di of div) {
        di.classList.replace("inputComentarios", "mostrar");
    }
    if (event.keyCode == 13) {
        borrarComentarios1();
    }
}

function borrarComentarios1() {
    valorComentarios1++;
    document.getElementById("contadorComentarios1").innerHTML = valorComentarios1 + " comentarios";
    let div = document.querySelectorAll("div");
    for (let di of div) {
        di.classList.replace("mostrar", "inputComentarios");
    }
}


let btnComentarios2 = document.getElementById("botonComentar2").addEventListener("click", actualizarComentarios2);

let valorComentarios2 = 245;

function actualizarComentarios2() {

    let div = document.querySelectorAll("div");
    for (let di of div) {
        di.classList.replace("inputComentarios2", "mostrar");
    }
    if (event.keyCode == 13) {
        borrarComentarios2();
    }
}

function borrarComentarios2() {
    valorComentarios2++;
    document.getElementById("contadorComentarios2").innerHTML = valorComentarios2 + " comentarios";
    let div = document.querySelectorAll("div");
    for (let di of div) {
        di.classList.replace("mostrar", "inputComentarios2");
    }
}

let btnCompartir1 = document.getElementById("botonCompartir1").addEventListener("click", contar1);
let btnCompartir2 = document.getElementById("botonCompartir2").addEventListener("click", contar2);

let valorCompartidos1 = 503;
let valorCompartidos2 = 162;

function contar1() {
    valorCompartidos1++;
    document.getElementById("contadorCompartidos1").innerHTML = valorCompartidos1 + " compartidos";
}

function contar2() {
    valorCompartidos2++;
    document.getElementById("contadorCompartidos2").innerHTML = valorCompartidos2 + " compartidos";
}



let contactos = [{
        "nombre": "María Garcia",
        "ficha": `<div class="fichaContactoBusqueda">
                    <div>
                    <img src="./img/chica6.jpeg"/>
                    <h3>María Garcia</h3>
                    </div>
                    <button class="eliminar">Eliminar contacto</button>
        </div>`,
        "publicacion": `<div class="publicacion">
                        <div class="info">
                            <img src="./img/chica6.jpeg" alt="">
                            <h3>María Garcia</h3>
                            <!-- <h5>2 Hs</h5>  -->
                        </div>
                        <div class="imagenPublicada">
                            <img src="./img/gato.jpeg" alt="" >
                        </div>
                        <div class="contador">
                            <h5 id="contadorLikes2"> 148 likes</h5>
                            <h5 id="contadorComentarios2"> 245 comentarios</h5>
                            <h5 id="contadorCompartidos2"> 162 compartido</h5>
                        </div>
                        <div class="reacciones">
                            <button id="botonLike2">
                                <img src="https://img.icons8.com/ios-filled/20/383635/filled-like.png" id="like2"/>like
                            </button> 
                            <button id="botonComentar2"><img src="https://img.icons8.com/ios-filled/20/383635/speech-bubble-with-dots.png"/>comentar</button>
                            <button id="botonCompartir2"><img src="https://img.icons8.com/ios-filled/20/383635/forward-arrow.png"/>compartir</button>
                        </div>
                        <div class="inputComentarios2">           
                            <input id="comentariosTerceros2" cols="20" rows="8" placeholder="Escribe un mensaje aquí" onkeyup = "if(event.keyCode == 13)borrarComentarios2()"></input> 
                        </div>
                    
                    </div> `
    },
    {
        "nombre": "Matías Gonzalez",
        "ficha": `<div class="fichaContactoBusqueda">
                    <div>
                        <img src="./img/chio8.jpg"/>
                        <h3>Matías Gonzalez</h3>
                    </div>
                    <button class="eliminar">Eliminar contacto</button>
                </div>`,
        "publicacion": `<div class="publicacion">
                                    <div class="info">
                                        <img src="./img/chio8.jpg"/>
                                        <h3>Matías Gonzalez</h3>
                                        <!-- <h5>2 Hs</h5>  -->
                                    </div>
                                    <div class="imagenPublicada">
                                        <img src="./img/perro-labrador-portada.jpg" alt="" >
                                    </div>
                                    <div class="contador">
                                        <h5 id="contadorLikes"> 14 likes</h5>
                                        <h5 id="contadorComentarios"> 29 comentarios</h5>
                                        <h5 id="contadorCompartidos"> 2 compartido</h5>
                                    </div>
                                    <div class="reacciones">
                                        <button id="botonLike">
                                            <img src="https://img.icons8.com/ios-filled/20/383635/filled-like.png" id="like"/>like
                                        </button> 
                                        <button id="botonComentar"><img src="https://img.icons8.com/ios-filled/20/383635/speech-bubble-with-dots.png"/>comentar</button>
                                        <button id="botonCompartir"><img src="https://img.icons8.com/ios-filled/20/383635/forward-arrow.png"/>compartir</button>
                                    </div>
                                    <div class="inputComentarios">           
                                        <input id="comentariosTerceros" cols="20" rows="8" placeholder="Escribe un mensaje aquí" onkeyup = "if(event.keyCode == 13)borrarComentarios()"></input> 
                                    </div>
                                </div>`,



    }, {
        "nombre": "Natalia Gimenez",
        "ficha": `<div class="fichaContactoBusqueda">
                    <div>
                    <img src="./img/chica9.jpeg">
                    <h3>Natalia Gimenez</h3>
                </div>
                <button class="eliminar">Eliminar contacto</button>
                </div>`,
        "publicacion": `<div class="publicacion">
                <div class="info">
                    <img src="./img/chica9.jpeg">
                    <h3>Natalia Gimenez</h3> 
                    <div>
                    <!-- <h5>2 Hs</h5>   -->
                    </div>    
                </div>
                <div class="imagenPublicada">
                    <img src="./img/perro-labrador-portada.jpg" alt="" >
                </div>
                <div class="contador">
                    <h5 id="contadorLikes1"> 2954 likes</h5>
                    <h5 id="contadorComentarios1"> 739 comentarios</h5>
                    <h5 id="contadorCompartidos1"> 503 compartido</h5>
                </div>
                <div class="reacciones">
                    <button id="botonLike1">
                        <img src="https://img.icons8.com/ios-filled/20/383635/filled-like.png" id="like1"/>like
                    </button> 
                    <button id="botonComentar1"><img src="https://img.icons8.com/ios-filled/20/383635/speech-bubble-with-dots.png"/>comentar</button>
                    <button id="botonCompartir1"><img src="https://img.icons8.com/ios-filled/20/383635/forward-arrow.png"/>compartir</button>
                </div>
                <div class="inputComentarios">           
                    <input id="comentariosTerceros1" cols="20" rows="8" placeholder="Escribe un mensaje aquí" onkeyup = "if(event.keyCode == 13)borrarComentarios1()"></input> 
                </div>
            </div>`
    }, {
        "nombre": "Ricardo Perez",
        "ficha": `<div class="fichaContacto">
                <img src="./img/hombre7.jpeg"/>
                <h3>Ricardo Perez </h3>
            </div>`
    }
];


function buscar() {
    let str = document.getElementById("busqueda").value.toLowerCase();
    let div = document.querySelectorAll("div");
    for (let di of div) {
        di.classList.replace("muroCentral", "mensajeBuscador");
    }
    if (str == "") {
        document.querySelector(".mensajeBuscador").innerHTML = '<h2>Debe ingresar caracteres</h2>';
    } else {

        for (let contacto of contactos) {
            if (contacto.nombre.toLowerCase().includes(str)) {
                console.log(contacto.ficha);
                document.querySelector(".mensajeBuscador").innerHTML = `${contacto.ficha}`;
                if (contacto.publicacion != undefined)
                    document.querySelector(".mensajeBuscador").innerHTML += `${contacto.publicacion}`;
                break;
            } else {
                document.querySelector(".mensajeBuscador").innerHTML = '<h2>No hay resultados</h2>';
            }
        }
    }

}
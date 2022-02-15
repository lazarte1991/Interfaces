
document.querySelector("mensajeBuscador");



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
        "ficha": `<div class="fichaContacto">
                    <img src="./img/chica9.jpeg">
                    <h3>Natalia Gimenez</h3>
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
                document.querySelector(".mensajeBuscadorShow").innerHTML = `${contacto.ficha}`;
                if (contacto.publicacion != undefined)
                    // document.querySelector(".mensajeBuscador").classList.toggle("mensajeBuscadorShow");
                    document.querySelector(".mensajeBuscadorShow").innerHTML += `${contacto.publicacion}`;
                break;
            } else {
                document.querySelector(".mensajeBuscadorShow").innerHTML = '<h2>No hay resultados</h2>';
            }
        }
    }

}
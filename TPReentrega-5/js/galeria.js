document.addEventListener("DOMContentLoaded", cargarPagina);

function cargarPagina() {

    "uses strict"


    document.getElementById("desplegable").addEventListener("click", desplegarMenu);
    // document.querySelector(".menuResponsive").addEventListener("click", desplegarMenu());
    let nav = document.getElementById("botonesResponsive");
    let bloque1_Perfil = document.getElementById("bloque1_Perfil");
    let botonesResponsive = document.getElementById("botonesResponsive");
    let menuResponsive = document.getElementById("menuResponsive");

    bloque1_Perfil.style.display = `none`;
    botonesResponsive.style.display = `none`;

    let display = false;
    let intervalo = setInterval(checkResolucion, 10);

    function checkResolucion() {
        if (screen.width > 700 && screen.height > 400) {
            bloque1_Perfil.style.display = `none`;

            menuResponsive.style.display = `none`;
            if (display) {
                botonesResponsive.style.display = `none`;
            }

        } else {
            bloque1_Perfil.style.display = `flex`;
            if (!display) {
                botonesResponsive.style.display = `none`;
            }
            menuResponsive.style.display = `block`;

        }
    }

    function desplegarMenu() {
        console.log("La resolución de pantalla que tienes en este momento es de: ", +screen.width, " x ", screen.height)
        if (!display) {
            nav.style.display = `flex`;
            display = true;
        } else {
            nav.style.display = `none`;
            display = false;
        }

    }
}
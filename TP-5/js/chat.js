let txtArea = document.getElementById("txt-area");
let cuerpoChat = document.querySelector(".cuerpo-chat");


document.addEventListener('keydown', chekTextArea);
document.addEventListener('keyup', chekTextArea);
document.getElementById("send").addEventListener("click", enviar);

var messageBody = document.querySelector('#cuerpo-chat');
messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;

function chekTextArea() {
    if (txtArea.value != "") {
        document.getElementById("send").src = "https://img.icons8.com/ios-glyphs/35/975FCE/paper-plane.png";
    } else {
        document.getElementById("send").src = "https://img.icons8.com/material-rounded/35/000000/microphone.png";
    }

}

function enviar() {

    if (txtArea.value != "") {
        cuerpoChat.innerHTML += `<div class="msj-propio">
        <p>${txtArea.value}</p>
        <p class="hora">00:23</p>
        </div>`;
        txtArea.value = "";
        messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
    }

}
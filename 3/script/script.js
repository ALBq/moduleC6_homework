const input = document.querySelector('.inp');
const btn = document.querySelector('.btn');
const locBtb = document.querySelector('.btnLoc');
const messageDialog = document.querySelector('.message');
const url = 'wss://echo-ws-service.herokuapp.com/';
const websocket = new WebSocket(url);

function writeToScreen(message, face){
    let p = document.createElement("div");
    p.classList.add("face");
    if (face =='my'){
        p.style.marginLeft = 'auto';

    }
    else if(face =="answer"){
        p.style.marginRight = 'auto';

    }
    p.innerHTML= message;
    messageDialog.appendChild(p);
}
btn.addEventListener('click', () => {
    websocket.onopen = function (evt) {
        writeToScreen('Собеседник найден', 'geo');
    };

    let message = document.querySelector('.inp').value;
    if (message != '') {
        writeToScreen(message, 'my');
        websocket.send(message);
    }
    websocket.onmessage = function (evt) {
        if (evt.data.includes('www.openstreetmap.org') == false) {
            writeToScreen(evt.data, 'answer');
        }
    };
    websocket.onerror = function (evt) {
        writeToScreen('Начните диалог заново', 'geo');
    };
});

locBtb.addEventListener('click', geo);

function geo() {
    if (!navigator.geolocation) {
        alert('Ошибка');
    } else {
        navigator.geolocation.getCurrentPosition((position) => {
            const { coords } = position;
            let myGeo = `https://www.openstreetmap.org/search?query=${coords.latitude}%${coords.longitude}`;
            writeToScreen(myGeo, 'my');
            websocket.send(myGeo);
        });
    }
}


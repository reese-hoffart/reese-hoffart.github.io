const websocket = new WebSocket('ws://192.168.0.22:8080/');

websocket.onopen = function() {
    document.getElementById("console").innerHTML = document.getElementById("console").innerHTML + '[WARN] WebSocket Client Connected<br>';
    websocket.send('Hi this is web client');
};

websocket.onmessage = function(e) {
    document.getElementById("console").innerHTML = document.getElementById("console").innerHTML + '[SERVER] ' + e.data + "<br>";
};

var mousemoveLastTime = 0;
function onMouseMove(e) {
    const date = new Date();
    if(date.getTime() - mousemoveLastTime >= 50) {
        mousemoveLastTime = date.getTime();
        websocket.send('m ' + e.screenX + " " + e.screenY)
    }
}

var mousedownLastTime = 0;
function onMouseDown(e) {
    const date = new Date();
    if(date.getTime() - mousedownLastTime >= 50) {
        mousedownLastTime = date.getTime();
        websocket.send('cd ' + e.button);
    }
}

var mouseupLastTime = 0;
function onMouseUp(e) {
    const date = new Date();
    if(date.getTime() - mouseupLastTime >= 50) {
        mouseupLastTime = date.getTime();
        websocket.send('cu ' + e.button);
    }
}

var keydownLastTime = 0;
function onKeyDown(e) {
    const date = new Date();
    if(date.getTime() - keydownLastTime >= 50) {
        keydownLastTime = date.getTime();
        websocket.send('d ' + e.keyCode);
    }
}

var keyupLastTime = 0;
function onKeyUp(e) {
    const date = new Date();
    if(date.getTime() - keyupLastTime >= 50) {
        keyupLastTime = date.getTime();
        websocket.send('u ' + e.keyCode);
    }
}

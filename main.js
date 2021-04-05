var drawingCanvas=document.querySelector('canvas');
var drawingCanvasCTX2D=drawingCanvas.getContext('2d');
var circleRadiusNum=10;
var circleBorderWidthNum=2;
var circleColorNum='red';
var i=null;

drawingCanvasCTX2D.strokeStyle='red';
drawingCanvasCTX2D.lineWidth=2;

drawingCanvas.onmouseup=function(){
    i='mouseup';
};
drawingCanvas.onmouseleave=function(){
    i='mouseleave';
};
drawingCanvas.onmousedown=function(){
    i='mousedown';
};

function drawingCanvasOnMouseMove(eventVar){
    var currentMouseXNum=eventVar.clientX-drawingCanvas.offsetLeft;
    var currentMouseYNum=eventVar.clientY-drawingCanvas.offsetTop;

    drawingCanvasCTX2D.beginPath();
    drawingCanvasCTX2D.arc(currentMouseXNum, currentMouseYNum, circleRadiusNum, 0, 2*Math.PI);
    drawingCanvasCTX2D.stroke();
}

drawingCanvas.addEventListener('mousemove', drawingCanvasOnMouseMove);

function clearArea(){
    drawingCanvasCTX2D.clearRect(0, 0, 800, 800);
}

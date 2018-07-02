
var box = document.getElementById("box"),
    xOffset = document.getElementById("xOffset"),
    yOffset = document.getElementById("yOffset"),
    blur = document.getElementById("blur"),
    alpha = document.getElementById("alpha"),
    title = document.getElementById("title_size");

title.oninput = sizeChange;
xOffset.oninput = xOff;
yOffset.oninput = yOff;
blur.oninput = blurChange;
alpha.oninput = alphaChange;

function xOff() {
    console.log(this.value + ' ' + yOffset.value + ' ' + blur.value + ' ' + alpha.value/100);
    
     box.style.boxShadow = this.value + "px " + yOffset.value + 'px ' + blur.value + 'px ' + 'rgba(0, 0, 0,' + alpha.value/100 + ')';
    
}

function yOff() {    
    console.log(xOffset.value + ' ' + this.value + ' ' + blur.value + ' ' + alpha.value/100);
    box.style.boxShadow = xOffset.value + "px " + this.value + 'px ' + blur.value + 'px ' + 'rgba(0, 0, 0,' + alpha.value/100 + ')';
   
}
function blurChange() {    
    console.log(xOffset.value + ' ' + yOffset.value + ' ' + this.value + ' ' + alpha.value/100);
    box.style.boxShadow = xOffset.value + "px " + yOffset.value + 'px ' + this.value + 'px ' + 'rgba(0, 0, 0,' + alpha.value/100 + ')';
   
}
function alphaChange() {    
    console.log(xOffset.value + ' ' + yOffset.value + ' ' + blur.value + ' ' + this.value/100);
    box.style.boxShadow = xOffset.value + "px " + yOffset.value + 'px ' + blur.value + 'px ' + 'rgba(0, 0, 0,' + this.value/100 + ')';
   
}
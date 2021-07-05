var mars_imgs=["img1.jpeg","img2.jpeg","img3.jpeg","img4.jpeg"]
var canvasVar= document.getElementById("myCanvas");
var ctx= canvasVar.getContext("2d");
var RHeight= 90;
var RWidth= 100;
var RX= 10;
var random_NUM=Math.floor(Math.random()*4)
var RY= 10;
var bgIMG=mars_imgs[random_NUM];
var rIMG="rover.png";
function add() {
    BgImgTag=new Image();
    BgImgTag.onload=uploadBg;
    BgImgTag.src=bgIMG;
    RImgTag=new Image();
    RImgTag.onload=uploadRov;
    RImgTag.src=rIMG;
}
function uploadBg() {
    ctx.drawImage(BgImgTag,0,0,canvasVar.width,canvasVar.height);
}
function uploadRov() {
    ctx.drawImage(RImgTag,RX,RY,RWidth,RHeight);
}
window.addEventListener("keydown",myKD);
function myKD(e) {
    KeyCode=e.keyCode;
    if (KeyCode=="37") {
        Left();
    }
    if (KeyCode=="38") {
        Up();
    }
    if (KeyCode=="39") {
        Right();
    }
    if (KeyCode=="40") {
        Down();
    }
}
function Left() {
    if(RX>=10){
     RX=RX-10;
     uploadBg();
     uploadRov();
    }
}
function Up() {
    if(RY>=10){
     RY=RY-10;
     uploadBg();
     uploadRov();
    }
}
function Right() {
    if(RX<700){
     RX=RX+10;
     uploadBg();
     uploadRov();
    }
}
function Down() {
    if(RY<500){
     RY=RY+10;
     uploadBg();
     uploadRov();
    }
}
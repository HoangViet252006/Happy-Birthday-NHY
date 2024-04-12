const letterImage = document.getElementById('letterImage');
const content = document.getElementById('content');
const backGround = document.getElementById('bg');

const btnPlay = document.getElementById("btnPlay");
const video = document.getElementById("video");


var flag = false;
var St_Video = false;
var Hieght = content.offsetHeight;

const videoElement = document.querySelector('video');
btnPlay.addEventListener("click", function() {
    if (btnPlay.textContent == "Bấm vào hộp quà điiiiiii") {

    } else {
        flag = !flag;
        if (flag == true) {
            video.style.display = "block";
            btnPlay.style.display = "none";
            St_Video = true;
        } else {
            video.style.display = "none";
        }
    }
});


letterImage.addEventListener('click', () => {
    content.style.display = 'block';
    letterImage.style.display = 'none';
    btnPlay.textContent = "Bấm vô đây điiiiii";
    if (St_Video == true) {
        Hieght = content.offsetHeight;
        video.style.marginTop = Hieght + 100 + 'px';
    }
});

function myFunction() {
    content.style.display = 'none';
    letterImage.style.display = 'block';
}
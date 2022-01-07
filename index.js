let n1 = Math.floor(Math.random() * 10, 1);
let n2 = Math.floor(Math.random() * 10, 1);
const audio = document.getElementById("myAudio");
const img = document.getElementById("image");

document.getElementById("intext").value = n1;
document.getElementById("intext1").value = n2;

let adds = n1 + n2;

function Game() {
  var user = document.getElementById("intext2").value;

  if (user == adds) {
    document.getElementById("ans").innerHTML = "정답입니다!";
    fetch("https://source.unsplash.com/300x200?random/")
    .then((response)=>{
      console.log(response)
      document.getElementById("image").src =response.url;
    })
    
    var audio1 = new Audio("sound/right.mp3");
    audio1.loop = false; // 반복재생하지 않음
    audio1.volume = 0.5; // 음량 설정
    audio1.play(); // sound1.mp3 재생

    document.getElementById("ans").style.color = "blue";
    document.getElementById("Canvas").style.display = "block";
    setTimeout(function () {
      document.getElementById("ans").innerHTML = "";
    }, 1000);
    setTimeout(function () {
      document.getElementById("Canvas").style.display = "none";
    }, 5000);
  } else {
    document.getElementById("ans").innerHTML =
      "정답은 " + adds + " 다시해보세요";
    var audio1 = new Audio("sound/wrong.mp3");
    audio1.loop = false; // 반복재생하지 않음
    audio1.volume = 0.5; // 음량 설정
    audio1.play(); // sound1.mp3 재생

    document.getElementById("ans").style.color = "red";
    document.getElementById("Canvas").style.display = "none";

    setTimeout(function () {
      document.getElementById("ans").innerHTML = "";
    }, 1000);
  }

  if (user == adds) {
    var user = (document.getElementById("intext2").value = "");
    n1 = Math.floor(Math.random() * 10, 1);
    n2 = Math.floor(Math.random() * 10, 1);
    document.getElementById("intext").value = n1;
    document.getElementById("intext1").value = n2;

    adds = n1 + n2;
  } else {
    var user = (document.getElementById("intext2").value = "");
  }
}
let dn1 = Math.floor(Math.random() * 100, 10);
let dn2 = Math.floor(Math.random() * 100, 10);

document.getElementById("dintext").value = dn1;
document.getElementById("dintext1").value = dn2;

let addsd = dn1 + dn2;

function Game2() {
  var douser = document.getElementById("dintext2").value;

  if (douser == addsd) {
    document.getElementById("dans").innerHTML = "정답입니다!";

    var audio1 = new Audio("sound/right.mp3");
    audio1.loop = false; // 반복재생하지 않음
    audio1.volume = 0.5; // 음량 설정
    audio1.play(); // sound1.mp3 재생

    document.getElementById("dans").style.color = "blue";
    document.getElementById("Canvas").style.display = "block";
    setTimeout(function () {
      document.getElementById("dans").innerHTML = "";
    }, 1000);
    setTimeout(function () {
      document.getElementById("Canvas").style.display = "none";
    }, 5000);
  } else {
    document.getElementById("dans").innerHTML =
      "정답은 " + addsd + " 다시해보세요";
    var audio1 = new Audio("sound/wrong.mp3");
    audio1.loop = false; // 반복재생하지 않음
    audio1.volume = 0.5; // 음량 설정
    audio1.play(); // sound1.mp3 재생

    document.getElementById("dans").style.color = "red";
    document.getElementById("Canvas").style.display = "none";

    setTimeout(function () {
      document.getElementById("dans").innerHTML = "";
    }, 1000);
  }

  if (douser == addsd) {
    var douser = (document.getElementById("dintext2").value = "");
    dn1 = Math.floor(Math.random() * 100, 10);
    n2 = Math.floor(Math.random() * 100, 10);
    document.getElementById("dintext").value = dn1;
    document.getElementById("dintext1").value = dn2;

    addsd = dn1 + n2;
  } else {
    var douser = (document.getElementById("dintext2").value = "");
  }
}

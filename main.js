let num1;
let num2;
let opr = document.querySelector("#opr");
let res = document.querySelector("#res");

function fnPlus() {
  num1 = Number(document.querySelector("#num1").value);
  num2 = Number(document.querySelector("#num2").value);
  opr.innerText = "+";
  res.innerText = num1 + num2;

  if (isNaN(num1 + num2)) {
    alert("숫자만 입력해주세요");
    res.innerText = "";
    opr.innerText = "";
  }
}

function fnMinus() {
  num1 = Number(document.querySelector("#num1").value);
  num2 = Number(document.querySelector("#num2").value);
  opr.innerText = "-";
  res.innerText = num1 - num2;

  if (isNaN(num1 - num2)) {
    alert("숫자만 입력해주세요");
    res.innerText = "";
    opr.innerText = "";
  }
}

function fnMulti() {
  num1 = Number(document.querySelector("#num1").value);
  num2 = Number(document.querySelector("#num2").value);
  opr.innerText = "X";
  res.innerText = num1 * num2;

  if (isNaN(num1 * num2)) {
    alert("숫자만 입력해주세요");
    res.innerText = "";
    opr.innerText = "";
  }
}

function fnDiv() {
  num1 = Number(document.querySelector("#num1").value);
  num2 = Number(document.querySelector("#num2").value);
  opr.innerText = "/";
  res.innerText = num1 / num2;

  if (isNaN(num1 * num2)) {
    alert("숫자만 입력해주세요");
    res.innerText = "";
    opr.innerText = "";
  }
}

function Answer() {
  let user = document.getElementById("intext2").value;

  if (user == Number(res.innerHTML)) {
    document.getElementById("ans").innerHTML = "맞았습니다!";
    document.getElementById("ans").style.color = "blue";
  } else {
    document.getElementById("ans").innerHTML =
      "정답은 " + Number(res.innerHTML) + " . 틀렸습니다";
    document.getElementById("ans").style.color = "red";
  }
}

const input = document.getElementById("intext2");
input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    Answer();
  }
});

function re() {
  const re = document.getElementById("intext2");
  const re2 = document.getElementById("ans");
  re.value = null;
  re2.value = null;
}

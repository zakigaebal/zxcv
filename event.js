const input = document.getElementById("intext2");
input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    Game();
  }
});

function generate_equation() {
  n1 = Math.floor(Math.random() * 100, 10);
  n2 = Math.floor(Math.random() * 100, 10);

  document.getElementById("intext").value = n1;
  document.getElementById("intext1").value = n2;
  document.getElementById("ans").innerHTML = "";
}

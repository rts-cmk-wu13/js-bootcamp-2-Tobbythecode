
const btn = document.getElementById("my-button");
const colors = ["#eee", "#7f7"];


btn.addEventListener("click", () => {
  btn.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
   

})
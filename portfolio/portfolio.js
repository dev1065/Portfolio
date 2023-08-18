function yo() {
  alert("bhakk");
}
function show() {
  let skill1 = document.getElementById("skill1");
  skill1.onmouseover = "yo()";
  skill1.innerHTML = "Bhai meri skills dekhne se pehle apni skills to badha le";
  skill1.style.color = "blue";
  skill1.style.fontFamily = "Trebuchet";
}

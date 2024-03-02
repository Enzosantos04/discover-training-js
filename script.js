// const entao tem que ser true or false
//

function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");
  //   if (html.classList.contains("light")) {
  //     html.classList.remove("light");
  //   } else {
  //     html.classList.add("light");
  //   }

  //   peagr tag img
  const img = document.querySelector("#profile img");
  // substituir a img
  if (html.classList.contains("light")) {
    // condicao se tiver  light mode adicionar imagem light
    img.setAttribute("src", "../assets/avatar-light.png");
    img.setAttribute("alt", "profile image light");
  } else {
    // se tiver sem light mode manter  a imagem normal
    img.setAttribute("src", "../assets/avatar.png");
    img.setAttribute("alt", "profile image normal");
  }
}

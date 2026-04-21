
function changeImg() {
  let img = document.getElementById("myimg");

  if (img.src.includes("f3.jpg")) {
    img.src = "f1.jpg";
  } else if (img.src.includes("f1.jpg")) {
    img.src = "f2.jpg";
  } else {
    img.src = "f3.jpg";
  }

}
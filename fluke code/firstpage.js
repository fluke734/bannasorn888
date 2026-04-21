
function changeImg() {
  let img = document.getElementById("myimg");
  let text1 = document.getElementById("text1");
  if (img.src.includes("f3.jpg")) {
    img.src = "f1.jpg";
  } else if (img.src.includes("f1.jpg")) {
    img.src = "f2.jpg";
  } else {
    img.src = "f3.jpg";
  }
 text1.style.display = "block";
 

}


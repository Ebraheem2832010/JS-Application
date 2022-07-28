


const value = document.querySelector("#cont-img");
const btns = document.querySelectorAll(".img-s");
var imgDiv = document.querySelector(".img-div");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    var style = e.target.classList;
    if(style.contains("close"))
    imgDiv.style.transform="scale(0)";
    else
    {
      var src = e.currentTarget.src;
      value.src=src;
      imgDiv.style.transform="scale(1)";
    }
   

  }) })


  function close()
  {
    alert('work')
    imgDiv.style.transform="scale(-5)";
  }
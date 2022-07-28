
function myfun(){
  const div = document.createElement('div');
  div.classList.add('commet-cont');
  const box = document.getElementById('box');
  box.appendChild(div);

  const img = document.createElement('img');
  img.src="1.svg";
  img.classList.add('img');
  div.appendChild(img);
  const p = document.createElement('p');

  p.textContent =document.getElementById('comment').value;

  div.appendChild(p);
  



  const em=document.createElement('em');
  em.innerHTML="salama";
div.appendChild(em)
  
}



const value = document.querySelector("#cont-img");
const btns = document.querySelectorAll(".img-s");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const src = e.currentTarget.src;
    value.src=src;

  }) })
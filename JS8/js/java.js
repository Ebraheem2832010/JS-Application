 var div=document.getElementById('div');
 div.onclick=function() {
    div.innerHTML='How are  you'
    div.style.color='white'
    div.style.backgroundColor='green'
    div.style.fontFamily='cursive'
    div.style.fontSize='2.5vh'
 }


 function myfun() {
    // document.querySelector('p').innerHTML='You did it'
    document.querySelector('p').classList.toggle('active');
    document.querySelector('p').innerHTML='';
 }

 function onchangeFun() {
    var x=document.getElementById("input");
    if (x.value=="") {
        x.value="Its too short"
    }
    else
    x.value="Great job"
 }

 function onblurFun() {
    var input=document.getElementById('input1').value
    document.getElementById('const').innerHTML=input;
 }
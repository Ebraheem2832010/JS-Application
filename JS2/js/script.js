// var num=1;
// num++;
// num+=1;
// num+=10;
// num-=4;
// console.log(num);

// var Num="3"
// console.log(typeof(Num))
// document.write(typeof(Num))


// var num1=prompt('enter the first number',num1)
// var num2=prompt('enter the second number',num2)
// num1=parseInt(num1)
// num2=parseInt(num2)
// document.write(num1+num2)
// var fname=prompt('enter the first name',fname)

// var lname=prompt('enter the last mame',lname)

// fname.toString()
// lname.toString()
// document.write(fname+"    "+lname)

// var hello="Hello how are you";
// var hello2="I am fine";
// var hello3="thank you"
// console.log(hello.length)
// console.log(hello2.length)
// console.log(hello .toUpperCase())
// console.log(hello2.toLowerCase())

// // console.log(hello[12])
// // console.log(hello[17])   
// // console.log(hello2[8])
// console.log(hello[11] + hello[16]+ hello2[7]);


// var isStrong=true
// isStrong=false
// var isWeak=false
// console.log(!isWeak)
// console.log(hello.includes("css"))
// console.log(hello2.slice(4,7))
// console.log(hello.substring(2,9))
// console.log(hello3.split("k"))
// console.log(hello.replaceAll("o","c"))

function myfunction()
{
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    console.log(num1);
    console.log(num2);
   
    var oper=document.getElementById("oper").value;
    console.log(oper);
    var  result;
    if(oper=="+")
    result=num1+num2;
    else if(oper=="*")
    result=num1*num2;
    else if(oper=="/")
    result=num1/num2;
    else if(oper=="-")
    result=num1-num2;
    else
    document.getElementById("result").innerHTML="Your number isnt correct";
  
document.getElementById("result").innerHTML=result;

}
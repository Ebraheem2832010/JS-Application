 var days=['sat','sun','mon','tues','wed','thu']

for(var i=0; i<6; i++){
    // console.log("Ahmed"+i)
    // document.write('<h' +i+ '>' +i+ '</h' +i+ '>')
    if (days[i]=='tues') {
    continue;
    }
    console.log(days[i])

}

for (var r=0; r<=5; r++) {
    // document.write("<img src='assets/images/bg.jpg' width=20%  height=20%/> <br>")
    // document.write('<div></div>')
    // document.querySelectorAll('div').style.backgroundColor='Blue'
    // document.querySelectorAll('div').style.width='100px'
    // document.querySelectorAll('div').style.height='100px'

}
var sumEven=0;
var sumOdd=0;
var num =[1,2,3,4,5,6,7,8,9,10];
for (var e=0 ; e<num.length;  e++) {
    if (num[e]%2==0) 
        sumOdd+=num[e]
    else
    sumEven+=num[e]
};

console.log(sumEven);
console.log(sumOdd);

var months=['January','February','Moarch','April','May']
var inContain=months.includes('April'||'Moarch')


if (inContain) {
    console.log('Yiu have born in these months')
}
else
console.log('Yiu havent born in these months')

var z=0;
while (z<10) {
    console.log(z)
    z++
}

var  y=0
do{
    console.log(y)
    y++
}
while(y<5)

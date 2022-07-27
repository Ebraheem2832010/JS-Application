// var names = ['Ebra', 'Ahmed', 'Retaj', 'Amir']
// var ages = [24, 17, 15, 23]
// console.table(names)
// console.table(ages)
// names.push('Mohammed')
// console.table(names)
// ages.push(12)
// console.table(ages)
// // ages.pop(23)
// // console.table(ages)
// names.sort();
// console.table(names)
// console.log(names[2])
// console.log(names[names.length - 3])
// console.log("your name is " + (names[2]) + "   and your age is " + (ages[2]));
// ages.shift();
// console.table(ages)
// names.unshift("Salama");
// console.table(names);
// names.splice(3,4,"Yousef")
// console.table(names)

function grades(nums){
var percent=nums;
if(percent>90)
document.write("Exellent");
else if(percent<90&&percent>50)
document.write("Good job");
else document.write("Not good")
}
grades(100);

function arr1(names1){
console.log(names1)
}
var names2=['Apple ','Banana ','cat ','dog']
arr1(names2)

function concat_fun(arr1,arr2){
    return arr1.concat(arr2)
}
var arr1=[1,2,3,4,5]
var arr2=[6,7,8,9,10]
var res=concat_fun(arr1,arr2);
console.table(res);

function whlName(fName,lName){
    return  fName.concat(lName)
}
var fName=["Ahmed "]
var lName=["Qotaina"]
var result=whlName(fName,lName)
console.log(result)
// function welc(num1,num2) {
//     // document.write("Hello from ebra  "+name)
//     return num1*num2;
// }

// function login(username,password){
// if(username=="Ebra" && password==1234){
//     document.write("you are login ")

// }
// else
// {
//     document.write("Your login is wrong")
// }
// }

// // var name= "Salama";
// // welc(name);
// // let urName=welc(656,55);

// // document.write(urName);
// var name =prompt("enter user name");
// var pass =prompt("enter user pass");
// login(name,pass)
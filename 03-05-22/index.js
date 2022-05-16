// conditional operators
let age=19;
if(age>=18){
    console.log("eligible for voting")
}
let num=12;
if(num<5){
    console.log("baby")
}else if(num<18){
    console.log("child")
}else if(num<30){
    console.log("adult")
}else if(num<40){
    console.log("old")
}
// let day=prompt('enter the day')
let day="sunday"
if(day=="sunday"){
    console.log('it is an holiday')
}else if(day=='monday'){
    console.log('boring day')
}
else if(day=='friday'){
    console.log('fun day')
}
else if(day=='saturday'){
    console.log('party day')
}else{
    console.log('normal day')
}
// let pass=prompt('please enter the password')
let pass='hkhshk'
if(pass.length>=6){
    if(pass.indexOf(' ')){
        console.log('good job')
    }
}else{
    console.log("invalid password")
}
// let valid=prompt("input");
let valid=""
if(valid){
    console.log("truthy")
}
else{
    console.log("falsy")
}

let a=51;
// logical and
if(a>50&&a<100){
    console.log("num")
}
// logical or
if(a>50||a<100){
    console.log("num")
}
// logICAL NOT
const firstName=prompt("enter your first name")
if(!firstName){
    firstName=prompt("enter your first name")
}
const dayNum="1";
switch(dayNum){
    case '1':console.log('sunday')
    break;
    case '2':console.log('monday')
    break;
    case '3':console.log('tuesday')
    break;
    case '4':console.log('wensday')
    break;
    case '5':console.log('thursday')
    break;
    case '6':console.log('friday')
    break;
    case '':console.log('saturday')
    break;
    default:console.log('there is no day ')
}


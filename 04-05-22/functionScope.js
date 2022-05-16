let color="red"
function pick(){
    let color="green"
}
pick();
console.log(color)//the color will be red because we used let in the function
let colorr="red"
function picked(){
     colorr="green"
}
console.log(colorr);//the colorr is red
picked();
console.log(colorr)//the color will be green

// block scope 

let radius=8;
// if(radius){
//     let rad=9;
//     let msg="msg"
// }
// console.log(rad)
// console.log(msg)

// laxical scope 

function names(){
    let name=['n','a']
    function letters(){
        console.log(name[0]);
    }
    letters();
}
names();

const naveen=function(){
    return 8;
}
console.log(naveen());

// passing functions as an arguments

const p=function(){
    console.log(Math.floor(Math.random()*10))
}
const q=function(f){
    f();
    f();
}
q(p);

// returning a functions

function funct(){
    return function(){
        console.log("returned")
    }
}
const fun=funct();
console.log(fun());

const obj={
    add:function (num,num2){
        return num+num2
    },
    subtract:function (num,num2){
        return num-num2
    },
    multiply:function (num,num2){
        return num*num2
    },
    divide:function (num,num2){
        return num/num2
    }
}
const obj1={
    add (num,num2){
        return num+num2
    },
    subtract (num,num2){
        return num-num2
    },
    multiply(num,num2){
        return num*num2
    },
    divide(num,num2){
        return num/num2
    }
}
console.log( obj.add(3,4));
console.log(obj1.divide(4,2));


const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
    get(){
        console.log(`the name is ${this.name} and the adress is ${this.state}`)
    }
}
restaurant.get();

try{
    khskshls.toUpperCase();
}catch(e){
    console.log(e)
}
console.log("first")

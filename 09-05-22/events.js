let a=document.querySelector('button');
// a.onclick=function(){
//     console.log('clicked')
// }
// a.onmouseenter=()=>{
//     console.log('stop touching me')
// }
let b=document.querySelector('.btn1');
b.addEventListener('click',()=>{
    alert('clicked')
})
function click(){
    console.log('first')
}
function clicked(){
    console.log('first')
}
// a.onclick=click
// a.onclick=clicked// only one will work

a.addEventListener('click',click,{once:true})
a.addEventListener('click',clicked)

// random color

let randc=document.querySelector('.btn')
randc.addEventListener('click',()=>{
    let a=color();
    document.body.style.backgroundColor=a;
})
// function color(){
//     let rand1=Math.floor(Math.random()*255)
//     let rand2=Math.floor(Math.random()*255)
//     let rand3=Math.floor(Math.random()*255)
//     return `rgb(${rand1}, ${rand2}, ${rand3})`;
// }
// let spans=document.querySelector(".con");
// for(let i=0;i<40;i++){
//     let b=document.createElement('button')
//     b.innerText='button'
//     spans.append(b)
// }
// for(let i=0;i<40;i++){
//     let b=document.createElement('h3')
//     b.innerText='this is text'
//     spans.append(b)
// }
// let btns=document.querySelectorAll("button");
// for(let i of btns){
//     i.addEventListener('click',col);
// }
// let hds=document.querySelectorAll("h3");
// for(let i of hds){
//     i.addEventListener('click',col);
// }
// function col(){
//     this.style.backgroundColor=color()
//     this.style.color=color()
// }
const x=document.querySelector('.input');
x.addEventListener('keydown',(e)=>{
// console.log(e)
// console.log(e.code)
// console.log(e.key)
})
const form=document.querySelector('.form')
// form.addEventListener('submit',(e)=>{
//     console.log('submitted')
// })
//the above code did not display the value of input in the console
// const input=document.querySelector('input');
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     a.innerText=input.value
// })
const form1=document.querySelector('.form1');
let inp1=document.querySelector('.input1')
let inp2=document.querySelector('.input2');
let ul=document.querySelector('ul');
form1.addEventListener('submit',(e)=>{
    e.preventDefault();
    let p=document.createElement('li');
    p.innerText=`${inp1.value}-${inp2.value}`;
    ul.append(p)
})
// const form = document.querySelector('.form1')
//  const input=document.querySelectorAll('input')
// const ul=document.querySelector('ul')
// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     let li=document.createElement('li')
//     for(let i of input){
//       li.innerText+=i.value;  
//     }
//     ul.appendChild(li)
// })
const input=document.querySelector('.input');
input.addEventListener('change',(e)=>{
console.log(input.value)
})
input.addEventListener('input',(e)=>{
console.log(input.value)
    a.innerText=input.value
})
ul.addEventListener('click',function(e){
    e.target.remove();
})

// const a=document.querySelector("#c");
// console.dir(a)
// console.log(a.innerHTML);

const b=document.getElementsByTagName('img')
console.log(b)
for(let img of b){
    console.log( img.src)
}
const c=document.getElementsByClassName('con')
console.log(c)


const d=document.querySelector('#c')
console.log(d)
d.setAttribute('class','main');

const e=document.querySelector('.span')
console.log(e)
e.id="span1";



const f=document.querySelectorAll('.span')
console.log(f)

const g=document.querySelectorAll("p[class='con']")
console.log(g)

const h=document.querySelectorAll("span a")
console.log(h)
const a=document.querySelector("#c");
a.innerText="dog"
a.classList.add("purple")
a.classList.remove("purple")
// a.classList.toggle("purple")
const i=document.querySelector(".container");
console.log(i.parentElement)
console.log(i.children)
console.log(i.previousElementSibling);
console.log(i.nextElementSibling);
console.log(i.previousSibling)
console.log(i.nextSibling)



for(let img of b){
    img.style.width='100px'
}


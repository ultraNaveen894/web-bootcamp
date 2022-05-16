const request= new XMLHttpRequest();

request.onload=function(){
    console.log('loaded')
    let data=JSON.parse(this.responseText)  
    console.log(data)
};
request.onerror=function(){
    console.log('failed')
    console.log(this)
};

request.open("Get","https://newsapi.org/v2/top-headlines?country=us&apiKey=c7c5ee9fb9b7486883c4da233674f9b3")
request.send();


fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c7c5ee9fb9b7486883c4da233674f9b3')
.then(res=>{
return(res.json())
}).then((res)=>{
console.log(res.status)
}).catch(res=>{
    console.log('error')
})

const load=async()=>{
    const res=await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c7c5ee9fb9b7486883c4da233674f9b3')
    const data=await res.json();
    console.log(data);
}
load();

axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=c7c5ee9fb9b7486883c4da233674f9b3').then((res)=>{
    console.log('first')
    console.log(res)
})
let btn=document.querySelector('button')
let ul=document.querySelector('ul')

let a=async()=>{
   const url='https://newsapi.org/v2/top-headlines?country=us&apiKey=c7c5ee9fb9b7486883c4da233674f9b3';

   const data= await fetch(url)
   let json=await data.json();
   console.log(json)
   return json.articles[0].author
}
async function auther(){
    const li=document.createElement('li')
    let auth=await a();
    li.innerText=auth;
    ul.append(li);
}
btn.addEventListener('click',auther);

const con=document.querySelector(".container")
let i;
for(i=0;i<100;i++){
    const div=document.createElement('div')
    const img=document.createElement('img')
    const span=document.createElement('span')
    span.innerText=`${i+1}`
    img.src=`https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/${i}.png`
    div.append(img)
    div.append(span)
    con.appendChild(div);

}
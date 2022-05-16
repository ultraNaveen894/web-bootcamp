// const p1button=document.querySelector('#p1button')
// const p2button=document.querySelector('#p2button')
// const p1display=document.querySelector('#p1display')
// const p2display=document.querySelector('#p2display')
const reset=document.querySelector('#reset')
const playto=document.querySelector('#playto')

// let p1score=1;
// let p2score=1;
let winningScore=3;
let gameOver=false;
// p1button.addEventListener('click',function(){
//    update(pl,p2)
// })
// p2button.addEventListener('click',function(){
//     update(p2,p1)
// })
// reset.addEventListener('click',resetd)
// playto.addEventListener('change',function(){
//     winningScore=parseInt(this.value);
//     resetd();
// })
// function resetd(){
//     gameOver=false;
//     p1score=0;
//     p2score=0;
//     p1display.innerText='0'
//     p2display.innerText='0'
//     p2display.classList.remove('has-text-success','has-text-danger')
//     p1display.classList.remove('has-text-danger','has-text-success')
//     p1button.disabled=false
//         p2button.disabled=false
// }
let p1={
    score:0,
    button:document.querySelector('#p1button'),
    display:document.querySelector('#p1display')
}
let p2={
    score:0,
    button:document.querySelector('#p2button'),
    display:document.querySelector('#p2display')
}
function update(player,opponent){
    if(!gameOver){
        player.score++;
        if(player.score==winningScore){
            gameOver=true;
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled=true
        opponent.button.disabled=true
        }
        player.display.innerText= player.score;
    }
}
function resetd(){
    gameOver=false;
    p1.score=0;
    p2.score=0;
    p1.display.innerText='0'
    p2.display.innerText='0'
    p2.display.classList.remove('has-text-success','has-text-danger')
    p1.display.classList.remove('has-text-danger','has-text-success')
    p1.button.disabled=false
        p2.button.disabled=false
}
p1.button.addEventListener('click',function(){
    update(p1,p2)
 })
 p2.button.addEventListener('click',function(){
     update(p2,p1)
 })
 playto.addEventListener('change',function(){
    winningScore=parseInt(this.value);
    resetd();
})
reset.addEventListener('click',resetd)

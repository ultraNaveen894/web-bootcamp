// let num=0;
// while (num<10) {
//     console.log(num)
//     num++;
// }
// let key="naveen"
// let string=prompt("enter the key")
// while (string!=key) {
//    string= prompt("wrong key");
// }
// alert("key matched")
//  num=0;
// while (num<10) {
//     console.log(num)
//     if(num==5){
//         break;
//     }
//     num++;
// }
// let number=parseInt(prompt("enter a number"))
// while(!number){
//     number=parseInt(prompt("enter a valid number"))
// }
// let randnum=Math.floor(Math.random()*number+1)

// let guess=prompt("guess the number")
// let count=1

// while(guess!=randnum){
//     if(guess>randnum){
//         guess=prompt("its an largest number, enter an lowest number ")
//     }
//     else{
//         guess=prompt("its an lowest number, enter an largest number ")

//     }
//     count++;
// }
// console.log('you guessed in '+count+" guesses")

// for of loop

// let letters=[['r','a','g','h','u'],['n','a','v','e','e','n']];
//
// for(let x of letters){
//     for(let y of x){
//         console.log(y)
//     }
// }
// itirating strings

// for(let str of "sourav"){
//     console.log(str)
// }
// for in loop

// let sourav=['s','o','u']
// for(let s in sourav){
//     console.log(s)  //it will not work for arrays
// }
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}
// for(let r in restaurant){ 
//     console.log(`${r} : ${restaurant[r]}`)
// }
console.log(Object.keys(restaurant))
console.log(Object.values(restaurant))
console.log(Object.entries(restaurant))

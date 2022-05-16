function action(animal,color='red'){
    console.log(`${animal} is ${color}`)
}
action("tiger","orange")
action("lion")

const nums=[1,2,3,4,5,6]
const numss=[7,8,9]
console.log(nums)
console.log(...nums)

console.log(..."naveen")

console.log(...nums,...numss);

const numbers=[...nums,...numss]

const cat={ color:'black',tail:'thin'}
const dog={color:'red',hair:'thick'}

const animal={...cat,...dog}
console.log(animal)

console.log({...[1,2,3,4,5]})

console.log({..."this"})
function defaultParams(a,b,...num){
    console.log(a);
    console.log(b)
    console.log('thanks '+num)
}
defaultParams(1,2,3,4,5,6,7)

const[one,two,three,...everything]=nums;
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
const{name:namee,...all}=restaurant;
const{zzz="nan"}=restaurant
console.log(restaurant)



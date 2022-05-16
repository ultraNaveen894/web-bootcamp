const obj={name:'naveen',
lastName:'v'}

obj["name"]
obj['lastName']
// or 
obj.name
obj.lastName

// adding in to objects
obj["luckyNum"]=0;
obj.luckeyNum=0

const obj1={
    name:"naveen",
    age:22,
    letters:['n','a','v','e','e','n']
}

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}
let fullAddress=`${restaurant.address} ${restaurant.city} ${restaurant.state} ${restaurant.zipcode}`
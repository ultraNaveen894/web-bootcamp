for(let i=0;i<=10;i++){
    console.log(i)
}
for(i=0;i<20;i+=2){
    console.log(i)
}
for(i=20;i>0;i-=2){
    console.log(i)
}
// infinate looping
// for(i=20;i>0;i-=2){
//     console.log(i)
// }
let num=[1,2,3,4,5]
for(let i=0;i<num.length;i++){
    console.log(i+","+num[i]);
}
for(let i=num.length-1;i>=0;i--){
    console.log(i+","+num[i]);
}
//  nested loops

for(i=2;i<5;i++){
    console.log(`${i} tables`)
    for(let j=1;j<=10;j++){
        console.log(`${i} * ${j}=${i*j}`)
    }
}
i=num.length-1
for( ;i>=0;){
    console.log(i+","+num[i]);
    i--;
}


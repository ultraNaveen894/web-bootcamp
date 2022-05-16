let action=" "
console.log("naveen")
const list=['naveen','raghu']
while(action!='q'){
    action=prompt("what to do");
    if(action=="list"){
        for(let i=0;i<list.length;i++){
            console.log(`${i} : ${list[i]}`)
        }
    }
        else if(action=="delete"){
            action=parseInt(prompt("specify the index"))
            if(action){
                if(action<list.length){
                    list.splice(action,1);
                    alert("removed successfully")
                }
                else{
                    alert('index does not exist start again')
                }
            }
        }
     else if(action=="add"){
         action=prompt("what you are going to add")
         list.push(action);
         alert("added successfully")
     }
     else if(action=="q"){
         alert("press ok to Quit")
     }
     else{
         alert("invalid operation")
     }
         
     }

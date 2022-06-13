const bcrypt=require('bcrypt')

// const generate =async(pass)=>{
//     let salt=await bcrypt.genSalt(12)
//     const hash=await bcrypt.hash(pass,salt)
//     console.log(salt)
//     console.log(hash)
// }
const generate =async(pass)=>{
    const hash=await bcrypt.hash(pass,12)
    console.log(hash)
}

const match=async(pass,hash)=>{
    const result=await bcrypt.compare(pass,hash)
    if(result){
        console.log('matched you can log in')
    }else{
        console.log('incorrect password')
    }
}
// generate('naveen')

match('naveen','$2b$12$iVZHSxyFfC2x0fnQtWSQt.5pGV6c7y0Bwjt2Ius/7R7ZvalwtcwXS')
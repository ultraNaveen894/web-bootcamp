async function fun(){
    let data=await fetch('')
}

let form=document.querySelector('form');
let con=document.querySelector('.container');
form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    let showQuery=form.elements.query.value
    // let data= await fetch(`http://api.tvmaze.com/search/shows?q=${showQuery}`)
    // let pdata=await data.json();
    let data= await axios.get(`http://api.tvmaze.com/search/shows?q=${showQuery}`)
    console.log(data)
    data.data.forEach((e)=>{
        if(e.show.image.medium!=null){
            let imgurl=e.show.image.medium;
            let img=document.createElement('img');
            img.src=imgurl;
            con.append(img)
    }
    })
})
const keys=document.querySelector(".keys")
const search=document.querySelector(".search")
const imagespace=document.querySelector(".imagespace")

function displayimage(data){
    imagespace.innerHTML=""
data.results.forEach(element => {
    const image=document.createElement("img")
    image.classList.add("active")
    image.src=element.urls.regular;
    console.log(image);
    imagespace.appendChild(image)
   
});
}

async function handleimage(){
const searched=keys.value
if(searched===""){
    alert("Please enter the value")
    return
}
else{
const key="rCmW1ZM1RGLgp-xjZdNZTKLzUoBTOnUsByBZ901UvEA"
const url=`https://api.unsplash.com/search/photos?page=1&per_page=12&query=${searched}&client_id=${key}`;
const data= await fetch(url)
const ans=await data.json()
displayimage(ans)
}
}
search.addEventListener("click",handleimage)
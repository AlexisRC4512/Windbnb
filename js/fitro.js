

export default function filter(ciudad1){
    const d=document;
    const lugar1=document.querySelectorAll(".lugar1A");
    const menu=d.querySelector(".menu-desplegable");
    d.addEventListener('click',(e)=>{
        if(e.target.matches(ciudad1)){
            for(var i=0;i<lugar1.length;i++){
           
                lugar1[i].classList.add("filter")
            }
            e.preventDefault();
            menu.classList.remove("active")
        }

       
    })
   
}
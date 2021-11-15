

export default function filter(ciudad1,ciudad2,ciudad3,ciudad4){
    const d=document;
    const lugar1=document.querySelectorAll(".lugar1A");
    const lugar2=document.querySelectorAll(".lugar2A");
    const lugar3=document.querySelectorAll(".lugar3A");
    const lugar4=document.querySelectorAll(".lugar4A");
    const menu=d.querySelector(".menu-desplegable");
    const location=d.querySelectorAll(".location");
    const locationH1=d.querySelectorAll(".locationH1");
    d.addEventListener('click',(e)=>{
        if(e.target.matches(ciudad1)){
            for(var i=0;i<location.length;i++){
                location[i].innerHTML=`<a href="" class="col-1 m-2 text-center city location">Helsinki,Finland</a>`
            }
            for(var i=0;i<locationH1.length;i++){
                locationH1[i].innerHTML=`<h1>Helsinki,Finland</h1>`
            }
            for(var i=0;i<lugar1.length;i++){
           
                lugar1[i].classList.remove("filter")
            }
            for(var i=0;i<lugar2.length;i++){
           
                lugar2[i].classList.add("filter")
            }
            for(var i=0;i<lugar3.length;i++){
           
                lugar3[i].classList.add("filter")
            }
            for(var i=0;i<lugar4.length;i++){
           
                lugar4[i].classList.add("filter")
            }
           
            menu.classList.remove("active")
        }
        if(e.target.matches(ciudad2)){
            for(var i=0;i<lugar2.length;i++){
           
                lugar2[i].classList.remove("filter")
            }
            for(var i=0;i<lugar1.length;i++){
           
                lugar1[i].classList.add("filter")
            }
            for(var i=0;i<lugar3.length;i++){
           
                lugar3[i].classList.add("filter")
            }
            for(var i=0;i<lugar4.length;i++){
           
                lugar4[i].classList.add("filter")
            }
            for(var i=0;i<location.length;i++){
                location[i].innerHTML=`<a href="" class="col-1 m-2 text-center city location">Turku,Finland</a>`
            }
            for(var i=0;i<locationH1.length;i++){
                locationH1[i].innerHTML=`<h1>Turku,Finland</h1>`
            }
            
            menu.classList.remove("active")
        }
        if(e.target.matches(ciudad3)){
            for(var i=0;i<lugar3.length;i++){
           
                lugar3[i].classList.remove("filter")
            }
            for(var i=0;i<lugar1.length;i++){
           
                lugar1[i].classList.add("filter")
            }
            for(var i=0;i<lugar2.length;i++){
           
                lugar2[i].classList.add("filter")
            }
            for(var i=0;i<lugar4.length;i++){
           
                lugar4[i].classList.add("filter")
            }
            for(var i=0;i<location.length;i++){
                location[i].innerHTML=`<a href="" class="col-1 m-2 text-center city location">Vaasa,Finland</a>`
            }
            for(var i=0;i<locationH1.length;i++){
                locationH1[i].innerHTML=`<h1>Vaasa,Finland</h1>`
            }
           
            menu.classList.remove("active")
        }
        if(e.target.matches(ciudad4)){
            for(var i=0;i<lugar4.length;i++){
           
                lugar4[i].classList.remove("filter")
            }
            for(var i=0;i<lugar1.length;i++){
           
                lugar1[i].classList.add("filter")
            }
            for(var i=0;i<lugar3.length;i++){
           
                lugar3[i].classList.add("filter")
            }
            for(var i=0;i<lugar2.length;i++){
           
                lugar2[i].classList.add("filter")
            }
            for(var i=0;i<location.length;i++){
                location[i].innerHTML=`<a href="" class="col-1 m-2 text-center city location">Oulu,Finland</a>`
            }
            for(var i=0;i<locationH1.length;i++){
                locationH1[i].innerHTML=`<h1>Oulu,Finland</h1>`
            }
           
            menu.classList.remove("active")
        }
        e.preventDefault();
    })
    
   
}

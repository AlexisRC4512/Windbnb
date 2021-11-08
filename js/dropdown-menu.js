
export default function dropdownMenu(city,guest){
    const d=document;
    const menu=d.querySelector(".menu-desplegable");
    const city_opc=d.querySelector(".city-opc");
    const exit=d.querySelector(".exit")
        const guest_opc=d.querySelector(".guest-opc")
    d.addEventListener('click',(e)=>{
        console.log("funciona") 
        if(e.target.matches(city)){
            menu.classList.add("active");
            city_opc.classList.remove("opacidad")
            guest_opc.classList.add("opacidad");
            e.preventDefault();
        }
        if(e.target.matches(guest)){
            menu.classList.add("active");
            city_opc.classList.add("opacidad")
            guest_opc.classList.remove("opacidad");
            e.preventDefault();
        }
    })
    exit.addEventListener('click',(e)=>{
        menu.classList.remove("active")
    })
}
import dropdownMenu from "./dropdown-menu.js";
import filterNum from "./filtroNum.js";
import filter from "./fitro.js";

const d=document;
d.addEventListener("DOMContentLoaded",(e)=>{
    dropdownMenu(".city",".guest")
    filter("#city1","#city2","#city3","#city4");
    filterNum("#sumNum-Adult","#resNum-Adult","#sumNum-Kids","#resNum-Kids");
})


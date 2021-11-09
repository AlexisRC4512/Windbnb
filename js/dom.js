import dropdownMenu from "./dropdown-menu.js";
import filter from "./fitro.js";

const d=document;
d.addEventListener("DOMContentLoaded",(e)=>{
    dropdownMenu(".city",".guest")
    filter("#city1");
})


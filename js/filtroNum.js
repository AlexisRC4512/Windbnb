export default function filterNum(sumA,resA,sumB,resB){
    const d=document;
    let contador=0;
    let contador1=0;
    const contAdult=d.getElementById("cont-adult");
    const contkids=d.getElementById("cont-kids");
    const contTotal=d.getElementById("cont-total");
    contAdult.innerHTML=contador;
    contkids.innerHTML=contador1;
    d.addEventListener('click',(e)=>{
        if (e.target.matches(sumA)) {
            contador++;
            contAdult.innerHTML=contador;
            console.log("sumar")
            if(contador>20){
                contador--;
            }
        }else if (e.target.matches(resA)) {
            contador--;
            contAdult.innerHTML=contador;
            console.log("restar")
            if(contador<0){
                contador++
            };
        }
        if (e.target.matches(sumB)) {
            contador1++
            contkids.innerHTML=contador1;
            console.log("sumar")
            if(contador1>12){
                contador1--;
            }
        }else if (e.target.matches(resB)) {
            contador1--;
            contkids.innerHTML=contador1;
            console.log("restar")
            if(contador1<0){
                contador1++;
            };
        }
        contTotal.innerHTML=contador1+contador+"+Guest";
        e.preventDefault();
    })
    
}
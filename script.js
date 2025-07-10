let bill=document.getElementById("bill");
let tip=document.getElementById("tip");
let calculate=document.getElementById("calculate");
let output=document.getElementById("output");


function tipCalci(){
    let billVal=parseFloat(bill.value);
    let tipVal=parseFloat(tip.value);
    let result=billVal+(tipVal/100)*billVal;
    if (isNaN(billVal) || isNaN(tipVal)){
        output.innerText=`Total:-Enter a valid amount`;
    }
    else{
        output.innerText=`Total:-${result.toFixed(2)}`;
    }
    
}
calculate.addEventListener("click",tipCalci);
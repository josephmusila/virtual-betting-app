import { GetOdds } from "./GetOdds.js";
import { CalculateBet } from "./CalculateBet.js";
GetOdds();
let success=()=>{
    alert("bet placed succesfully");
}
document.getElementById("ok").addEventListener("click", CalculateBet);
document.getElementById("confirm").addEventListener("click",()=>{
    GetOdds();
    CalculateBet();
    success();
});
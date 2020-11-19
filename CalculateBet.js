import { GetOdds } from "./GetOdds.js";

export let CalculateBet = () => {
    let amoun= document.getElementById("stake-amount").value;
    let amount=parseFloat(amoun);
	let tax = 0.8;

	if (amount < 0) {
	} else {

			GetOdds();
			let newOdds = document.getElementById("odd").innerHTML;
            let clientWin=newOdds*amount;
            let taxedAmount=clientWin-amount;
            let newWin=taxedAmount*tax;
            
           let finalPay=newWin+amount

		let toWin = document.getElementById("win-amount");

		toWin.innerHTML = Math.ceil(finalPay) + ".00";
	}
};

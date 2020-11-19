export let GetOdds=()=>{
    document.querySelectorAll(".odds").forEach(function (item) {
		item.addEventListener("click", function () {
			let choseOdd = parseFloat(item.innerHTML);
			document.getElementById("odd").innerHTML = choseOdd;
	
			item.classList.add("chosen-odds");
		})
	})

};

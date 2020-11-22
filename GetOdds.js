export let GetOdds = () => {
	let game1home = document.getElementById("team-a-odds");
	let game1draw = document.getElementById("team-x-odds");
	let game1away = document.getElementById("team-b-odds");
	let game2home = document.getElementById("team-a1-odds");
	let game2draw = document.getElementById("team-x1-odds");
	let game2away = document.getElementById("team-b1-odds");

	let game1 = [game1home, game1draw, game1away];
	let game2 = [game2home, game2draw, game2away];

	game1.forEach(function (item) {
		item.addEventListener("click", function () {
		
			let choseOdd1 = parseFloat(item.innerHTML);

			document.getElementById("odd1").innerHTML = choseOdd1;

			item.classList.add("chosen-odds");
		});
	});
	game2.forEach(function (item) {
		item.addEventListener("click", function () {
		
			let choseOdd2 = parseFloat(item.innerHTML);

			document.getElementById("odd2").innerHTML = choseOdd2;

			item.classList.add("chosen-odds");
			
		});
	});
};

function calculateTotalOdds(){
	let game1odd=document.getElementById("odd1").innerHTML;
	
	let game2odd=document.getElementById("odd2").innerHTML;
	console.log(game2odd);
	console.log(game1odd);
}
GetOdds();
calculateTotalOdds();


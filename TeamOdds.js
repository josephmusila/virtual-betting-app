//function to generate random number
let random = () => {
	let newOdd = parseFloat((Math.random() * 10).toFixed(2));

	if (newOdd.length > 3) {
		return newOdd.toFixed(2);
	} else if (newOdd < 1) {
		return newOdd + 1;
	} else {
		return newOdd;
	}
};

let teamOdds = () => {
	document.getElementById("team-a-odds").innerHTML = random();
	document.getElementById("team-x-odds").innerHTML = random();
	document.getElementById("team-b-odds").innerHTML = random();
	document.getElementById("team-a1-odds").innerHTML = random();
	document.getElementById("team-x1-odds").innerHTML = random();
	document.getElementById("team-b1-odds").innerHTML = random();
};

teamOdds();

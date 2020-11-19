function displayCurrentTime() {
	let currentTime = new Date();

	let hours = currentTime.getHours();
	let minutes = currentTime.getMinutes();
	let seconds = currentTime.getSeconds();

	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (hours < 10) {
		hours = "0" + hours;
	}
	// add AM or PM if the hrs component is greatter than 12

	let amOrpm = hours < 12 ? "AM" : "PM";
	hours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;

	//join into a string
	let timeString = ` ${hours}: ${minutes}: ${seconds} ${amOrpm}`;

	//output

	document.getElementById("time").innerHTML = timeString;
	let timer = setTimeout(displayCurrentTime, 1000);
}
// this function will add zero before the components if the value is less than 10;

function addZero(component) {
	return component < 10 ? "0" + component : component;
}

displayCurrentTime();

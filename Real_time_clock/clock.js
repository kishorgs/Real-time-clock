
setInterval(clock , 1000);

function clock() {
	
	var time = new Date();

	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();

	if(hours >= 12)
	{
		var t = "PM";
	}
	else
	{
		var t = "AM";
	}

	if(hours < 10)
	{
		hours = "0" + hours;
	}

	if(minutes < 10)
	{
		minutes = "0" + minutes;
	}

	if(seconds < 10)
	{
		seconds = "0" + seconds;
	}

	if(hours > 12)
	{
		hours = hours - 12;
		if(hours < 10)
		{
			hours = "0" + hours;
		}
	}

	var clock = document.getElementById('clock');
	clock.innerHTML = hours +  ":" + minutes + ":" + seconds + " " + t;

}
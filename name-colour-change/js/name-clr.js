//#BG colour change by clicking button

button1=document.createElement("button");
button1.setAttribute("onclick","random()");
button1.style.backgroundColor="red";
button1.style.border="10px solid black";
button1.style.textAlign="center";
button1.innerText="CLICK";
document.body.appendChild(button1);
document.body.style.textAlign="center";


function random()
{
	var randomColor = Math.floor(Math.random()*4545);
	document.body.style.backgroundColor = '#' + randomColor;
}


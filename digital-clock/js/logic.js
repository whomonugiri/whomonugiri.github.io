var time = document.getElementsByClassName('hour-n')[0];
var sec = document.getElementsByClassName('second-n')[0];
var wday = document.getElementsByClassName('day')[0];
var ampm = document.getElementsByClassName('ampm')[0];
var setD = document.getElementsByClassName('cdate')[0];
var power = document.getElementsByClassName('switch')[0];
var body = document.getElementById('body');


var display1 = document.getElementsByClassName('display')[0];
var display2= document.getElementsByClassName('display')[1];

var sc1 = document.getElementById('sc-1');
var sc2 = document.getElementById('sc-2');
var clock = new Date();
	var cday = clock.getDay();
	switch (cday){
	case 0:
	day = "Sunday";
			break;
    case 1:
	day = "Monday";
			break;
	case 2:
	day = "Tuesday";
			break;
	case 3:
	day = "Wednesday";
			break;
	case 4:
	day = "Thusday";
			break;
	case 5:
	day = "Friday";
			break;
	case 6:
	day = "Saturday";
			break;
		default:
			day = "Smile";
	}

function backColor(){
	var bodyo = document.getElementsByClassName('body')[0];
	var color1 = "#cc"+Math.ceil(Math.random()*(1*9-1))+"a"+Math.ceil(Math.random()*(1*99-1));
	var color2 = "#ff"+Math.ceil(Math.random()*(1*9-1))+"c"+Math.ceil(Math.random()*(1*99-1));
bodyo.style.backgroundImage = "linear-gradient(45deg,"+color1+" 25%, "+color2+" 25%, "+color2+" 50%, "+color1+" 50%, "+color1+" 75%, "+color2+" 75%, "+color2+" 100%)";
	bodyo.style.backgroundSize="28.28px 28.28px";
	
}

var cDate = clock.getDate() +'/'+clock.getMonth()+'/'+clock.getFullYear();
function clockControl(){
	var clock = new Date();
	var hours = clock.getHours();
    var minutes = clock.getMinutes();
	if(minutes<10){
		minutes = '0'+minutes;
	}else{
		minutes = minutes;
	}
	
    var seconds = clock.getSeconds();
	time.innerHTML= hours + " : "+minutes;
	setD.innerHTML = cDate;
	
	
	if(seconds<10){
		sec.innerHTML = '0' + seconds;
	}else{
		sec.innerHTML = seconds;
	}
	
	if(seconds<10){
		sec.innerHTML = '0' + seconds;
	}else{
		sec.innerHTML = seconds;
	}
	
	if(hours > 11){
	ampm.innerHTML = 'PM';	
	}else{
		ampm.innerHTML = 'AM';	
		
	}
	
	wday.innerHTML = day;
}

var run = setInterval(clockControl,500);
var run2 = setInterval(backColor,1000);


power.addEventListener("click",function(){
sc1.classList.toggle('off');
sc2.classList.toggle('off');
display1.classList.toggle('dim');
display2.classList.toggle('dim');
	body.classList.toggle('body');
});


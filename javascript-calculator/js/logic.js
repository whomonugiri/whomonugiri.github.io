var display = document.getElementById("display");

function input(userInput){
  var str = display.value;
  if(userInput == null){
    display.value = "";
  }else if (userInput == 'c') {
display.value = str.substring(0, str.length-1);
  }else{
      display.value = display.value + userInput;
  }
}

function solve(){
  display.value = eval(display.value);
}

function buttonEffect(event){
event.style.boxShadow="0px 0px 0px 0px black";
}

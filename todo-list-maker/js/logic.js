var addItem = document.getElementById('item');
var infoBubble = document.getElementById('bubble');
var addButton = document.getElementById('add');
var list = document.getElementById('list');
var bubbleActive = true;


function done(){
style.display="none";
};
function bubbleControl(){
  if(bubbleActive==true){
    infoBubble.style.display="";
    infoBubble.classList.add('animated', 'zoomIn','faster')
    bubbleActive = false;
    setInterval(bubbleControl,4000);
  }else{
   infoBubble.classList.remove('zoomIn');
  infoBubble.classList.add('zoomOut')
//  infoBubble.style.display="none";
  }
};

function addToList(){
if(addItem.value.length<3){
addItem.setAttribute("placeholder","enter something to add !");
}else{
  addItem.setAttribute("placeholder","you can add more !");
  var listItem = document.createElement("DIV");
  listItem.innerHTML="<i class='tick far fa-check-circle'></i> ";
  listItem.classList.add('shadow','list-item');
  var text = document.createTextNode(addItem.value);
  listItem.appendChild(text);

  listItem.addEventListener("click",function(){
  this.style.opacity="0.7";
  this.remove();
  });

  list.appendChild(listItem);
  addItem.value="";
}

};

addItem.addEventListener("keyup",function(event){
  if(event.keyCode == 13){
    addToList();
  };
});
addItem.addEventListener("click",bubbleControl);

addButton.addEventListener("click",addToList);

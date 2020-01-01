// custom javascript is here
var drawingPad = document.getElementById("main");
var uColor = document.getElementById("color");
var selectedColor = "green";
for(i=0;i<3000;i++){
    var box = document.createElement("DIV");

    drawingPad.appendChild(box);
}



// jquery is here
$(document).ready(function(){
    $("#color").change(function(){
        selectedColor = uColor.value;
    });

    $("#eraser").click(function(){
        
            location.reload(true);
       
    });

        $("div").click(function(){
            $(this).css("background-color",selectedColor);
        });
        $("div").dblclick(function(){
            $(this).css("background-color","brown");
        });

       
    
    
});
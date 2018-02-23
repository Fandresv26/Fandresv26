"use strict";
/*codigo en js para el slide de imagenes principal.*/
var slideFotos = 1;

mostrarD(slideFotos);

function plusDivs(n) {
  'use strict';
  mostrarD(slideFotos += n);
}

function mostrarD(n) {
  'use strict';
  var i;
  var x = document.getElementsByClassName("Slides");
  if (n > x.length) {slideFotos = 1}    
  if (n < 1) {slideFotos = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideFotos-1].style.display = "block";  
}

$(document).ready(function(){

    $("#btn-toggle1").click(function(){
        $(".Abinbev").css("display", "block");
    });

    $("#salir1").click(function(){
        $(".Abinbev").css("display", "none");
    });

     $("#btn-toggle2").click(function(){
        $(".Primid").css("display", "block");
    });

    $("#salir2").click(function(){
        $(".Primid").css("display", "none");
    });

     $("#btn-toggle3").click(function(){
        $(".Oilcol").css("display", "block");
    });

    $("#salir3").click(function(){
        $(".Oilcol").css("display", "none");
    });

    $("#btn-toggle4").click(function(){
        $(".Alpesoft").css("display", "block");
    });

    $("#salir4").click(function(){
        $(".Alpesoft").css("display", "none");
    });


});
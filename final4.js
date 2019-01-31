//var a, b, c, d, e, f, g, h, i, j, k, l, m;
function boxCheck(){

var lasts=document.getElementsByClassName("last");
var score=20;

for(var i=0;i<lasts.length;i++){

if (lasts[i].checked){
  score=score+Number(lasts[i].value)
}

var result=Math.ceil(score/10)*10;



}


alert( result + "符です！" );
  }

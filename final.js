var a, b, c, d, e, f, g, h, i, j, k, l, m;
a = document.getElementById('st0').value;
b = document.getElementById('st1').value;
c = document.getElementById('st2').value;
d = document.getElementById('st3').value;
e = document.getElementById('st4').value;
f = document.getElementById('st5').value;
g = document.getElementById('st6').value;
h = document.getElementById('st7').value;
i = document.getElementById('st8').value;
j = document.getElementById('st9').value;
k = document.getElementById('st10').value;
l = document.getElementById('st11').value;
m = document.getElementById('st12').value;
function boxCheck(){
var p = [
   num1 = Number(a),
   num2 = Number(b),
   num3 = Number(c),
   num4 = Number(d),
   num5 = Number(e),　
   num6 = Number(f),
   num7 = Number(g),
   num8 = Number(h),
   num9 = Number(i),
   num10 = Number(j),　
   num11 = Number(k),
   num12 = Number(l),
   num13 = Number(m),
 ], point=[];
 for(var x=0; x<13; x++){
   point[x] = Number(p[x]);
 }

check1 = document.chbox.st0.checked;
check2 = document.chbox.st1.checked;
check3 = document.chbox.st2.checked;
check4 = document.chbox.st3.checked;
check5 = document.chbox.st4.checked;
check6 = document.chbox.st5.checked;
check7 = document.chbox.st6.checked;
check8 = document.chbox.st7.checked;
check9 = document.chbox.st8.checked;
check10 = document.chbox.st9.checked;
check11 = document.chbox.st10.checked;
check12 = document.chbox.st11.checked;
check13 = document.chbox.st12.checked;
  var sum = 20;

if (check1 == true){
  sum = sum + num1;
}
if (check2 == true){
  sum = sum + num2;
}
if (check3 == true){
  sum = sum + num3;
}
if (check4 == true){
  sum = sum + num4;
}
if (check5 == true){
  sum = sum + num5;
}
if (check6 == true){
  sum = sum + num1;
}
if (check7 == true){
  sum = sum + num2;
}
if (check8 == true){
  sum = sum + num3;
}
if (check9 == true){
  sum = sum + num4;
}
if (check10 == true){
  sum = sum + num5;
}
if (check11 == true){
  sum = sum + num1;
}
if (check12 == true){
  sum = sum + num2;
}
  //sumが空の時、警告を出す
  //for(i; i<14; i++)
alert( sum + "符です！" );
  }

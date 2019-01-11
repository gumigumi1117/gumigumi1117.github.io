var p=[
  document.getElementsByName("0").value, document.getElementsByName("1").value, document.getElementsByName("2").value,
  document.getElementsByName("3").value, document.getElementsByName("4").value, document.getElementsByName("5").value,
  document.getElementsByName("6").value, document.getElementsByName("7").value, document.getElementsByName("8").value,
  document.getElementsByName("9").value, document.getElementsByName("10").value, document.getElementsByName("11").value,
  document.getElementsByName("12").value
], point=[];
var sum = 20;
function boxCheck(){
  for(var j=0; j<13; j++){
    point[j] = Number(p[j]);
}
  //チェックされた項目を記録する変数

  //for文でチェックボックスを１つずつ確認
  for(var i=0; i<13; i++ )
  {
    //チェックされているか確認する
    if( document.chbox.elements[i].checked )
    {
          sum = sum + point[i];
    }
}
     alert( sum + "符です！" );
}

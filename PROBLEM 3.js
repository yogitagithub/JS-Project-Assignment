function myFun() {

  var i,pas,area=1;

  pas=document.table.yog.value;

  for(i=1; i<=pas; i++)
    {
      area = (1.7320*i*i)/4;
    }
  
  document.table.nut.value=area.toFixed(2);
  
}
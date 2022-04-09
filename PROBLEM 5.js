function Hwork() {

  var i,snap,plant=1;

  snap=document.mars.jupiter.value;

  for(i=1; i<=snap; i++)
    {
      plant=snap*(9/5)+32;
    }
  
  document.mars.uranus.value=plant.toFixed(2);
  
}
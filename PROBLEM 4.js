function Sswing() {

  var venus;

  venus=document.planet.govind.value;

  if(venus<1 || venus>12) 
  {
    outputText="Error";
  }
  else if(venus==2)
  {
    outputText=28;
  }
  else if(venus==4)
  {
    outputText=30;
  }
  else if(venus==6)
  {
    outputText=30 
  }
  else if(venus==9)
  {
    outputText=30;
  }
  else if(venus==11)
  {
    outputText=30;
  }
  else
  {
    outputText=31;
  }
  
  var show = document.getElementById("pluto");
  show.innerHTML  = outputText;
  
} 
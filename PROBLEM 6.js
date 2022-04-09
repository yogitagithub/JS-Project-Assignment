function Hcwork() {

  var i,pencil,sum=0;

  pencil=document.state.city.value;

  for(i=0; i<=pencil; i++)
    {
      sum=sum+i;
    }
  
  document.state.place.value=sum;
  
}
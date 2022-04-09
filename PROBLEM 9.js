function Hwater() {

  var a, b, c, rootPart, root1, root2;

  a=document.pluto.ani.value;
  b=document.pluto.moon.value;
  c=document.pluto.sun.value;

  rootPart = Math.sqrt(b*b-4*a*c);
  flip = 2*a;

  root1 = (-b + rootPart)/flip;
  root2 = (-b - rootPart)/flip;
  
  document.pluto.cool.value=root1.toFixed(2)+","+root2.toFixed(2);

}
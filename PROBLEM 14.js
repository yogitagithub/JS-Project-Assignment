function Household() {

var n1 = document.getElementById("draw").value;

  var nas2 = document.getElementById("paint").value;

  var tin = nas2.split(' ');

  for(var i=n1; i<nas2.length; i++)
    {
      var pen = tin.pop();
      tin.unshift(pen);
    }
  
    console.log("tin");
    var come = document.getElementById("ticket");
    come.innerHTML = tin;
}

                      


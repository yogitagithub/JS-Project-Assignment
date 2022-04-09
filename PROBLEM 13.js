function Path() {

var num1 = parseInt(document.getElementById("misha").value);

  var git = 0;

  for(var i=0; i<=num1; i++)
    {
      git = git + (2*i);
    }

    var hub = document.getElementById("child");
    hub.innerHTML = git;
}
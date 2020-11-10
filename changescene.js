togglevar = true;
state={};
document.addEventListener('keypress',function (e)
{
 
  if(e.which == 32)
  {
    if(togglevar)
    {
        document.getElementById('mainscene').setAttribute('visible', 'false');
        document.getElementById('scene2').setAttribute('visible', 'true');
        let {x, y, z}= document.getElementById("cat").getAttribute("position");
        state["pos"] = {x, y, z};
        state["rot"] = document.getElementById("cat").getAttribute("rotation").y;
        console.log(state["pos"]);
        console.log(state["rot"]);
        document.getElementById("cat").setAttribute("position","0 10 0");
        document.getElementById("cat").setAttribute("rotation","0 0 0");


        document.getElementById("cam").setAttribute("camera","active",false);
        document.getElementById("cam2").setAttribute("camera","active",true);

        togglevar=false;
    
    }
    else
    
    {
        document.getElementById('mainscene').setAttribute("visible", 'true');
        document.getElementById('scene2').setAttribute('visible', 'false');
       

        document.getElementById("cam").setAttribute("camera","active",true);
        document.getElementById("cam2").setAttribute("camera","active",false);
        console.log(state["pos"]);
        console.log(state["rot"]);
        document.getElementById("cat").setAttribute("position", state["pos"])
        document.getElementById("cat").setAttribute("rotation", `0 ${state["rot"]} 0`);
        togglevar=true;
    }

  }

})
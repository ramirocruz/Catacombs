 var togglevar = true;
 var whichdoor=-1;
state={};

function changetoscene(e)
{
         
        whichdoor = e;        
        document.getElementById('mainscene').setAttribute('visible', 'false');
        document.getElementById('scene2').setAttribute('visible', 'true');
         document.getElementById("cam").setAttribute("camera","active",false);
        let {x, y, z}= document.getElementById("player").getAttribute("position");
        state["pos"] = {x, y, z};
        state["rot"] = document.getElementById("player").getAttribute("rotation").y;
        console.log(state["pos"]);
        console.log(state["rot"]);    

        
        document.getElementById("cam2").setAttribute("camera","active",true);

        if(doorscene[whichdoor].type == 0)
        {
           document.getElementById('scene2_env').setAttribute('visible', 'false');
          load_puzzle_0(whichdoor);
        }
        else
        {
          document.getElementById('scene2_env').setAttribute('visible', 'false');
          load_puzzle_1(whichdoor);
        }
   
         togglevar=false;
}

function revertback()
{
        document.getElementById('mainscene').setAttribute("visible", 'true');
        document.getElementById('scene2').setAttribute('visible', 'false');

        document.getElementById("cam").setAttribute("camera","active",true);
        document.getElementById("cam2").setAttribute("camera","active",false);
        console.log(state["pos"]);
        console.log(state["rot"]);
        document.getElementById("player").setAttribute("position", state["pos"])
        document.getElementById("player").setAttribute("rotation", `0 ${state["rot"]} 0`);
          document.getElementById("scramb").setAttribute("value","");
          document.getElementById("bg_img").setAttribute("src","");
          result="";
          document.getElementById("answer").setAttribute("value",result);
          document.getElementById("ack").setAttribute("value","");
         togglevar=true;
}




var scene_array=[]
$.getJSON("test.json", function(json) {
   
    let  words_array = getrandom(json["common"],9);
    let  img_array = getrandom(json["image"],8);

     scene_array = $.map(words_array, function(v, i) {
  return [v, img_array[i]];
});
  
});

function getrandom(arr,k)
{
  tempar=[]
  let len = arr.length;
  for(let i =0 ;i<k;i++)
  {
    let randomIndex = Math.floor(Math.random() * len);
    tempar.push(arr[randomIndex]);
    let temp =arr[randomIndex];
    arr[randomIndex] = arr[len - 1];
    arr[len - 1] = temp;
    len--; 

  }

  return tempar;
}


const map = {
  "data": [
    4, 4, 4, 4, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    4, 0, 0, 0, 4, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
    4, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
    4, 0, 0, 0, 4, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
    4, 0, 0, 0, 4, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 4, 3, 4, 4, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 0, 0, 0, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0,
    1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
    1, 0, 0, 0, 1, 0, 0, 0, 3, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0,
    1, 1, 3, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
    1, 0, 0, 0, 0, 1, 3, 1, 1, 0, 1, 1, 1, 3, 1, 0, 0, 0, 0,
    1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0,
    1, 0, 0, 0, 3, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 1, 0, 0, 0,
    1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0,
    0, 1, 3, 1, 0, 1, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 0, 0, 0,
    1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
    1, 0, 0, 0, 1, 4, 4, 1, 0, 0, 0, 3, 0, 8, 0, 0, 1, 0, 0,
    1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
    0, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0
  ],
  "height":19,
  "width":19
}


doorlist = new Map();
filled = false;
var itemval=-1;

function filllist()
{
   templist = document.getElementsByClassName("door-break");
   for(let i=0;i<templist.length;i++)
   {
     doorlist[templist[i].body.id] = templist[i];
   }
}
 
document.addEventListener('keypress',function (e)
{
 
  if(e.which == 13)
  {
   
   console.log(itemval);
      if(itemval==-1)
      return;
      
      doorlist[itemval].removeAttribute("static-body");
      doorlist[itemval].setAttribute("visible","false");
  }

})


function update_key()
{
  
  itemval = -1;
  
}


AFRAME.registerComponent('create-wall', {
  init: function () {
   
    console.log('I am ready!');
     var sceneEl = document.querySelector('a-scene');

    const WALL_SIZE = 3;
    const WALL_HEIGHT =5;
    const el = document.querySelector("#walls");
    let playerPos;

    for (var x = 0; x < map.height; x++) {
      for (var y = 0; y < map.width; y++) {
      
        const i = y * map.width + x;
        const position = `${(x - map.width / 2) * WALL_SIZE} 1.5 ${(y -
          map.height / 2) *
          WALL_SIZE}`;

        if (
          map.data[i] === 1 ||map.data[i] == 2 ||map.data[i] === 3 ||map.data[i] === 4
        ) {
          wall = document.createElement("a-box");
          el.appendChild(wall);

          wall.setAttribute("width", WALL_SIZE);
          wall.setAttribute("height", WALL_HEIGHT);
          wall.setAttribute("depth", WALL_SIZE);
          wall.setAttribute("position", position);

          if (map.data[i] === 2) {
            wall.setAttribute("color", "#000");
            wall.setAttribute("static-body", "");
          } else if (map.data[i] === 3) {
            
            wall.setAttribute("class","door-break");
            wall.setAttribute("static-body","");
            wall.setAttribute("color", "#fff");
            wall.setAttribute("material", "src: #wall-secret; repeat: 4 4");
            

          } else if (map.data[i] === 4) {
            wall.setAttribute("color", "#fff");
            wall.setAttribute("material", "src: #wall-brick; repeat: 2 2");
            wall.setAttribute("static-body", "");
          } else {
            wall.setAttribute("color", "#fff");
            wall.setAttribute("material", "src: #wall; repeat: 1 1");
            wall.setAttribute("static-body", "");
            wall.setAttribute("roughness","0.9");
           
          }
          
        }
     if (map.data[i] === 8)  {
          playerPos = position;
        }

        if (map.data[i] === 9) {
          console.log(position);
        }
      }
    }

   

   document.querySelector('#cat').setAttribute('position', playerPos);
   
  
        

filled=true;

}});


const video = document.getElementById('theaterVideo');
video.pause();
AFRAME.registerComponent('listener', {
  tick: function () {
    const userPositionz= this.el.getAttribute('position')["z"];
    const userPositionx = this.el.getAttribute('position')["x"];

    if (userPositionz <= -16 && userPositionx <= -17 ) {
      video.play();
    } else {
      video.pause();
    }
  }
});


var playerEl = document.querySelector('#cat');
playerEl.addEventListener('collide', function (e) {

  if(filled)
  {
      filllist();
      filled=false;
  }
  console.log(".......................................");
  
  console.log('Player has collided with body #' + e.detail.body.id);
  if(doorlist[e.detail.body.id] != undefined)
  {
  
    itemval = e.detail.body.id;  
    console.log("itemval updated to : "+itemval);
  }
  

});



document.getElementById("jumb").setAttribute("static-body","")

document.getElementById("jumb").addEventListener('click', () => {
  

      var WORDS     = ["San Francisco", "Austin", "Atlanta", "Boston"];
        var SCRAMBLED = ["Nas Crnfacois", "Suatni", "Ltnaaat", "Ontosb"];

       
           var randomNumber = Math.floor(Math.random() * WORDS.length);


           var randomWord = SCRAMBLED[randomNumber];

     

           var userInput = prompt ("Can you unscramble this word?" + "\n \t \t" + randomWord);

           console.log(userInput);

           if (userInput == WORDS[randomNumber]) {
            alert("Great job!");
           } else  {
            alert("Sorry you were incorrect. The answer is: " + "\n \t \t" + WORDS[randomNumber]);
           }
  
});


setInterval(update_key,3500);

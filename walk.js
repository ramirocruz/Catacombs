const W_KEY = 75; // I
const A_KEY = 74; // J
const S_KEY = 73; // K
const D_KEY = 76; // L

const player = document.getElementById('player');


let keys = {
  up: false,
  down: false,
  left: false,
  right: false,
};


var animestat = false;


document.onkeydown = (e) => {
  if (e.keyCode == W_KEY) {
    keys.up = true;
    animestat = true;
    
  } else if (e.keyCode == A_KEY) {
    keys.left = true;
    animestat = true;
    
  } else if (e.keyCode == S_KEY) {
    keys.down = true;
    animestat = true;
    
  } else if (e.keyCode == D_KEY) {
    keys.right = true;
    animestat = true;
    
  }
};

document.onkeyup = (e) => {
  if (e.keyCode == W_KEY) {
    keys.up = false;
    animestat = false;
    
  } else if (e.keyCode == A_KEY) {
    keys.left = false;
    animestat = false;
    
  } else if (e.keyCode == S_KEY) {
    keys.down = false;
    animestat = false;
    
  } else if (e.keyCode == D_KEY) {
    keys.right = false;
    animestat = false;
 
  }

  
  document.getElementById("cam").setAttribute('rotation',"0 -180 0");
  document.getElementById("cam").setAttribute('position',"0 5.5 -7");
};



const update = () => {
  // console.log(player.getAttribute('position'));
  let speed = 3.5;
  // if(animestat)
  // {
  //   player.setAttribute('animation-mixer', {timeScale: 1});
  // }
  // else
  // {
  //   player.setAttribute('animation-mixer', {timeScale: 0});
  // }
  if (keys.up) {
    let { x, y, z } = player.getAttribute('position');

    let ry = player.getAttribute('rotation').y;
    z -= (Math.cos(ry * Math.PI / 180) / 60)*speed;
    x -= (Math.sin(ry * Math.PI / 180) / 60)*speed;
    player.setAttribute('position', { x, y, z });
  } else if (keys.down) {
    let { x, y, z } = player.getAttribute('position');
    let ry = player.getAttribute('rotation').y;
    z += (Math.cos(ry * Math.PI / 180) / 60)*speed;
    x += (Math.sin(ry * Math.PI / 180) / 60)*speed;
    player.setAttribute('position', { x, y, z });
  }

  if (keys.left) {
    let { x, y, z } = player.getAttribute('rotation');
    y += 0.8;
    player.setAttribute('rotation', { x, y, z });
  } else if (keys.right) {
    let { x, y, z } = player.getAttribute('rotation');
    y -= 0.8;
    player.setAttribute('rotation', { x, y, z });
  }


};

setInterval(update, 10);

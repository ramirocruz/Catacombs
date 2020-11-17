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





document.onkeydown = (e) => {
  if (e.keyCode == W_KEY) {
    keys.up = true;
    
  } else if (e.keyCode == A_KEY) {
    keys.left = true;
    
  } else if (e.keyCode == S_KEY) {
    keys.down = true;
    
  } else if (e.keyCode == D_KEY) {
    keys.right = true;
    
  }
};

document.onkeyup = (e) => {
  if (e.keyCode == W_KEY) {
    keys.up = false;
    
  } else if (e.keyCode == A_KEY) {
    keys.left = false;
    
  } else if (e.keyCode == S_KEY) {
    keys.down = false;
    
  } else if (e.keyCode == D_KEY) {
    keys.right = false;
 
  }

  
  document.getElementById("cam").setAttribute('rotation',"0 -180 0");
};


const update = () => {
  // console.log(player.getAttribute('position'));
  let speed = 4.5;
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

const W_KEY = 75; // I
const A_KEY = 74; // J
const S_KEY = 73; // K
const D_KEY = 76; // L

const cat = document.getElementById('cat');


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

  document.getElementById("cam").setAttribute('position',"0 6 -6.5");
  document.getElementById("cam").setAttribute('rotation',"0 -180 0");
};


const update = () => {
  // console.log(cat.getAttribute('position'));
  let speed = 4.5;
  if (keys.up) {
    let { x, y, z } = cat.getAttribute('position');

    let ry = cat.getAttribute('rotation').y;
    z -= (Math.cos(ry * Math.PI / 180) / 60)*speed;
    x -= (Math.sin(ry * Math.PI / 180) / 60)*speed;
    cat.setAttribute('position', { x, y, z });
  } else if (keys.down) {
    let { x, y, z } = cat.getAttribute('position');
    let ry = cat.getAttribute('rotation').y;
    z += (Math.cos(ry * Math.PI / 180) / 60)*speed;
    x += (Math.sin(ry * Math.PI / 180) / 60)*speed;
    cat.setAttribute('position', { x, y, z });
  }

  if (keys.left) {
    let { x, y, z } = cat.getAttribute('rotation');
    y += 0.8;
    cat.setAttribute('rotation', { x, y, z });
  } else if (keys.right) {
    let { x, y, z } = cat.getAttribute('rotation');
    y -= 0.8;
    cat.setAttribute('rotation', { x, y, z });
  }


};

setInterval(update, 10);

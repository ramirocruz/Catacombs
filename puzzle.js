var next_button = document.getElementById("next_btn");
var result="";

function shuffelWord (x){
    let shuffledWord = '';
    x = x.split('');
    while (x.length > 0) {
      shuffledWord +=  x.splice(x.length * Math.random() << 0, 1);
    }
    return shuffledWord;
}


function load_puzzle_0(whichdoor)
{
  let word = doorscene[whichdoor].content
  let randword = shuffelWord(word);
  document.getElementById("scramb").setAttribute("value",randword.toUpperCase());
}
function load_puzzle_1(whichdoor)     
{
  let word = doorscene[whichdoor].content;
  document.getElementById("bg_img").setAttribute("src",word)
}

function congrats()
{
  result="";
  document.getElementById("answer").setAttribute("value",result);
  document.getElementById("ack").setAttribute("value","");

  doorlist[whichdoor].removeAttribute("static-body");
  doorlist[whichdoor].setAttribute("visible","false");
  revertback();
}


function resultChecker(result,key){
    if(result.toLowerCase()==answer[key]){
        document.getElementById("hint_text").setAttribute("value","");
        document.getElementById("ack").setAttribute("value","Congratulations!");
        result="";
        
        setTimeout(congrats, 750);
        
    }

}

document.getElementById("backspace_btn").addEventListener("click",function(){
  result="";
  document.getElementById("answer").setAttribute("value",result);

})
document.getElementById("hint_btn").addEventListener("click",function()
{
  console.log("hint taken");
  var res=answer[whichdoor].toUpperCase();
  var l=res.length;
  var hintvar="";
  if(l>2)
  {
    hintvar="hint: ";
    hintvar=hintvar+res[0];    
      for(let i=1; i<l-1; i++)
      {
        if(l>7 && i==l/2)
        {
          hintvar=hintvar+" "+res[i]+" ";
        }
        else
        {
          hintvar=hintvar+" _ ";
        }
      }
    hintvar=hintvar+res[res.length-1];
  }
  document.getElementById("hint_text").setAttribute("value",hintvar);
});

var alphabets = document.getElementsByClassName("alpha");

var temp;
for(let i=0;i<alphabets.length;i++)
{
  alphabets[i].addEventListener("click",function(e)
  {  
    let char = e.path[1].getAttribute("data-thumb").substr(1).toUpperCase();
    console.log(char);
    console.log("Letter Appended");
    result=result+char;
    document.getElementById("answer").setAttribute("value",result);
    resultChecker(result,whichdoor);
  });
}

function keyboardfunc(e)
{     
      if(e.which  < 91 && e.which > 64 )
      {

      console.log(e.which - 65 );
      let char = alphabets[e.which - 65].getAttribute("data-thumb").substr(1).toUpperCase();
       console.log(char);
       alphabets[e.which - 65].firstElementChild.components.sound.playSound();
       console.log("Letter Appended");
        result=result+char;
      document.getElementById("answer").setAttribute("value",result);
      resultChecker(result,whichdoor);

      }
      else if(e.which > 96 && e.which < 123)
      {
        console.log(e.which - 97 );
        let char = alphabets[e.which - 97].getAttribute("data-thumb").substr(1).toUpperCase();
        alphabets[e.which - 97].firstElementChild.components.sound.playSound();
        console.log(char);
        console.log("Letter Appended");
          result=result+char;
        document.getElementById("answer").setAttribute("value",result);
        resultChecker(result,whichdoor);
         
      }
  
      else if(e.which == 32)
      {
          alphabets[0].firstElementChild.components.sound.playSound();
         result="";
         document.getElementById("answer").setAttribute("value",result);
      }
}
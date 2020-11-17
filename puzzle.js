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
  document.getElementById("scramb").setAttribute("value","");
  doorlist[whichdoor].removeAttribute("static-body");
  doorlist[whichdoor].setAttribute("visible","false");
  revertback();
}


function resultChecker(result,key){
    if(result.toLowerCase()==answer[key]){
        document.getElementById("ack").setAttribute("value","Congratulations!");
        result="";
        
        setTimeout(congrats, 2000);
        
    }

}

document.getElementById("backspace_btn").addEventListener("click",function(){
  result="";
  document.getElementById("answer").setAttribute("value",result);

})

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
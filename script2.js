 const words = ["javascript", "website", "html", "document", "course", "new","apple","banana","cat","dog","elephant","frog","goat","horse","ice","joker"];

len=words.length
let score=0;

var imageNo=0

var next_button = document.getElementById("next_btn");
var back_button = document.getElementById("back_btn");

var result=""

function shuffelWord (x){
    var shuffledWord = '';
    x = x.split('');
    while (x.length > 0) {
      shuffledWord +=  x.splice(x.length * Math.random() << 0, 1);
    }
    return shuffledWord;
}
var scrambled=[]

function createScramble(){
    len=words.length;
    for(let i=0;i<len;i++){
        scrambled.push(shuffelWord(words[i]));
    }
}



function createWord() {
    let randomIndex = Math.floor(Math.random() * scrambled.length);
    let tempWord = scrambled[randomIndex];
    return tempWord;
}

function resultChecker(result){

    for(let i=0;i<len;i++){
        if(result.toLowerCase()==words[i]){
            score=score+1;
            document.getElementById("ack").setAttribute("value","correct guess!");
            result="";

        }
    }

}

createScramble()
scramble=createWord()
document.getElementById("scramb").setAttribute("value",scramble);
next_button.addEventListener("click", function(){
  
  ////console.log("Next Image");
    scramble=createWord()
    document.getElementById("scramb").setAttribute("value",scramble);
    document.getElementById("ack").setAttribute("value","");
    result="";
    document.getElementById("answer").setAttribute("value",result);
});


back_button.addEventListener("click",function(){

    result=result.slice(0,-1);
    document.getElementById("answer").setAttribute("value",result);

});

///////////////////////////// ROW #1 //////////////////////////////////////

document.getElementById("aclick").addEventListener("click", function(){  
  console.log("Letter Appended");
  result=result+'A';
  document.getElementById("answer").setAttribute("value",result);
  resultChecker(result);
});
document.getElementById("bclick").addEventListener("click", function(){  
  //console.log("Letter Appended");
  result=result+'B';
  document.getElementById("answer").setAttribute("value",result);
  resultChecker(result);
});
document.getElementById("cclick").addEventListener("click", function(){  
  //console.log("Letter Appended");
  result=result+'C';
  document.getElementById("answer").setAttribute("value",result);
  resultChecker(result);
  
});

document.getElementById("dclick").addEventListener("click", function(){  
  //console.log("Letter Appended");
  result=result+'D';
  document.getElementById("answer").setAttribute("value",result);
  resultChecker(result);
});
document.getElementById("eclick").addEventListener("click", function(){  
  //console.log("Letter Appended");
  result=result+'E';
  document.getElementById("answer").setAttribute("value",result);
  resultChecker(result);
});
document.getElementById("fclick").addEventListener("click", function(){  
  //console.log("Letter Appended");
  result=result+'F';
  document.getElementById("answer").setAttribute("value",result);
  resultChecker(result);
  
});
document.getElementById("gclick").addEventListener("click", function(){  
  //console.log("Letter Appended");
  result=result+'G';
  document.getElementById("answer").setAttribute("value",result);
  resultChecker(result);
  
});

///////////////////////// ROW #2////////////////////////////////////////////


document.getElementById("hclick").addEventListener("click", function(){  
  //console.log("Letter Appended");
  result=result+'H';
  document.getElementById("answer").setAttribute("value",result);
  resultChecker(result);
});
document.getElementById("iclick").addEventListener("click", function(){  
  //console.log("Letter Appended");
  result=result+'I';
  document.getElementById("answer").setAttribute("value",result);
  resultChecker(result);
});
document.getElementById("jclick").addEventListener("click", function(){  
  //console.log("Letter Appended");
  result=result+'J';
  document.getElementById("answer").setAttribute("value",result);
  resultChecker(result);
  
});

document.getElementById("kclick").addEventListener("click", function(){  
  //console.log("Letter Appended");
  result=result+'K';
  document.getElementById("answer").setAttribute("value",result);
  resultChecker(result);
});
document.getElementById("lclick").addEventListener("click", function(){  
  //console.log("Letter Appended");
  result=result+'L';
  document.getElementById("answer").setAttribute("value",result);
  resultChecker(result);
});
document.getElementById("mclick").addEventListener("click", function(){  
  //console.log("Letter Appended");
  result=result+'M';
  document.getElementById("answer").setAttribute("value",result);
  resultChecker(result);  
});
document.getElementById("nclick").addEventListener("click", function(){  
  //console.log("Letter Appended");
  result=result+'N';
  document.getElementById("answer").setAttribute("value",result);
  resultChecker(result);
  
});
document.getElementById("oclick").addEventListener("click", function(){  
  //console.log("Letter Appended");
  result=result+'O';
  document.getElementById("answer").setAttribute("value",result);
  resultChecker(result);
  
});
document.getElementById("pclick").addEventListener("click", function(){  
  //console.log("Letter Appended");
  result=result+'P';
  document.getElementById("answer").setAttribute("value",result);
  resultChecker(result);
  
});

////////////////////////////  ROW #3//////////////////////////////////////

document.getElementById("qclick").addEventListener("click", function(){  
  //console.log("Letter Appended");
  result=result+'Q';
  document.getElementById("answer").setAttribute("value",result);
  resultChecker(result);
  
});

document.getElementById("rclick").addEventListener("click", function(){  
  //console.log("Letter Appended");
  result=result+'R';
  document.getElementById("answer").setAttribute("value",result);
  resultChecker(result);

  
});

document.getElementById("sclick").addEventListener("click", function(){  
  //console.log("Letter Appended");
  result=result+'S';
  document.getElementById("answer").setAttribute("value",result);
  resultChecker(result);
  
});


document.getElementById("tclick").addEventListener("click", function(){  
  //console.log("Letter Appended");
  result=result+'T';
  document.getElementById("answer").setAttribute("value",result);
  resultChecker(result);
  
});

document.getElementById("uclick").addEventListener("click", function(){  
  //console.log("Letter Appended");
  result=result+'U';
  document.getElementById("answer").setAttribute("value",result);
  resultChecker(result);
  
});


document.getElementById("vclick").addEventListener("click", function(){  
  //console.log("Letter Appended");
  result=result+'V';
  document.getElementById("answer").setAttribute("value",result);
  resultChecker(result);
  
});

document.getElementById("wclick").addEventListener("click", function(){  
  //console.log("Letter Appended");
  result=result+'W';
  document.getElementById("answer").setAttribute("value",result);
  resultChecker(result);
  
});

document.getElementById("xclick").addEventListener("click", function(){  
  //console.log("Letter Appended");
  result=result+'X';
  document.getElementById("answer").setAttribute("value",result);
  resultChecker(result);
  
});

document.getElementById("yclick").addEventListener("click", function(){  
  //console.log("Letter Appended");
  result=result+'Y';
  document.getElementById("answer").setAttribute("value",result);
  resultChecker(result);
  
});

document.getElementById("zclick").addEventListener("click", function(){  
  //console.log("Letter Appended");
  result=result+'Z';
  document.getElementById("answer").setAttribute("value",result);
  resultChecker(result);
  
});

////////////////////////////////////////////////////////////////////////
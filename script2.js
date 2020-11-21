
var temp=[];
var words=[];
var scr_dict={}
len=words.length

let score=0;
var imageNo=0;

var result=""



var next_button = document.getElementById("next_btn");
var back_button = document.getElementById("back_btn");

function createWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    let tempWord = words[randomIndex];
    return tempWord;
}

function resultChecker(result,scramb){

    if(scr_dict[result.toLowerCase()]==scramb){
        score=score+1;
        document.getElementById("ack").setAttribute("value","correct guess!");
        result="";
    }

}



function shuffelWord (x){
    var shuffledWord = '';
    x = x.split('');
    while (x.length > 0) {
      shuffledWord +=  x.splice(x.length * Math.random() << 0, 1);
    }
    return shuffledWord;
}

    




let showObj= function(){
    words=temp;
    //for(var i=0;i<words.length;i++){
        //words[i]=json[0].common[i];
        //console.log(words[i])
    //}
    len=words.length
    for(let i=0;i<len;i++){
        var scr=shuffelWord(words[i]);
        console.log(scr);
        scr_dict[words[i]]=scr;
    }
    scramble=scr_dict[createWord()]
    document.getElementById("scramb").setAttribute("value",scramble);



    ////////////////////buttons//////////////////////////////////////////
    next_button.addEventListener("click", function(){
  
  ////console.log("Next Image");
    scramble=scr_dict[createWord()]
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
    resultChecker(result,scramble);
    });
    document.getElementById("bclick").addEventListener("click", function(){  
    //console.log("Letter Appended");
    result=result+'B';
    document.getElementById("answer").setAttribute("value",result);
    resultChecker(result,scramble);
    });
    document.getElementById("cclick").addEventListener("click", function(){  
    //console.log("Letter Appended");
    result=result+'C';
    document.getElementById("answer").setAttribute("value",result);
    resultChecker(result,scramble);
    
    });

    document.getElementById("dclick").addEventListener("click", function(){  
    //console.log("Letter Appended");
    result=result+'D';
    document.getElementById("answer").setAttribute("value",result);
    resultChecker(result,scramble);
    });
    document.getElementById("eclick").addEventListener("click", function(){  
    //console.log("Letter Appended");
    result=result+'E';
    document.getElementById("answer").setAttribute("value",result);
    resultChecker(result,scramble);
    });
    document.getElementById("fclick").addEventListener("click", function(){  
    //console.log("Letter Appended");
    result=result+'F';
    document.getElementById("answer").setAttribute("value",result);
    resultChecker(result,scramble);
    
    });
    document.getElementById("gclick").addEventListener("click", function(){  
    //console.log("Letter Appended");
    result=result+'G';
    document.getElementById("answer").setAttribute("value",result);
    resultChecker(result,scramble);
    
    });

    ///////////////////////// ROW #2////////////////////////////////////////////


    document.getElementById("hclick").addEventListener("click", function(){  
    //console.log("Letter Appended");
    result=result+'H';
    document.getElementById("answer").setAttribute("value",result);
    resultChecker(result,scramble);
    });
    document.getElementById("iclick").addEventListener("click", function(){  
    //console.log("Letter Appended");
    result=result+'I';
    document.getElementById("answer").setAttribute("value",result);
    resultChecker(result,scramble);
    });
    document.getElementById("jclick").addEventListener("click", function(){  
    //console.log("Letter Appended");
    result=result+'J';
    document.getElementById("answer").setAttribute("value",result);
    resultChecker(result,scramble);
    
    });

    document.getElementById("kclick").addEventListener("click", function(){  
    //console.log("Letter Appended");
    result=result+'K';
    document.getElementById("answer").setAttribute("value",result);
    resultChecker(result,scramble);
    });
    document.getElementById("lclick").addEventListener("click", function(){  
    //console.log("Letter Appended");
    result=result+'L';
    document.getElementById("answer").setAttribute("value",result);
    resultChecker(result,scramble);
    });
    document.getElementById("mclick").addEventListener("click", function(){  
    //console.log("Letter Appended");
    result=result+'M';
    document.getElementById("answer").setAttribute("value",result);
    resultChecker(result,scramble);  
    });
    document.getElementById("nclick").addEventListener("click", function(){  
    //console.log("Letter Appended");
    result=result+'N';
    document.getElementById("answer").setAttribute("value",result);
    resultChecker(result,scramble);
    
    });
    document.getElementById("oclick").addEventListener("click", function(){  
    //console.log("Letter Appended");
    result=result+'O';
    document.getElementById("answer").setAttribute("value",result);
    resultChecker(result,scramble);
    
    });
    document.getElementById("pclick").addEventListener("click", function(){  
    //console.log("Letter Appended");
    result=result+'P';
    document.getElementById("answer").setAttribute("value",result);
    resultChecker(result,scramble);
    
    });

    ////////////////////////////  ROW #3//////////////////////////////////////

    document.getElementById("qclick").addEventListener("click", function(){  
    //console.log("Letter Appended");
    result=result+'Q';
    document.getElementById("answer").setAttribute("value",result);
    resultChecker(result,scramble);
    
    });

    document.getElementById("rclick").addEventListener("click", function(){  
    //console.log("Letter Appended");
    result=result+'R';
    document.getElementById("answer").setAttribute("value",result);
    resultChecker(result,scramble);

    
    });

    document.getElementById("sclick").addEventListener("click", function(){  
    //console.log("Letter Appended");
    result=result+'S';
    document.getElementById("answer").setAttribute("value",result);
    resultChecker(result,scramble);
    
    });


    document.getElementById("tclick").addEventListener("click", function(){  
    //console.log("Letter Appended");
    result=result+'T';
    document.getElementById("answer").setAttribute("value",result);
    resultChecker(result,scramble);
    
    });

    document.getElementById("uclick").addEventListener("click", function(){  
    //console.log("Letter Appended");
    result=result+'U';
    document.getElementById("answer").setAttribute("value",result);
    resultChecker(result,scramble);
    
    });


    document.getElementById("vclick").addEventListener("click", function(){  
    //console.log("Letter Appended");
    result=result+'V';
    document.getElementById("answer").setAttribute("value",result);
    resultChecker(result,scramble);
    
    });

    document.getElementById("wclick").addEventListener("click", function(){  
    //console.log("Letter Appended");
    result=result+'W';
    document.getElementById("answer").setAttribute("value",result);
    resultChecker(result,scramble);
    
    });

    document.getElementById("xclick").addEventListener("click", function(){  
    //console.log("Letter Appended");
    result=result+'X';
    document.getElementById("answer").setAttribute("value",result);
    resultChecker(result,scramble);
    
    });

    document.getElementById("yclick").addEventListener("click", function(){  
    //console.log("Letter Appended");
    result=result+'Y';
    document.getElementById("answer").setAttribute("value",result);
    resultChecker(result,scramble);
    
    });

    document.getElementById("zclick").addEventListener("click", function(){  
    //console.log("Letter Appended");
    result=result+'Z';
    document.getElementById("answer").setAttribute("value",result);
    resultChecker(result,scramble);
    
    });

////////////////////////////////////////////////////////////////////////
}

$.getJSON("test.json", function(json) {
    console.log(json);
    
        temp=json[0].common;
        showObj();
        //console.log(words[i])
    // this will show the info it in firebug console
});//JSON.parse(jsonResult);

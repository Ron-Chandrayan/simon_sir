
let red=document.querySelector("#zero");
let green=document.querySelector("#one");
let yellow=document.querySelector("#two");
let blue=document.querySelector("#three");
let btn=document.querySelector(".btn");
let msg=document.querySelector(".message");
let start=document.querySelector(".start");
let idd="";
let idd2="";
let idd3="";
let idd4="";
let sum=[];
let sumc=[];
let j=1;
let i=1;
    // while(i<=5){
    //     let number= Math.floor(Math.random()*4);
    //     console.log(number);
    //     if (number===0){
    //         number="zero";
    //     }
    //     else if (number===1){
    //         number="one";
    //     }
    //     else if (number===2){
    //         number="two";
    //     }
    //     else if (number===3){
    //         number="three";
    //     }
    //     console.log(number);
    //     i++;
    // }
    
    const sleep = (time) => {
        return new Promise((resolve) => setTimeout(resolve, time))
      }
      
      const doSomething = async () => {
        for (let i = 1; i <=1; i++) {
         
                let number= Math.floor(Math.random()*4);
                //console.log(number);
                  
                   if((sumc.length)!=0){
                      for(j=0;j<(sumc.length);j++){
                        await sleep(1000)
                        console.log(sumc[j]);
                        if(sumc[j]==="zero"){
                            red.style.boxShadow="0 0 30px 0 rgb(231, 37, 37)";
                            red.style.backgroundColor="rgb(231, 37, 37)";
                            red.style.transition="all 0.2s ease-out";
                            const audio = new Audio('red.mp4');
                            audio.play();
                            setTimeout(()=>{
                                red.style.backgroundColor="rgb(231, 37, 37)";
                                red.style.boxShadow="none";
                                red.style.transition="none";
                                $(document).ready(function(){
                                    $("#zero").hover(function(){
                                        $(this).css("box-shadow", "0 0 30px 0 rgb(231, 37, 37)");
                                        $(this).css("background-color", "rgb(231, 37, 37)");
                                        $(this).css("transition", "all 0.2s ease-out");
                                        
                                        }, function(){
                                        $(this).css("background-color", "0 0 30px 0 rgb(231, 37, 37)");
                                        $(this).css("box-shadow", "none");
                                        $(this).css("transition", "none");
                                      });
                                  });
                            },500);
                        }

                        else if(sumc[j]==="one"){
                            green.style.boxShadow="0 0 30px 0 rgb(19, 217, 9)";
                            green.style.backgroundColor="rgb(19, 217, 9)";
                            green.style.transition="all 0.2s ease-out";
                            const audio = new Audio('green.mp4');
                            audio.play();
                            setTimeout(()=>{
                                green.style.backgroundColor=" rgb(19, 217, 9)";
                                green.style.boxShadow="none";
                                green.style.transition="none";
                                $(document).ready(function(){
                                    $("#one").hover(function(){
                                        $(this).css("box-shadow", "0 0 30px 0  rgb(19, 217, 9)");
                                        $(this).css("background-color", " rgb(19, 217, 9)");
                                        $(this).css("transition", "all 0.2s ease-out");
                                        
                                        }, function(){
                                        $(this).css("background-color", "0 0 30px 0  rgb(19, 217, 9)");
                                        $(this).css("box-shadow", "none");
                                        $(this).css("transition", "none");
                                      });
                                  });
                            },500); 
                        }
                        
                        else if(sumc[j]==="two"){
                            yellow.style.boxShadow="0 0 30px 0 rgb(243, 247, 8)";
                            yellow.style.backgroundColor="rgb(243, 247, 8)";
                            yellow.style.transition="all 0.2s ease-out";
                            const audio = new Audio('yellow.mp4');
                            audio.play();
                            setTimeout(()=>{
                                yellow.style.backgroundColor=" rgb(243, 247, 8)";
                                yellow.style.boxShadow="none";
                                yellow.style.transition="none";
                                $(document).ready(function(){
                                    $("#two").hover(function(){
                                        $(this).css("box-shadow", "0 0 30px 0  rgb(243, 247, 8)");
                                        $(this).css("background-color", " rgb(243, 247, 8)");
                                        $(this).css("transition", "all 0.2s ease-out");
                                        
                                        }, function(){
                                        $(this).css("background-color", "0 0 30px 0  rgb(243, 247, 8)");
                                        $(this).css("box-shadow", "none");
                                        $(this).css("transition", "none");
                                      });
                                  });
                            },500);
                        }

                        else if(sumc[j]==="three"){
                            blue.style.boxShadow="0 0 30px 0 #00c7ec";
                            blue.style.backgroundColor=" #00c7ec";
                            blue.style.transition="all 0.2s ease-out";
                            const audio = new Audio('blue.mp4');
                            audio.play();
                            setTimeout(()=>{
                                blue.style.backgroundColor= "#00c7ec";
                                blue.style.boxShadow="none";
                                blue.style.transition="none";
                                $(document).ready(function(){
                                    $("#three").hover(function(){
                                        $(this).css("box-shadow", "0 0 30px 0 #00c7ec");
                                        $(this).css("background-color", " #00c7ec");
                                        $(this).css("transition", "all 0.2s ease-out");
                                        
                                        }, function(){
                                        $(this).css("background-color", "0 0 30px 0  #00c7ec");
                                        $(this).css("box-shadow", "none");
                                        $(this).css("transition", "none");
                                      });
                                  });
                            },500);
                        }
                      }
                   }
                   await sleep(1000)
                if (number===0){
                    number="zero";
                    red.style.boxShadow="0 0 30px 0 rgb(231, 37, 37)";
                    red.style.backgroundColor="rgb(231, 37, 37)";
                    red.style.transition="all 0.2s ease-out";
                    const audio = new Audio('red.mp4');
                    audio.play();
                    setTimeout(()=>{
                        red.style.backgroundColor="rgb(231, 37, 37)";
                        red.style.boxShadow="none";
                        red.style.transition="none";
                        $(document).ready(function(){
                            $("#zero").hover(function(){
                                $(this).css("box-shadow", "0 0 30px 0 rgb(231, 37, 37)");
                                $(this).css("background-color", "rgb(231, 37, 37)");
                                $(this).css("transition", "all 0.2s ease-out");
                                
                                }, function(){
                                $(this).css("background-color", "0 0 30px 0 rgb(231, 37, 37)");
                                $(this).css("box-shadow", "none");
                                $(this).css("transition", "none");
                              });
                          });
                    },500);
                }
                else if (number===1){
                    number="one";
                    green.style.boxShadow="0 0 30px 0 rgb(19, 217, 9)";
                    green.style.backgroundColor="rgb(19, 217, 9)";
                    green.style.transition="all 0.2s ease-out";
                    const audio = new Audio('green.mp4');
                    audio.play();
                    setTimeout(()=>{
                        green.style.backgroundColor=" rgb(19, 217, 9)";
                                green.style.boxShadow="none";
                                green.style.transition="none";
                        $(document).ready(function(){
                            $("#one").hover(function(){
                                $(this).css("box-shadow", "0 0 30px 0  rgb(19, 217, 9)");
                                $(this).css("background-color", " rgb(19, 217, 9)");
                                $(this).css("transition", "all 0.2s ease-out");
                                
                                }, function(){
                                $(this).css("background-color", "0 0 30px 0  rgb(19, 217, 9)");
                                $(this).css("box-shadow", "none");
                                $(this).css("transition", "none");
                              });
                          });
                    },500);
                }
                else if (number===2){
                    number="two";
                    yellow.style.boxShadow="0 0 30px 0 rgb(243, 247, 8)";
                    yellow.style.backgroundColor="rgb(243, 247, 8)";
                    yellow.style.transition="all 0.2s ease-out";
                    const audio = new Audio('yellow.mp4');
                    audio.play();
                    setTimeout(()=>{
                        $(document).ready(function(){
                            yellow.style.backgroundColor=" rgb(243, 247, 8)";
                            yellow.style.boxShadow="none";
                            yellow.style.transition="none";
                            $("#two").hover(function(){
                                $(this).css("box-shadow", "0 0 30px 0  rgb(243, 247, 8)");
                                $(this).css("background-color", " rgb(243, 247, 8)");
                                $(this).css("transition", "all 0.2s ease-out");
                                
                                }, function(){
                                $(this).css("background-color", "0 0 30px 0  rgb(243, 247, 8)");
                                $(this).css("box-shadow", "none");
                                $(this).css("transition", "none");
                              });
                          });
                    },500);
                }
                else if (number===3){
                    number="three";
                    blue.style.boxShadow="0 0 30px 0 #00c7ec";
                            blue.style.backgroundColor=" #00c7ec";
                            blue.style.transition="all 0.2s ease-out";
                            const audio = new Audio('blue.mp4');
                            audio.play();
                    setTimeout(()=>{
                        blue.style.backgroundColor= "#00c7ec";
                                blue.style.boxShadow="none";
                                blue.style.transition="none";
                                $(document).ready(function(){
                                    $("#three").hover(function(){
                                        $(this).css("box-shadow", "0 0 30px 0 #00c7ec");
                                        $(this).css("background-color", " #00c7ec");
                                        $(this).css("transition", "all 0.2s ease-out");
                                        
                                        }, function(){
                                        $(this).css("background-color", "0 0 30px 0  #00c7ec");
                                        $(this).css("box-shadow", "none");
                                        $(this).css("transition", "none");
                                      });
                                  });
                    },500);
                }
                console.log(number);
                sumc.push(number);
        }
        console.log("computer genearated ",sumc);
      }

      start.addEventListener("click",()=>{
        doSomething();
        btn.style.display="block"
        msg.style.display="none";
        start.style.visibility="hidden";
      })
      

red.addEventListener("click",()=>{
   // console.log("hello");
   idd=red.getAttribute("id");
   console.log(idd);
   sum.push(idd)
    red.style.border="2px solid black";
    red.style.backgroundColor="rgb(231, 37, 37,0.7)";
    const audio = new Audio('red.mp4');
    audio.play();
    setTimeout(()=>{
        red.style.backgroundColor="rgb(231, 37, 37)";
        red.style.border="none";
    },150);
})

green.addEventListener("click",()=>{
    // console.log("hello");
    idd2=green.getAttribute("id");
    console.log(idd2);
    sum.push(idd2);
     green.style.border="2px solid black";
      green.style.backgroundColor="rgb(19, 217, 9,0.7)";
      const audio = new Audio('green.mp4');
      audio.play();
     setTimeout(()=>{
         green.style.backgroundColor="rgb(19, 217, 9)";
         green.style.border="none";
     },150);
 })

 yellow.addEventListener("click",()=>{
    // console.log("hello");
    idd3=yellow.getAttribute("id");
    console.log(idd3);
    sum.push(idd3);
     yellow.style.border="2px solid black";
     yellow.style.backgroundColor=" rgb(243, 247, 8,0.7)";
      const audio = new Audio('yellow.mp4');
      audio.play();
     setTimeout(()=>{
         yellow.style.backgroundColor=" rgb(243, 247, 8)";
         yellow.style.border="none";
     },150);
 })

 blue.addEventListener("click",()=>{
    // console.log("hello");
    idd4=blue.getAttribute("id");
    console.log(idd4);
    sum.push(idd4);
     blue.style.border="2px solid black";
     blue.style.backgroundColor="rgb(0,199,236,0.7)";
      const audio = new Audio('blue.mp4');
      audio.play();
     setTimeout(()=>{
         blue.style.backgroundColor="#00c7ec";
         blue.style.border="none";
     },150);
 })

 btn.addEventListener("click",()=>{
    console.log("player generated",sum);
    if(sum.join()===sumc.join()){
        console.log("you win");
        sum=[];
        doSomething();
    }
    else{
        msg.style.display="block";
        start.style.visibility="visible";
        btn.style.display="none";
        sumc=[];
        sum=[];
        i=1;
        j=1;
    }
 })


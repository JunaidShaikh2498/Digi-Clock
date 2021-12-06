// Digital clock code

function clock(){
    var hrs=document.getElementById("h");
    var min=document.getElementById("m");
    var sec=document.getElementById("s");
    var am_pm=document.getElementById("am_pm");

    var time = new Date();

    var a=time.getHours();
    var b= time.getMinutes();
    var c= time.getSeconds();
    var d="AM";
    if(a>12){
        a=a-12;
        d="PM";
    }
    if(a<10){
        a="0"+a;
    }
    if(b<10){
        b="0"+b;
    }
    if(c<10){
        c="0"+c;
    }
    hrs.innerHTML=a;
    min.innerHTML=b;
    sec.innerHTML=c;
    am_pm.innerHTML=d;
}
setInterval(clock,1000);

//Dynamic div block code

function Make_div(){
    var dyna_conatainer=document.createElement('div');
    dyna_conatainer.className="dtext";
    dyna_conatainer.id="dynamic_box";
    document.getElementById("info").appendChild(dyna_conatainer);

    var value_in1=document.getElementById("morning");
    var value_in2=document.getElementById("lunch_time");
    var value_in3=document.getElementById("dinner_time");
    var value_in4=document.getElementById("nap");

    var value1=value_in1.options[value_in1.selectedIndex].text;
    var value2=value_in2.options[value_in2.selectedIndex].text;
    var value3=value_in3.options[value_in3.selectedIndex].text;
    var value4=value_in4.options[value_in4.selectedIndex].text;

    document.getElementById("dynamic_box").innerHTML=
    "Breakfast time is: "+value1+
    "<br\> Lunch time is: "+value2+
    "<br\> Dinner time is: "+value3+
     "<br\> Nap time is: "+value4;
     
    document.getElementById("dynamic_box").style.fontSize="large";
    document.getElementById("dynamic_box").style.fontFamily=" Arial, Helvetica, sans-serif";
    document.getElementById("dynamic_box").style.textShadow="black 2px 2px";
}

//Set time button code

function set_time(){
    var mrng=document.getElementById("morning").value;
    var lunchh=document.getElementById("lunch_time").value;
    var dine=document.getElementById("dinner_time").value;
    var napp=document.getElementById("nap").value;
    var hours=new Date().getHours();

    
    if(mrng==hours){
        document.getElementById("img_container").style.backgroundImage="url(./assets/what_a_drag.jpg)";
        document.getElementById("it_is_time").innerHTML="Good morning!!";
    }
        
   else if(lunchh==hours){
        document.getElementById("img_container").style.backgroundImage="url(./assets/Thanks_for_the_meal.jpg)";
        document.getElementById("it_is_time").innerHTML="Lunch Time!!";
   }    
    
    else if(dine==hours){
        document.getElementById("img_container").style.backgroundImage="url(./assets/fine_dine.png)";
        document.getElementById("it_is_time").innerHTML="Dinner Time!!";
    }

    else if(napp==hours){
        document.getElementById("img_container").style.backgroundImage="url(./assets/Sleeep.png)";
        document.getElementById("it_is_time").innerHTML="Good Night!!";
    }
    Make_div();   //Calling function on line 37
}
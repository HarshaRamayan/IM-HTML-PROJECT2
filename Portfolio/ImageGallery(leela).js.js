var btn_count=0;
var pre_img="";
var pre_btn="";
var c1=1;
var i=0,j=0;
var interest_des=["Music - My Relaxing Medicine", "Singing - My Passion", "Cristiano Ronaldo - My Inspiration", "Snow Forest - Scary Place", "Skydiving - BucketList-I",
    "Sleeping - All time Hobby", "Surfing - BucketList-II", "Thor - My Favourite Cartoon Character",
    "Tomorrowland - My Favourite Concert", "Travelling - My Interests-I", "Under Water Swimming - BucketList-III", "Village - My Photography-IV", "Waterfalls - A Peaceful Place",
    "Fifa - My Favourite Hobby"];

var links =  ["../Portfolio/ImageGallery/music.png", "../Portfolio/ImageGallery/passion.jpg", 
"../Portfolio/ImageGallery/ronaldo.jpg",
"../Portfolio/ImageGallery/sf.jpg", "../Portfolio/ImageGallery/skydive.png",
"../Portfolio/ImageGallery/sleeping.png", "../Portfolio/ImageGallery/surfing.jpg",
"../Portfolio/ImageGallery/thor.jpg", "../Portfolio/ImageGallery/tomorrowland.jpg",
"../Portfolio/ImageGallery/travelling.jpg", "../Portfolio/ImageGallery/underwaterswing.jpg", "../Portfolio/ImageGallery/village.jpg",
"../Portfolio/ImageGallery/waterfalls.jpg", "../Portfolio/ImageGallery/xbox.jpg"];

function resize(x,y)
{
    
    var imgchn=document.getElementById(x.id);
    var btndom=document.getElementById(y.id);

    
    pre_img=imgchn;
    pre_btn=btndom;

    switch(btn_count)
    {
        case 0:
            btndom.innerHTML="large";
            imgchn.style.width=1050;
            imgchn.style.height=820;      
            btn_count=1;
            break;
        case 1:
            btndom.innerHTML="small";
            imgchn.style.width=1250;
            imgchn.style.height=930;      
            btn_count=2;   
            break;
        case 2:
            btndom.innerHTML="medium";
            imgchn.style.width=700;
            imgchn.style.height=500;      
            btn_count=0;    
            break;

    }
    
    imgchn.style.transition="width 2s,height 2s";
}
function gotop(x)
{
   var index1=0;
   var index2=links.indexOf(x);
   var temp=links[index1];
   links[index1]=links[index2];
   links[index2]=temp;
   c1=1;
   loadimages();
}
function gobottom(x)
{
   var index1=c1-2;
   var index2=links.indexOf(x);
   var temp=links[index1];
   links[index1]=links[index2];
   links[index2]=temp;
   c1=1;
   loadimages();
}
function goleft(x)
{
   var index1=links.indexOf(x);
   var index2=index1-1;
   if(index1!=0)
   {
   var temp=links[index1];
   links[index1]=links[index2];
   links[index2]=temp;
   c1=1;
   loadimages();
    }
}

function goright(x)
{
   var index1=links.indexOf(x);
   var index2=index1+1;
   if(index1!=c1-2)
   {
   var temp=links[index1];
   links[index1]=links[index2];
   links[index2]=temp;
   c1=1;
   loadimages();
   }
}


function loadimages()
{   

       //create a array 
       //get the  dom of content
       var contentdom=document.getElementById("content");
       contentdom.innerHTML="";
       //create a counter variable i
       var divid=""
       var imgid="";
       var sizebtnid=""; 
       var topbtnid=""; 
       var bottombtnid=""; 
       var leftbtnid=""; 
       var rightbtnid=""; 
       var linkimg="";
       var childid="";
       c1=1;
       //start the loop 
       while(c1<=links.length)
       {
           divid="box"+c1;
           imgid="img"+c1;
           sizebtnid="sizebtn"+c1;
           topbtnid="topbtn"+c1;
           bottombtnid="bottombtn"+c1;
           leftbtnid="leftbtn"+c1;
           rightbtnid="rightbtn"+c1;
           childid="child"+c1;
           linkimg=links[c1-1];
           hobbyd=interest_des[c1-1];
           console.log(linkimg);
       //append div with id box+i
       contentdom.innerHTML +=
       `<p>${hobbyd}</p><br>
       
       <div id="${divid}" onmouseover="display_btns(${childid})" onmouseout="hid_btns(${childid})">
       <img id="${imgid}" src="${linkimg}" width=700 height=500 "><br>
       
           <div id="${childid}" >
          
            <button id="${sizebtnid}" class="btn1" onclick="resize(${imgid},${sizebtnid})">Medium</button>
            <button id="${topbtnid}" class="btn2" onclick="gotop('${linkimg}')" >Top</button>
            <button id="${bottombtnid}" class="btn3" onclick="gobottom('${linkimg}')" >Bottom</button>
            <button id="${leftbtnid}" class="btn4" onclick="goleft('${linkimg}')" >Left</button>
            <button id="${rightbtnid}" class="btn5" onclick="goright('${linkimg}')">Right</button>
            
            </div>
        </div>
       `; 
          
           c1++;
      }
      positionButtons();
}
function display_btns(x)
{
    var childdiv=document.getElementById(x.id);
    childdiv.style.opacity=1;
}

function hid_btns(x)
{
    var childdiv=document.getElementById(x.id);
    childdiv.style.opacity=0;
 
}

function positionButtons()
{
    c1=1;
   while(c1<=links.length)
       {
           divid="box"+c1;
           childid="child"+c1;
          
           divdom=document.getElementById(divid);
           divdom.style.position="relative";
           divdom.style.display="flex";
           divdom.style.margin="30px";
           
           divdom.style.justifyContent="center";
           
           childdom=document.getElementById(childid);
           childdom.style.position="absolute";
           childdom.style.width="35%";
           
           childdom.style.display="flex";
           childdom.style.justifyContent="space-around";
           childdom.style.bottom="0px";
           childdom.style.padding="2%";   
           childdom.style.opacity=0;
           
           c1++;
       }
}
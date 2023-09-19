let s="";
let s1="";
let audio=new Audio("mm.mp3");
function ev(event)
{
  audio.play();
  if(event.target.innerHTML=='AC')
  {
    s='';
    s1='';
    intt.value=s;
  }
    
  else if(event.target.innerHTML=='=')
  {
    s=eval(s);
   
    intt.value=s;
    if(s=='69')
    {
      window.open("https://www.youtube.com/shorts/o-MImREb9oY?t=2&feature=share", "_self");
     
    }
  }
  else
  {
    if(event.target.innerHTML=='X')
    {
      s+="*";
      s1+="X";
      
    }
    else
    {
  
  s+=event.target.innerHTML;
        s1+=event.target.innerHTML;
      
    }
     document.querySelector("input").value=s1;
  }
  
  //console.log(event.target.innerHTML);
  // text.value=s;
  
}
let a=document.querySelectorAll(".button");
//let buttons=document.get

//button.addEventListener('click',ev);
Array.from(a).forEach((butto)=>{
  butto.addEventListener('click',ev);
  
  
  
})




window.onload=function(){
    document.querySelectorAll("#images li>img").forEach((i)=>{
    i.style.cursor="pointer";
    i.style.height="100px";
    i.style.borderRadius="8px";
    i.style.border="1px solid #000";
    });
 }
 let images=document.querySelectorAll("#images li>img");
 let body=document.getElementsByTagName('body')[0];
 console.log(body);
 images.forEach((img)=>{
    img.addEventListener('click',function(e){
       if (e.target.id === "photoshop") {
          body.style.backgroundColor = "#889494";
      } else if (e.target.id === "river") {
          body.style.backgroundColor = "#2f6624";
      } else if (e.target.id === "japan") {
          body.style.backgroundColor = "#e47b92";
      } else if (e.target.id === "owl") {
          body.style.backgroundColor = "#be0000";
      } else if (e.target.id === "prayer") {
          body.style.backgroundColor = "#f9f714";
      }
      
    })
 })
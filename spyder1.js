function clock(){
let hour=document.getElementById("q");
let min=document.getElementById('w');
let sec=document.getElementById('u');
let a= new Date().getHours();
let b= new Date().getMinutes();
let c= new Date().getSeconds();
hour.innerHTML =a;
min.innerHTML =b;
sec.innerHTML =c;
}
let interval= setInterval(clock, 1000);


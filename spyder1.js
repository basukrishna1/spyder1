//for clock

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



//for Todo list
let newtodo=""
function assign(stringy){
  
  newtodo=stringy;
}


function anotherreload() {
  text=document.getElementById("text1").value;
  if(localStorage.getItem(newtodo)==null)
{
  
   jsonstring=[];
   jsonstring.push([text]);
   localStorage.setItem(newtodo,JSON.stringify(jsonstring));
}
else
{ 
  jsonstring1= localStorage.getItem(newtodo);
  jsonstring= JSON.parse(jsonstring1);
  jsonstring.push([text]);
  localStorage.setItem(newtodo,JSON.stringify(jsonstring));
}
reload();
}


function reload(){ 
    if(localStorage.getItem(newtodo)==null)
{
  
   jsonstring=[];
}
else
{ 
  jsonstring1= localStorage.getItem(newtodo);
  jsonstring= JSON.parse(jsonstring1);
}

let data="";
let display=document.getElementById("display")
jsonstring.forEach((element,index)=>
{   data+=`
  
	<p id=listing><span id="qw">${index+1}. </span>${element}</p>
    <button class="delete" id="deleted" onclick="del(${index})">Delete</button>`
}
)
display.innerHTML=data
}

let p=document.getElementById("addbutton");
p.addEventListener("click", anotherreload);

function del(ind){
     jsonstring1= localStorage.getItem(newtodo);
     jsonstring= JSON.parse(jsonstring1);  
     jsonstring.splice(ind,1);
     localStorage.setItem(newtodo,JSON.stringify(jsonstring));
     reload();
     }

//For calender

let date=new Date();
let o;
l=document.getElementById("mont");
x=date.getFullYear();
date.setDate(1)
let dayss=[
"Sun",
"Mon",
"Tue",
"Wed",
"Thurs",
"Fri",
"Sat",
]
function calender(){

let day=document.getElementById("date")
let firstdate=date.getDay();
let lastdate=new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
l=document.getElementById("mont");
let month=[
"January",
"Feburary",
"March",
'April',
'May',
'June',
'July',
'August',
'September',
'October',
'November',
'December']
l.innerText=month[date.getMonth()];
o=date.getMonth();
p=document.getElementById("la")
p.innerText=date.toDateString();

let days="";
for(let j=firstdate;j>0;j--)
{
  days+=`<button class="dt"></button>`;
  day.innerHTML=days;
}
for(i=1;i<=lastdate;i++)
  { if(i=== new Date().getDate() && date.getMonth()===new Date().getMonth()){
  days+=`<button class="dt" id="saw" onclick="star(${i})">${i}</button>`;
  day.innerHTML=days; 
  } 
  else
  {
  days+=`<button class="dt" onclick="star(${i})">${i}</button>`;
  day.innerHTML=days;
  }
  }
  }
function pre(){
  date.setMonth(date.getMonth()-1)
  calender();
}


function nex(){
  date.setMonth(date.getMonth()+1)
  calender();
} 

function star(n){
  q=document.getElementById("la")
  b=date.getDay(n);
  q.innerText= dayss[b]+" "+l.innerText+" "+n+" "+x;
  w=n.toString();
  c=o.toString();
  assign(w+c);
  reload();
} 

calender();


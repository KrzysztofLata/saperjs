var start=document.getElementById("start").addEventListener("click",saper);
var gra=document.querySelector("#gra");
var plansza=[];
var flag=0;
var postawione=[]
console.log("X");
function saper()
{
for (let x=0;x<10;x++)
{
	ax=[]
	for (let y=0;y<10;y++)
	{
	ax[y]=" "	
	}
	plansza[x]=ax;
}
for (let x=0;x<10;x++)
{
	let bomba=Math.floor(Math.random() *10);
	plansza[x][bomba]="*";
}
var pole="";
policz();
for (var a=0;a<10;a++)
{
for (var i=0;i<10;i++)
{
pole+="<div class='pole' id='w"+i+a+"'></div>";
}
pole+="<div class='pole' style='float:none' id='w"+a+"'></div>";
}
document.querySelector("#gra").innerHTML=pole;

var w=document.querySelectorAll(".pole");
w.forEach(przycisk=>
przycisk.addEventListener("click",function(){graj(this.id)}));
w.forEach(przycisk=>
przycisk.addEventListener("contextmenu",function(){flaga(this.id)}));
}
function graj(arg)
{
if (plansza[arg.charAt(2)][arg.charAt(1)]!="*") 
{	
	/*var wokol=0;
	let x=-1;let y=-1;let xm=1;let ym=1;
	if (parseInt(arg.charAt(2))==0)x=0;
	if (parseInt(arg.charAt(1))==0)y=0;
	if (parseInt(arg.charAt(2))==9)xm=0;
	if (parseInt(arg.charAt(1))==9)ym=0;
	for (x;x<=xm;x++)
	{
		let yz=y;
		for (y;y<=ym;y++)
		{
			let xd=parseInt(arg.charAt(2))+x;
			let yd=parseInt(arg.charAt(1))+y;
			if (plansza[xd][yd]=="*") wokol+=1;
		}
		y=yz;
	}*/
	odkryj(arg);
}
if (plansza[arg.charAt(2)][arg.charAt(1)]=="*") {alert("BOMBA"); alert(location.reload());}
}
function flaga(arg)
{	
	if (flag<10 && document.getElementById(arg).style.cssText!="background-color: pink;" && document.getElementById(arg).style.cssText!="background-color: brown;")
	{
		document.getElementById(arg).style.cssText="background-color: pink";
		postawione[flag]=arg;
		flag+=1;
	}
	else if (flag<10 && document.getElementById(arg).style.cssText=="background-color: pink;")
	{
		document.getElementById(arg).style.cssText="background-color: green";
		flag-=1;
	}
	if (flag==10)
		{
		let dobrze=0;
			for (let i=0;i<10;i++)
			{
				if (plansza[postawione[i].charAt(2)][postawione[i].charAt(1)]=="*")dobrze+=1;
			}
		if (dobrze==10)
		{
			alert("WYGRANA");
			alert(location.reload());
		}}
	
}
function odkryj(arg)
{
/*for (let x=0;x<=9;x++)
	{
		for (let y=0;y<=9;y++)
		{
			if (plansza[x][y]==' ')
			{
				document.getElementById("w"+y+x).style.cssText="background-color:brown";
			}
		}
	}
*/
	var x= Number(arg.charAt(1));
	//var x1= Number(arg.charAt(1));
	var y= Number(arg.charAt(2));
	//var y1= Number(arg.charAt(2));
	if(document.getElementById(arg).style.backgroundColor!="pink" && document.getElementById(arg).style.backgroundColor!="brown")
	for (var a=x;a<10;a++)
	{	console.log(document.getElementById("w"+a+y).style.backgroundColor);
		if (plansza[y][a]!="*")
			{
				document.getElementById("w"+a+y).style.cssText="background-color: brown;";
				if (plansza[y][a]>0) document.getElementById("w"+a+y).innerHTML=plansza[y][a];
			}
		else
			{
				if (plansza[y+1][x]!="*" ) odkryj("w"+x+(y+1));
				if (plansza[y-1][x]!="*" ) odkryj("w"+x+(y-1));
				if (plansza[y][x-1]!="*" ) odkryj("w"+(x-1)+y);
				if (plansza[y][x+1]!="*" ) odkryj("w"+(x+1)+y);
				break;
			}
	}
	
	/*if (plansza[y][x]!="*" && document.getElementById(arg).value==null)
	{
	do 
	{
		if (plansza[y][x]>0) document.getElementById("w"+x+y).innerHTML=plansza[y][x];
		document.getElementById("w"+x+y).style.cssText="background-color: brown";
		x+=1;console.log(x);
		odkryj("w"+x+y)
	}
	while (plansza[y][x]!="*" && x<10)
	x=x1;
	do 
	{
	console.log(y);
		if (plansza[y][x]>0) document.getElementById("w"+x+y).innerHTML=plansza[y][x];
		document.getElementById("w"+x+y).style.cssText="background-color: brown";
		y+=1;
	}
	while (plansza[y][x]!="*" && y<10)
	y=y1;
	do 
	{
		if (plansza[y][x]>0) document.getElementById("w"+x+y).innerHTML=plansza[y][x];
		document.getElementById("w"+x+y).style.cssText="background-color: brown";
		x-=1;console.log(x);odkryj("w"+x+y)
	}
	while (plansza[y][x]!="*" && x>=0)
	x=x1;
	do 
	{
	console.log(y);
		if (plansza[y][x]>0) document.getElementById("w"+x+y).innerHTML=plansza[y][x];
		document.getElementById("w"+x+y).style.cssText="background-color: brown";
		y-=1;	}while (plansza[y][x]!="*" && y>=0)}
}*/}
function policz()
{
	for (var a=0;a<10;a++)
	{
		for (var b=0;b<10;b++)
		{
			if (plansza[a][b]!="*")
			{
			var wokol=0;
			let x=-1;let y=-1;let xm=2;let ym=2;
			if (b==0)x=0;
			if (a==0)y=0;
			if (b==9)xm=1;
			if (a==9)ym=1;
			for (x;x<xm;x++)
			{
				let yz=y;
				for (y;y<ym;y++)
				{
					if (plansza[y+a][x+b]=="*") wokol+=1;
				}
				y=yz;
			}
			plansza[a][b]=wokol;
			}
		}
	}
	console.log(plansza);
}

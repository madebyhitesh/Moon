$(document).ready(function(){
//logo//

var balls = document.getElementsByClassName("ball");
document.onmousemove=function(){
	var x=event.clientX * 100 / window.innerWidth + "%";
	var y=event.clientY * 100 / window.innerHeight + "%";
	for(var i=0;i<2;i++)
	{
	balls[i].style.left = x;
	balls[i].style.top = y;
	}
}
//menubar


$(".menu").on("click",function(){
			
            $(".menu_bar").toggleClass('inclicked');
            $("nav").toggleClass('inclicked_logo');
            
	});


//homepage slider

	var elements=document.getElementsByClassName("slide");
for(var i = 0; i < elements.length; i++)
{
	elements[i].onclick = function()
	{
		var el= elements[0];
	while(el)
	{
		if(el.tagName === "DIV"){
			el.classList.remove("active");
		}
		el = el.nextSibling;
	}
	this.classList.add("active");
	};
}

//product Slider
var proelements=document.getElementsByClassName("productSlide");
for(var j = 0; j < proelements.length; j++)
{
	proelements[j].onclick = function()
	{
		var al= proelements[0];
	while(al)
	{
		if(al.tagName === "DIV"){
			al.classList.remove("activeProduct");
		}
		al = al.nextSibling;
	}
	this.classList.add("activeProduct");
	};
}	



	
});
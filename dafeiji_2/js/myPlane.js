"use strict";var myPlane={ele:null,fireInterval:300,init:function(){return this.ele=document.createElement("div"),gameEngine.ele.appendChild(this.ele),this.ele.className="myplane",this.ele.style.top=gameEngine.ele.offsetHeight-this.ele.offsetHeight+"px",this.ele.style.left=gameEngine.ele.offsetWidth/2-this.ele.offsetWidth/2+"px",this},fire:function(){setInterval(function(){(new Bullet).init().move()},this.fireInterval)},move:function(){myPlane.ele.onmousedown=function(e){var t=(e=e||event).offsetX,n=e.offsetY;document.onmousemove=function(e){var i=(e=e||event).pageX-t-gameEngine.ele.offsetLeft;i<=0?i=0:i>=gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth&&(i=gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth),myPlane.ele.style.left=i+"px",myPlane.ele.style.top=e.pageY-n+"px"},document.onmouseup=function(){document.onmousemove=document.onmouseup=null}}},boom:function(){var e=this,t=0,n=["images2/me_die1.png","images2/me_die2.png","images2/me_die3.png","images2/me_die4.png"],i=setInterval(function(){t>=1?(clearTimeout(i),gameEngine.ele.removeChild(e.ele)):e.ele.style.background="url("+n[++t]+") no-repeat"},50)}};
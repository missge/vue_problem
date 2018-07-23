// ;(function(c,d){var e=document.documentElement||document.body,a="orientationchange" in window?"orientationchange":"resize",b=function(){var f=e.clientWidth;e.style.fontSize=(f>=750)?"100px":100*(f/750)+"px"};b();c.addEventListener(a,b,false)})(window);
 //小米官网的写法
 !function(n){
    var  e=n.document,
         t=e.documentElement,
         i=720,
         d=i/100,
         o="orientationchange"in n?"orientationchange":"resize",
         a=function(){
             var n=t.clientWidth||320;n>720&&(n=720);
             t.style.fontSize=n/d+"px"
         };
         e.addEventListener&&(n.addEventListener(o,a,!1),e.addEventListener("DOMContentLoaded",a,!1))
}(window);
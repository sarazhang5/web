/* 
* @Author: Marte
* @Date:   2016-10-25 20:50:37
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-29 22:39:59
*/
window.onload=function(){
    //轮播图
    var os=document.getElementById('scrollImg');
    var aUl=os.getElementsByTagName('ul');
    var aLi=aUl[0].getElementsByTagName('li');
    var aLinum=aUl[1].getElementsByTagName('li');
    var aLiinfo=aUl[2].getElementsByTagName('li');
    var num=0;
    var timer=null;
    function scrollMove(){
        if(num==aLinum.length){
            num=0;
        }
        for(var i=0;i<aLinum.length;i++){
            aLinum[i].style.backgroundColor="#ccc";
            aLi[i].style.opacity="0";
            aLiinfo[i].style.display="none";
        }
        aLinum[num].style.backgroundColor="#01a4e4";
        aLi[num].style.opacity="1";
        aLiinfo[num].style.display="block";
        num++;
    }
    scrollMove();
    timer=setInterval(scrollMove,3000);
    for(var i=0;i<aLinum.length;i++){
        aLinum[i].onmouseover=function(){
            clearInterval(timer);
        }
    }
    for(var i=0;i<aLinum.length;i++){
        aLinum[i].onmouseout=function(){
            timer=setInterval(scrollMove,3000);
        }
    }

        for(var i=0;i<aLinum.length;i++){
            aLinum[i].index=i;
            aLinum[i].onclick=function(){
                for(var i=0;i<aLinum.length;i++){
                    aLinum[i].style.backgroundColor="#ccc";
                    aLi[i].style.opacity="0";
                    aLiinfo[i].style.display="none";
                }
                this.style.backgroundColor="#01a4e4";
                aLi[this.index].style.opacity="1";
                aLiinfo[this.index].style.display="block";
            }
        }
        //最顶部导航栏的缩放
var oHeader=document.getElementsByTagName('header')[0];
     oHeader.style.transform="scale(1.0)";
     oHeader.style.transition="1s";
}
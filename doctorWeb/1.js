/* 
* @Author: Marte
* @Date:   2016-10-25 20:50:37
* @Last Modified by:   Marte
* @Last Modified time: 2016-11-02 21:10:51
*/
window.onload=function(){
     //登陆
     var oHeader=document.getElementsByTagName('header')[0];
     var oHeading=oHeader.getElementsByTagName('div')[0];
     var oLogin=oHeading.getElementsByTagName('div')[4];
     oLogin.onclick=function(){
        alert('a');
     }















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

//文字选项卡
var oServices=document.getElementById('services');
var aUl=oServices.getElementsByTagName('ul');
var aLiS=aUl[0].getElementsByTagName('li');
var aLiSnum=aUl[1].getElementsByTagName('li');
var nums=0;
function moveText(){
    if(nums==aLiS.length){
        nums=0;
    }
    for(var i=0;i<aLiS.length;i++){
        aLiS[i].style.display="none";
        aLiSnum[i].style.background="#ccc"
    }
    aLiS[nums].style.display="block"
    aLiSnum[nums].style.background="#01a4e4";
    nums++
}
moveText();
setInterval(moveText,2000);



}
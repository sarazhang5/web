/* 
* @Author: Marte
* @Date:   2016-10-25 20:50:37
* @Last Modified by:   Marte
* @Last Modified time: 2016-11-09 21:10:19
*/
window.onload=function(){
     //弹出登陆框并加遮罩层
     var oHeader=document.getElementsByTagName('header')[0];
     var oHeading=oHeader.getElementsByTagName('div')[0];
     var oLogin=oHeading.getElementsByTagName('div')[4];
     var formLogin=document.getElementById('login');
     var oShade=document.getElementById('shade');
     var aP=formLogin.getElementsByTagName('p');
     var oRember=document.getElementById('borderS');
     var oOk=oRember.getElementsByTagName('span')[0];
      //弹出注册框加遮罩层
     var oSign=oHeading.getElementsByTagName('div')[3];
     var oSignup=document.getElementById('Signup');
     var aPsign=oSignup.getElementsByTagName('p');
     var oRembers=document.getElementById('borderSs');
     var oOks=oRembers.getElementsByTagName('span')[0];
     //弹出搜索框
     var oSearch=oHeading.getElementsByTagName('div')[2];
     var oSearchShade=document.getElementById('search');
     var oSpan=oSearchShade.getElementsByTagName('span')[0];
     oSearch.onclick=function(){
        searchShade();
     };
     oLogin.onclick=function(){
        formMove(formLogin);
    };
     oSign.onclick=function(){
        formMove(oSignup);
     }
     function formMove(obj){
         obj.style.transform="translateY(0)";
         oShade.style.display="block";
         //弹出遮罩层的时候禁止滚动
         document.body.style.overflow='hidden';
         document.body.style.height='100%';
         document.documentElement.style.overflow='hidden'
         }
    //点击取消按钮 登陆框隐藏
     aP[1].onclick=function(){
         formDisplay(formLogin,oOk,oRember);
     };
     aPsign[1].onclick=function(){
        formDisplay(oSignup,oOks,oRembers);
     }
     function formDisplay(obj,ok,remberBorder){
        obj.style.transform="translateY(-500px)";
        oShade.style.display="none";
        document.body.style.overflow='visible';
        document.documentElement.style.overflow='visible';
        document.body.style.overflowX='hidden';
        document.documentElement.style.overflowX='hidden';
        ok.style.display="none";
        remberBorder.style.padding="0.5px 8px";
     }
    //是否记住按钮
    var flag=true;
    oRember.onclick=function(){
        remberButton(oOk,oRember);
    }
    oRembers.onclick=function(){
        remberButton(oOks,oRembers);
    }
    function remberButton(ok,remberBorder){
        if(flag){
            ok.style.display="inline-block";
            remberBorder.style.padding="0.5px 1.5px";
            flag=false;
        }else{
            ok.style.display="none";
            remberBorder.style.padding="0.5px 8px";
            flag=true;
        }
    }
    //search的遮罩层
    function searchShade(){
     oSearchShade.style.display="block";
      oSearchShade.style.backgroundColor="#01a4e4";
      document.body.style.overflow='hidden';
      document.body.style.height='100%';
      document.documentElement.style.overflow='hidden'  
    }
    oSpan.onclick=function(){
       oSearchShade.style.display="none"; 
       document.body.style.overflow='visible';
       document.documentElement.style.overflow='visible';
       document.body.style.overflowX='hidden';
       document.documentElement.style.overflowX='hidden';
    }
//input获取到焦点时，清空内容.失去焦点时，内容还原。
       var aInput=document.getElementsByTagName('input');
         for(var i=0;i<aInput.length;i++){
            var oldValue=null;
            aInput[i].onfocus=function(){
                oldValue=this.value;
                this.value="";
            }
            aInput[i].onblur=function(){
                if(this.value==""){
                this.value=oldValue;
                }else{
                    this.value=this.value;
                }
            }
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
//滚动加载各个模块出现动画
var oWelcome=document.getElementById('welcome');
var aDiv=oWelcome.getElementsByTagName('div');
var welcomeImg=oWelcome.getElementsByTagName('img')[0];
var oServices=document.getElementById('services');
var oservDiv=oServices.getElementsByTagName('div')[0];
var aSerDiv=oservDiv.getElementsByTagName('div');
var oTeam=document.getElementById('team');
var ateamDiv=oTeam.getElementsByTagName('div');
var oCapab=document.getElementById('capab');
var ocapabDiv=oCapab.getElementsByTagName('div')[0];
var acapabDiv=ocapabDiv.getElementsByTagName('div');
var acapabP2=acapabDiv[1].getElementsByTagName('p')[0];
var acapabP4=acapabDiv[3].getElementsByTagName('p')[0];
var timercapab2=null;
var timercapab4=null;
window.onscroll=function(){
    if(scrollLoad(oWelcome)){
        welcomeImg.style.webkitTransform="rotateY(360deg)";
        aDiv[0].style.webkitTransform="rotateY(360deg)";
        aDiv[1].style.webkitTransform="rotateY(360deg)";
       };
    if(scrollLoad(oServices)){
        aSerDiv[0].style.webkitTransform="translateY(0)";
        aSerDiv[2].style.webkitTransform="translateY(0)";
        aSerDiv[7].style.webkitTransform="translateY(0)";
    };
    if(scrollLoad(oTeam)){
        for(var i=0;i<ateamDiv.length;i++){
           ateamDiv[i].style.webkitTransform="scale(1)";
        }
        clearInterval(timercapab2);
        clearInterval(timercapab4);
    };
     if(scrollLoad(oCapab)){
         for(var i=0;i<acapabDiv.length;i++){
           acapabDiv[i].style.webkitTransform="translateY(0)"
        }

        function add(obj,compareNumber,clearName){
            if(obj.innerHTML==compareNumber){
            clearInterval(clearName);
             }else{
            obj.innerHTML=parseInt(obj.innerHTML)+1;
             }
        }
        timercapab2=setInterval(add,20,acapabP2,1700,timercapab2);
        timercapab4=setInterval(add,20,acapabP4,2500,timercapab4);
     }
}
//判断模块是否进入可视区
function scrollLoad(model){
   var mHeight=model.getBoundingClientRect().top;
   var  webHeight=document.documentElement.clientHeight||document.body.clientHeight; 
   return(mHeight<webHeight)?true:false;
}











}
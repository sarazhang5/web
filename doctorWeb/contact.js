/* 
* @Author: Marte
* @Date:   2016-11-10 12:11:23
* @Last Modified by:   Marte
* @Last Modified time: 2016-11-16 17:20:05
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
                this.style.borderColor="#fba311";
            }
            aInput[i].onblur=function(){
                if(this.value==""){
                this.value=oldValue;
                this.style.borderColor="#ccc";
                }else{
                    this.value=this.value;
                    this.style.borderColor="#ccc";
                }
            }
         }
    //引入百度地图
    var map = new BMap.Map("allmap");  // 创建Map实例
    map.centerAndZoom("武汉洪山",0);      // 初始化地图,用城市名设置地图中心点
}
/* 
* @Author: Marte
* @Date:   2016-11-16 16:00:26
* @Last Modified by:   Marte
<<<<<<< HEAD
<<<<<<< HEAD
* @Last Modified time: 2016-11-16 18:55:14
=======
* @Last Modified time: 2016-11-16 20:57:43
>>>>>>> master
=======
* @Last Modified time: 2016-11-17 16:08:49
>>>>>>> refs/remotes/origin/master
*/
window.onload=function(){
    //获取cookie并输出展示
    function getCookie(name){
    var oBuy=document.cookie.split('; ');
    var i=0;
    for(i=0;i<oBuy.length;i++){
        var oBuy2=oBuy[i].split('=');
        if(oBuy2[0]==name){
            return oBuy2[1];
        }
    }
    return "not find";
    }
    var oproductPrice=document.getElementById('productPrice');
    var oSpan=oproductPrice.getElementsByTagName('span')[0];
    var oImg=oSpan.getElementsByTagName('img')[0];
    var oEm=oSpan.getElementsByTagName('em')[0];
    oImg.src=getCookie("big");
    oEm.innerHTML=getCookie("numberProduct");
    //计算价格
    var unitSpan=oproductPrice.getElementsByTagName('span')[1];
    var numSpan=oproductPrice.getElementsByTagName('span')[2];
    var totalSpan=oproductPrice.getElementsByTagName('span')[3];
    var aiNum=numSpan.getElementsByTagName('i');
    var num=0;
    aiNum[0].onclick=function(){
      down();
    }
    function down(){
        num=aiNum[1].innerHTML;
        num--;
       if(num<=0){
           num=0; 
        };
        aiNum[1].innerHTML=num;
        var total=aiNum[1].innerHTML*parseInt(unitSpan.innerHTML);
        totalSpan.innerHTML=total+" "+"$";
    }
    down();
    aiNum[2].onclick=function(){
        up();
    }
    function up(){
        num=aiNum[1].innerHTML;
        num++;
        aiNum[1].innerHTML=num;
        var total=aiNum[1].innerHTML*parseInt(unitSpan.innerHTML);
        totalSpan.innerHTML=total+" "+"$";
    }
    up();
    //payment按钮设置
    var oBtn=document.getElementById('buyBtn');
    var oInput=oBtn.getElementsByTagName('input')[0];
    oInput.onclick=function(){
          confirmPay();
    }

    function confirmPay(){
        var r=confirm("you will pay"+totalSpan.innerHTML+"?");
        if(r==true){
            alert('scussess paied')
        }else{
            alert('welcome again')
        }
    }
}
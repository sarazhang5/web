/* 
* @Author: Marte
* @Date:   2016-11-16 16:00:26
* @Last Modified by:   Marte
* @Last Modified time: 2016-11-16 18:55:14
*/
window.onload=function(){
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
    oImg.src=getCookie("big");
}
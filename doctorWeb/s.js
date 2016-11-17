/* 
* @Author: Marte
* @Date:   2016-11-10 12:11:23
* @Last Modified by:   Marte
* @Last Modified time: 2016-11-17 10:40:29
*/
window.onload=function(){
    var oProduct=document.getElementById('product');
    var oulProduct=oProduct.getElementsByTagName('ul')[0];
    var aliProduct=oulProduct.getElementsByTagName('li');
    var aimgProduct=oProduct.getElementsByTagName('img');
    for(var i=0;i<aimgProduct.length;i++){
        alert(i);
}
     
}
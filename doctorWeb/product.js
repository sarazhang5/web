window.onload=function(){
      var oProduct=document.getElementById('product');
    var oulProduct=oProduct.getElementsByTagName('ul')[0];
    var aliProduct=oulProduct.getElementsByTagName('li');
    var aimgProduct=oProduct.getElementsByTagName('img');
    for(var i=0;i<aimgProduct.length;i++){
        aliProduct[i].index=i;
        aliProduct[i].onclick=function(){
            var big="big";
            var aUrl=aimgProduct[this.index].src;
            alert(aUrl);
            document.cookie=big+'='+aUrl;
        }
}
}
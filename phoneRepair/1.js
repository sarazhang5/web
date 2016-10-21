/* 
* @Author: Marte
* @Date:   2016-08-20 12:47:27
* @Last Modified by:   Marte
* @Last Modified time: 2016-08-26 22:39:44
*/

$(function(){
    $('.more').hide();
    $('.tranp').hover(function(){
        $('.more').fadeIn();
    },function(){
        $('.brand').hover(function(){

        },function(){
            $('.more').fadeOut();
        })
    });

var $iBox=$('.imgBox'),
    $iNum=$('.imgNum'),
    indexImg=1,
    totalImg=4,
    imgSize=18,
    moveTime=1100,
    setTime=2200,
    clc=null;

    function moveImg(){
        if(indexImg != totalImg){
            $iBox.animate({
                left:-(indexImg*imgSize)+'rem'
            },moveTime);
            $iNum.removeClass('mark-color')
            .eq(indexImg).addClass('mark-color');
            indexImg++;
        }else{
            indexImg=1;
            $iNum.removeClass('mark-color')
            .eq(indexImg-1).addClass('mark-color');
            $iBox.animate({
                left:0
            },moveTime);
        }
    }
$iNum.hover(function(){
    $iBox.stop();
    clearInterval(clc);
    $iNum.removeClass('mark-color');
    $(this).addClass('mark-color');
    indexImg=$(this).index();
    $iBox.animate({
                left:-(indexImg*imgSize)+'rem'
            },moveTime);

},function(){
    clc=setInterval(moveImg,setTime)
})
clc=setInterval(moveImg,setTime)





var count=$('.news li').length,
    topSize=.5,
    nrl=null,
    indexLi=1;

function moveLi(){
    if(indexLi != count){
        $('.news').animate({
            top:-(indexLi*topSize)+'rem'
        },3000);
        indexLi++;
    }else{
        indexLi=1;
        $('.news').animate({
            top:0
        },1)
    }
}
 nrl=setInterval(moveLi,2000);  



/*var wh=$(window).height();
$(window).scroll(function(){
var s=wh-$(window).scrollTop();
if(s<100){
alert("小于100了")
}*/

var lengthr=$('.resume').length,
    indexR=1,
    indextotalR=3,
    resumeSize=7.1;
$('.leftr').click(function(){
    if(indexR!=indextotalR){
    $('.scrollresume').animate({
        left:-(indexR*resumeSize)+'rem'
    },2000)
    indexR++;
}else{
    indexR=1;
    $('.scrollresume').animate({
        left:0
    },100)
}
})

$('.rightr').click(function(){
    indexR--;
    if( indexR!=0 ){
    $('.scrollresume').animate({
         left:-((indexR-1)*resumeSize)+'rem'
    },2000)
  }else{
    indexR=indextotalR;
    $('.scrollresume').animate({
         left:-((indexR-1)*resumeSize)+'rem'
    },100)
  }

})









})
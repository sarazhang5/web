/* 
* @Author: Marte
* @Date:   2016-08-27 11:11:31
* @Last Modified by:   Marte
* @Last Modified time: 2016-08-29 14:19:57
*/

$(document).ready(function(){
    $('.applebrand').hide();
    $('.huaweibrand').hide();
    $('.iphone6s').hide();
$('.yourbrand li').click(function(){
    $(this).addClass('selec bg')
    .siblings('li').removeClass('selec bg');
    $(this).css('background-color','rgb(1,166,255)')
    .siblings('li').css('background-color','');
  })  

$('.appleb').click(function(){
    $('.applebrand').show();
     $('.huaweibrand').hide();
    });
$('.huaweib').click(function(){
    $('.huaweibrand').show();
    $('.applebrand').hide();
});
$('.6s').click(function(){
   $('.iphone6s').show();
})


})
    
    
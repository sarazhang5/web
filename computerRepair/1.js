
$(function(){
$('.num li').mouseover(function(){
    $('#'+this.id).addClass('act').siblings().removeClass('act');
    $('.pho li img').fadeIn(4000).attr('src','img/'+(this.id)+'.jpg');
})

var timer;
$('#area2').html($('#area1').html());
function imgMarquee(){
    if($('#scrollarea').scrollLeft()>=$('#area1').width()){
        $('#scrollarea').scrollLeft(0)
    }else{
        $('#scrollarea').scrollLeft($('#scrollarea').scrollLeft()+4);
    }
}

timer=setInterval(imgMarquee,30)

$('#scrollarea').hover(function(){
    clearInterval(timer);
},function(){
    timer=setInterval(imgMarquee,30)
})




})

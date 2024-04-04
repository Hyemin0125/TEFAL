$('.gnbBtn').on('click',function(){
    $('.siteMap').stop().show();
    
});
$('.closeBtn').on('click',function(){
    $('.siteMap').stop().hide();
    
});//mo_gnb_btn

$('.bn .bnWrap').slick({
    'prevArrow': '.prev',
    'nextArrow': '.next',
    'autoplay': true,
    'fade': true,
    'draggable':true,
});//mainbn

$(window).resize(function(){ 

    if (window.innerWidth > 768) {  

        $(".category .item").on('mouseover',function(){
            $(this).addClass('big').siblings().addClass('small');
        });

        $(".category .item").on('mouseout',function(){
            $(this).removeClass('big','small').siblings().removeClass('small');
        });

    } //tab, pc

    }).resize(); 

const clockTitle = document.querySelector(".jsClock");
const sale = new Date(2024, 3, 10, 0, 0, 0).getTime();

const countdown = setInterval(function () { 
    const now = new Date();
    const deadline = sale - now;
    const days = Math.floor(deadline / (1000 * 60 * 60 * 24));
    const hours = Math.floor(deadline % (1000*60*60*24)/(1000*60*60));
    const minutes = Math.floor((deadline % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((deadline % (1000 * 60)) / 1000);
    clockTitle.innerText = `D-${days} | ${hours} : ${minutes} : ${seconds}`;}
, 1000);
//countdown

$('.newsEvent .nWrap .txt .box').on('mouseover',function(e){
    e.preventDefault();

    var i = $(this).index();
    $('.newsEvent .nWrap .img').children().eq(i).show().siblings().hide();

    $('.newsEvent .nWrap .txt .box').eq(i).addClass('on').siblings().removeClass('on');  
});
//newsNevent tab

$('.help .heWrap .box').on('mouseover',function(){

    $(this).addClass('on').siblings().removeClass('on');
});



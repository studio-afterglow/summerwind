$(window).scroll(function() {
    paralaksa();
})

function paralaksa(){
    var wScroll = $(window).scrollTop();
    var mediaVar = window.matchMedia("screen and (min-width: 1300px)");
    
    if(wScroll < 210){
    $('.banner-element').css('padding-top', 0+(wScroll*0.5)+'px')}
    
    if(mediaVar.maches){
    $('.menu-grid').css('opacity', (wScroll*0.0016))
    $('.part-1').css('opacity', (wScroll*0.003)-3.3)
    $('.news').css('opacity', (wScroll*0.005)-8.31)
    $('.offer-grid').css('opacity', (wScroll*0.005)-11.4)}
}

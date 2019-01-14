$('.preview-001 .button button').on('click',function(){
    $(this).attr('disabled', 'true');
    var timer = setInterval(function(){
       $('.preview-001').addClass('hide');
       $('.slider-001').removeClass('hide');
       clearInterval(timer);
       slider();
    }, 5000);
   
});

$(window).load(function(){
    slider();
}).resize(function(){
    slider();
})

function slider(){
    if($(window).width() < 767){
        $('.slider-001 #slider .item.hidden-xs').removeClass('item');
    }else{
        $('.slider-001 #slider .carousel-inner div.hidden-xs').addClass('item');
    }
    $('.slider-001 #slider').carousel(0);
    $('.slider-001 #slider').carousel({interval: 7000});
    
}

$('.slider-001 #slider').bind('slide.bs.carousel', function (e) {
    let direction = e.direction;
    slider_slide(direction);
})

$('.slider-001 #slider .carousel-indicators-preview .preview-item').on('click',
function(){
   $($(this).parent()) .find('.active').removeClass('active');
   $(this).addClass('active');
})

$('.slider-001 #slider a.carousel-control').on('click', function(){
    let slide = $(this).attr('data-slide');
    slider_slide(slide);
})


function slider_slide(slide){
    let item = $('.slider-001 #slider .carousel-inner .item.active');
    let items = $('.slider-001 #slider .carousel-inner .item');
    let count = items.length;
    let i = items.index(item);
    switch(slide){
        case 'prev':
             if(i === 0){
                 i = count - 1;
             }else{
                 i = i - 1;
                 
             }
          break;
          case 'right':
             if(i === 0){
                 i = count - 1;
             }else{
                 i = i - 1;
                 
             }
          break;
        case 'next':
            if(i === count - 1){
               i = 0;
            }else{
               i = i + 1;
               
            }
          break;
          case 'left':
            if(i === count - 1){
               i = 0;
            }else{
               i = i + 1;
               
            }
          break;  
        default:
        
    }
    
    $('.slider-001 #slider .carousel-indicators-preview .preview-item.active').removeClass('active');
    $($('.slider-001 #slider .carousel-indicators-preview .preview-item')[i]).addClass('active');

}
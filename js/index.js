$('.leftMenu li').on('mouseover', function () {
    let index = $(this).index()
    // console.log(index)
    $('.content').eq(index).delay(100).show('normal');
    $('.content').mouseover(function () {
        $(this).show()
    })
})

$('.leftMenu li').on('mouseout', function () {
    let index = $(this).index()
    // console.log(index)

    $('.content').eq(index).stop(true, false).hide('normal');
});

// carousel(
//     $('.banner1'), //必选， 要轮播模块(id/class/tagname均可)，必须为jQuery元素
//     {
//         type: 'leftright', //可选，默认左右(leftright) - 'leftright' / 'updown' / 'fade' (左右/上下/渐隐渐现)
//         arrowtype: 'move', //可选，默认一直显示 - 'move' / 'none'	(鼠标移上显示 / 不显示 )
//         autoplay: true, //可选，默认true - true / false (开启轮播/关闭轮播)
//         time: 3000 //可选，默认3000
//     }
// );

/* 楼层导航效果 */
$('.banner .floor a').on('click', function () {
    // 获取当前索引对应的楼层的scrollTop值
    console.log($(this).index())
    let t = $('div.floor1').eq($(this).index()).offset().top;
    $('body,html').animate({
        'scrollTop': t
    }, 500);
    return false
})

/*
    动态获取滚动条高度，然后判断滚动条距离顶部的偏移值，达到一定高度时显示‘回到顶部’按钮，否则隐藏按钮
*/
$(window).on('scroll', function () {
    let $nowH = $(this).scrollTop()
    console.log($nowH)
    // console.log( $(document).height() )
    if ($nowH >= 1000) {
        $('#toTop').fadeIn('normal');
    } else {
        $('#toTop').fadeOut('normal');
    }
})

/* 返回顶部效果 */
$('#toTop').on('click', function () {
    $('body,html').animate({
        'scrollTop': 0
    }, 500);
    console.log($(this))
    return false
})

/* 右侧推荐 */
$('#recommend>.erweima').on('mouseover', function () {
    $(this).find('p').fadeIn('normal')
});

$('#recommend>.erweima').on('mouseout', function () {
    $(this).find('p').fadeOut()
})

$('#recommend>.erweima>p').on('mouseover', function () {
    $(this).stop(true,false).fadeIn('normal')
});

$('#recommend>.erweima>p').on('mouseout', function () {
    $(this).stop(true,false).fadeOut('normal')
})
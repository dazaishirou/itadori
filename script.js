$(document).ready(function(){
$('#toggleperfil').click(function(){
$(this).toggleClass('active');
$('#profilemenu').fadeToggle('active');
});
$('.pmname a > span').each(function(){
  var bodyColor = $(this).attr('style').split('#')[1].split(';')[0].toLowerCase();
  $(this).parents('body').prepend('<style>:root {--groupbody:#'+bodyColor+';--groupbody-50:#'+bodyColor+'80;--groupbody-25:#'+bodyColor+'40;}</style>');
});
$('.tbtabs span').click(function(){
var dataTab = $(this).attr('data-tab');
var $target = $(this).parents('#tablon').find('#'+dataTab);
$(this).addClass('active');
$(this).siblings().removeClass('active');
$target.addClass('active');
$target.siblings().removeClass('active');
});
$('.tbcalprev').click(function(){
var $parent = $(this).parents('.tbcalendario');
if ($parent.hasClass('tbcal1')) {
$parent.removeClass('tbcal1').addClass('tbcal3');
} else if ($parent.hasClass('tbcal2')) {
$parent.removeClass('tbcal2').addClass('tbcal1');
} else if ($parent.hasClass('tbcal3')) {
$parent.removeClass('tbcal3').addClass('tbcal2');
}
});
$('.tbcalnext').click(function(){
var $parent = $(this).parents('.tbcalendario');
if ($parent.hasClass('tbcal1')) {
$parent.removeClass('tbcal1').addClass('tbcal2');
} else if ($parent.hasClass('tbcal2')) {
$parent.removeClass('tbcal2').addClass('tbcal3');
} else if ($parent.hasClass('tbcal3')) {
$parent.removeClass('tbcal3').addClass('tbcal1');
}
});
});

// Índice
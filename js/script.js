	$(document).ready(function(){
    $(".nav-item").on("click","a", function (event) {
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href');
  });
  //    $("#button-registration").on("click","a", function (event) {
  //       //забираем идентификатор бока с атрибута href
  //       var id  = $(this).attr('href');
  // });
	$(".registr").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
 var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});
});

 $(document).ready(function () {
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });
 });



  $(".carousel").on("touchstart", function(event){
         var xClick = event.originalEvent.touches[0].pageX;
     $(this).one("touchmove", function(event){
         var xMove = event.originalEvent.touches[0].pageX;
         if( Math.floor(xClick - xMove) > 5 ){
             $(this).carousel('next');
         }
         else if( Math.floor(xClick - xMove) < -5 ){
             $(this).carousel('prev');
         }
     });
     $(".carousel").on("touchend", function(){
             $(this).off("touchmove");
     });
 });


$(document).ready(function() {

  // Добавляем значения
  var val_data = {
    "Pentest": "Pentest",
    "CyberOps": "CyberOps",
    "DevNet": "DevNet",

  };
  
  var input = $('[name="name"]');
  
  // Создаем общий блок с классом
  var val_cont = document.createElement('div');
  $(val_cont).addClass("dropdown");

  // Создаем кнопку открытия списка и поле для записи значений
  $(val_cont).append("<a href='javascript:void(0);'><span class='open'>Направление*</span><span class='value'></span></a>");

  // Создаем выпдающий список и вкладываем в общий блок
  var ul = document.createElement('ul');
  for (elem in val_data) {
    $(ul).append("<li><input type='checkbox' value='" + elem + "' id='" + elem + "'><label for='" + elem + "'>" + val_data[elem] + "</label></li>");
  }
  $(ul).appendTo(val_cont);
  $(ul).hide();

  // Размещаем общий блок после нужного input-а
  $(input).after(val_cont);

  // Скрываем/открываем выпадающий список
  $(".dropdown a").on('click', function() {
    $(".dropdown ul").slideToggle('fast');
  });
  
  $('.dropdown ul input[type="checkbox"]').on('click', function() {

    var title_val = $(this).closest('.dropdown ul').find('input[type="checkbox"]').val(),
      title = $(this).val() + "  ";

    if ($(this).is(':checked')) {
      var html = '<span data-atr="' + title + '">' + title + '</span>';
      $('.value').append(html);
      $(".open").hide();
    } else {
      $('span[data-atr="' + title + '"]').remove();
    }
    
    if ($('.value').text() == "") {
      $(".open").show();
      $(input).val("");
    } else {
      $(input).val($('.value').text());
    }

  });

});

var mainNav = $('#navigation > ul > li > a');
$('#navigation > ul > li > ul').hide();

$('.main-link').click(function(e) {
  e.preventDefault();
});

mainNav.click(function() {
  $(this).siblings('ul').slideToggle(1000, 'swing');
});

$('.li-items').on('click', function(){
    $('.nav-mobile').toggleClass('margins-menu');
});
$('.mobile-item').on('click', function(){
    $('.nav-mobile').toggleClass('margins-menu');
});



$('.exit').click(function (e) {
  e.preventDefault();
  var id  = $(this).attr('href');

  // custom handling here

  // oops...runtime error, but at least the user isn't navigated away.
});
$('.exit-two').click(function (e) {
  e.preventDefault();
  var id  = $(this).attr('href');

  // custom handling here

  // oops...runtime error, but at least the user isn't navigated away.
});


var menuElemVhodDesk=document.querySelector('.wrap-vhod-desktop');
var podbtnVhodElemDesk = document.querySelector('.vhod-desktop');

var menuElemRegistratDesk=document.querySelector('.wrap-registrat-desktop');
var podbtnRegistratElemDesk = document.querySelector('.registrat-desktop');
// $(".vhod-desktop").on("click","a", function (event) {
//     //отменяем стандартную обработку нажатия по ссылке
//     event.preventDefault();
//     var id  = $(this).attr('href');
// });



podbtnVhodElemDesk.addEventListener('click', function(){
    menuElemVhodDesk.classList.toggle('open');
     if ($(menuElemRegistratDesk).hasClass('open')){
       menuElemRegistratDesk.classList.toggle('open');
     }
});

// $(".registrat-desktop").on("click","a", function (event) {
//     //отменяем стандартную обработку нажатия по ссылке
//     event.preventDefault();
//     var id  = $(this).attr('href');
// });
podbtnRegistratElemDesk.addEventListener('click', function(){
    menuElemRegistratDesk.classList.toggle('open');
     if ($(menuElemVhodDesk).hasClass('open')){
          menuElemVhodDesk.classList.toggle('open');
    }
});




var menuElem = document.querySelector('.wrapper');
var btnElem = document.querySelector('.hamburger');
var podmenuVhodElem = document.querySelector('.wrap-vhod');
var podbtnVhodElem = document.querySelector('.vhod');
var podbtnRegistratElem = document.querySelector('.registrat');
var podmenuRegistratElem = document.querySelector('.wrap-registrat');



btnElem.addEventListener('click', function(){
    menuElem.classList.toggle('open');
    if ( $('.wrapper').hasClass('open')!=true & $('.wrap-vhod').hasClass('open')){
      podmenuVhodElem.classList.toggle('open');
      $(podbtnRegistratElem).css('background', 'white');
      $(podbtnVhodElem).css('background', 'white');
    }
    if ( $('.wrapper').hasClass('open')!=true & $('.wrap-registrat').hasClass('open')){
      podmenuRegistratElem.classList.toggle('open');
      $(podbtnRegistratElem).css('background', 'white');
      $(podbtnVhodElem).css('background', 'white');
    }
});

$(".vhod").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    var id  = $(this).attr('href');
});

podbtnVhodElem.addEventListener('click', function(){
    podmenuVhodElem.classList.toggle('open');
    if ( $('.wrap-registrat').hasClass('open')){
      podmenuRegistratElem.classList.toggle('open');
      $(podbtnRegistratElem).css('background', 'white');
    }
    if ( $('.wrap-vhod').hasClass('open')){
      $(this).css('background', '#ccc');
    }
  else {
      $(this).css('background', 'white');
    }
});



$(".registrat").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    var id  = $(this).attr('href');
});

podbtnRegistratElem.addEventListener('click', function(){
  podmenuRegistratElem.classList.toggle('open');
  if ( $('.wrapper').hasClass('open')!=true & $('.wrap-registrat').hasClass('open')){
      podmenuRegistratElem.classList.toggle('open');
    }
  if ( $('.wrap-vhod').hasClass('open')){
      podmenuVhodElem.classList.toggle('open');

    }
  if ( $('.wrap-registrat').hasClass('open')){
      $(this).css('background', '#ccc');
      $(podbtnVhodElem).css('background', 'white');

    }
  else {
      $(this).css('background', 'white');
    }
});







$(function(){
  $('.menu-trigger').on('click', function(event){
    $(this).toggleClass('active');
    // toggleClassによってaタグのクラス(.menu-trigger)→クリックされた要素(this)がactiveクラスが追加され、もう一度押すと削除される
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});
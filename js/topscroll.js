//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 100){//上から100pxスクロールしたら
	  $('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
	  $('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
	}else{
	  if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
		$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
		$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
	  }
	}
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
  });
  
  // ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
  });
  
  
  // #page-topをクリックした際の設定
  $('#page-top').click(function () {
	$('#owasebg').removeClass('fixed');
	$('#taikenbg').removeClass('fixed');
	$('#shigotobg').removeClass('fixed');
	$('#akiyabg').removeClass('fixed');
	$('#interviewbg').removeClass('fixed');

	var scroll = $(window).scrollTop(); //スクロール値を取得
	if(scroll > 0){
	  $(this).addClass('floatAnime');//クリックしたらfloatAnimeというクラス名が付与
		  $('body,html').animate({
			scrollTop: 0
		  }, 2000,function(){//スクロールの速さ。数字が大きくなるほど遅くなる
			$('#page-top').removeClass('floatAnime');//上までスクロールしたらfloatAnimeというクラス名を除く
		  }); 
	}
	setTimeout(function(){
		$('#owasebg').addClass('fixed');
		$('#taikenbg').addClass('fixed');
		$('#shigotobg').addClass('fixed');
		$('#akiyabg').addClass('fixed');
		$('#interviewbg').addClass('fixed');
	},3000);
	
	  return false;//リンク自体の無効化

  });

  // 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

	// ふわっ
	$('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
	  $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
	  }else{
	  $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
	  }
	  });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
	$(window).scroll(function (){
	  fadeAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面をスクロールをしたら動かしたい場合の記述
  
  // 画面が読み込まれたらすぐに動かしたい場合の記述
	$(window).on('load', function(){
	  fadeAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
 
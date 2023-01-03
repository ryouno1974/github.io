jQuery(function () {
    var webStorage = function () {
          if (sessionStorage.getItem('access')) {
            //2回目以降アクセス時の処理
            $('body').addClass('appearA');
            target = document.getElementById("splash");        
            target.style.display="none";
            target = document.getElementById("splash-logo");        
            target.style.display="none";


          } else {
            //初回アクセス時の処理
                sessionStorage.setItem('access', 0);
                $(window).on('load',function(){
                $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
                             
                         //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
                $("#splash").delay(300).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
                             
                $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
                             
                });
                    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
                             
                   //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
                $('.splashbg1').on('animationend', function() { 
                             //この中に動かしたいJSを記載
                             $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

                });
                             //=====ここまで背景が伸びた後に動かしたいJSをまとめる
                             
                });
          }
        }
        webStorage();
      });
         




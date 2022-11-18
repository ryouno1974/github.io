jQuery('#wra').raindrops(//指定したエリアに描画
{
    color:'#6495ed',//水の色を指定
    canvasHeight:nami, //canvasの高さを指定。初期値は親の高さの50%。
    waveLength: 100,//波の長さ(広がり)を指定。数値が大きいほど長さは小さくなる。初期値は340。
    waveHeight:100,//波の高さを指定。数値が大きいほど高さは高くなる。初期値は100。
    rippleSpeed: 0.05, //波紋のスピードを指定。数値が大きいほど波紋は速くなる。初期値は0.1。
    density: 0.04,//水の波紋の量を指定。数値が大きいほど波紋は小さくなる。初期値は0.02。
    frequency:5//雨粒の落ちる頻度を指定。数値が大きいほど頻度は多くなる。初期値は3。
  }
);
//ブラウザーの表示域を抽出して水面高さを調整　
var nami =500;
if(Window.outerWidth>767){
    nami=500;
}else {
    nami=100;
}
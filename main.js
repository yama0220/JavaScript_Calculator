let result = document.getElementById("result");
let startNum = 0;
let endNum;
let pointCheck = false;

function get_calc(btn){
  // 記号が末尾にある時、連続で入力させないための処理
  if ( endNum == "+" || endNum == "-" || endNum == "*" || endNum == "/" || endNum == "." ) {
    // endNumに記号を末尾チェック用に格納
    endNum = result.innerHTML.slice(-1);
    console.log("endNumに記号が格納されています endNum -> " + endNum);
    if ( pointCheck == false && btn.value == ".") {
      if ( endNum == "+" || endNum == "-" || endNum == "*" || endNum == "/") {
        console.log("無効な入力です1");
      } else {
        result.innerHTML += btn.value;
        endNum = btn.value;
        pointCheck = true;
        console.log("pointCheck -> " + pointCheck );
      }
    } else if( pointCheck == true && ( btn.value == "00" ||  btn.value == "0" || btn.value == "1" || btn.value == "2" || btn.value == "3" || btn.value == "4" || btn.value == "5" || btn.value == "6" || btn.value == "7" || btn.value == "8" || btn.value == "9" ) ) {
      result.innerHTML += btn.value;
      endNum = btn.value;
      console.log("ナンバーが入力されました");
    } else if( btn.value == "AC" ){
      result.innerHTML = "0";
      startNum = 0;
      endNum = 0;
      pointCheck = false;
      console.log("記号が末尾でACが入力されました");
    } else if( pointCheck == false && ( btn.value == "00" ||  btn.value == "0" || btn.value == "1" || btn.value == "2" || btn.value == "3" || btn.value == "4" || btn.value == "5" || btn.value == "6" || btn.value == "7" || btn.value == "8" || btn.value == "9" ) ) {
      result.innerHTML += btn.value;
      endNum = btn.value;
      console.log(btn.value + "が入力されました");
    }
  } else if ( btn.value == "AC" ) {
    result.innerHTML = "0";
    startNum = 0;
    endNum = 0;
    pointCheck = false;
    console.log("ACが入力されました");
  } else if ( startNum == "0" && btn.value == "=") {
    // イコールが初めに押された時の処理
  } else if ( startNum != "0" && btn.value  == "=" ) {
    result.innerHTML = eval(result.innerHTML);
    startNum = result.innerHTML.slice(0,1);
    endNum = result.innerHTML.slice(-1);
    pointCheck = false;
    console.log("イコールが入力されました");
  } else if ( (startNum == "0" && btn.value == "0") || (startNum == "0" && btn.value == "00") ) {
    result.innerHTML = 0;
    startNum = result.innerHTML.slice(0,1);
    console.log("初回で0または00が入力されました");
  } else if ( startNum == "0" && btn.value == "." && pointCheck == false) {
    // .が最初に押された時に「0.」と省略表示させる
    result.innerHTML = 0 + ".";
    // endNumに小数点を格納して連続で入力出来ない様にする
    endNum = ".";
    startNum = 1;
    pointCheck = true;
    console.log("初回で小数点が入力されました")
  } else {
    if ( (startNum == "0" && btn.value == "1") || (startNum == "0" && btn.value == "2") || (startNum == "0" && btn.value == "3") || (startNum == "0" && btn.value == "4") || (startNum == "0" && btn.value == "5") || (startNum == "0" && btn.value == "6") ||  (startNum == "0" && btn.value == "7") || (startNum == "0" && btn.value == "8") || (startNum == "0" && btn.value == "9") ) {
      // startNum変数を使用して初回入力のチェック
      result.innerHTML = btn.value;
      startNum = 1;
      console.log("ナンバーが入力されました startNum -> " + startNum + " 入力された数字 ->" + btn.value);
    } else if ( (startNum == "0" && btn.value == "+") || (startNum == "0" && btn.value == "-") || (startNum == "0" && btn.value == "*") || (startNum == "0" && btn.value == "/") ) {
      // 計算記号が最初に押された時の処理
      console.log("初回で演算子が押されました")
    } else if (pointCheck == false) {
      if ( btn.value == ".") {
        result.innerHTML += btn.value;
        endNum = btn.value;
        pointCheck = true;
        console.log("pointCheck -> " + pointCheck );
      } else {
        if (endNum == "+" || endNum == "-" || endNum == "*" || endNum == "/") {
          result.innerHTML += btn.value;
          startNum = 1;
          pointCheck = false;
          endNum = result.innerHTML.slice(-1);
        } else {
          result.innerHTML += btn.value;
          startNum = 1;
          endNum = result.innerHTML.slice(-1);
          console.log("その他が入力されました1 startNum -> " + startNum , " endNum -> " + endNum);
        }
      }
    } else {
      if ( pointCheck == true && btn.value == "." ) {
        console.log("無効な入力です");
      } else {
        if ( btn.value == "+" || btn.value == "-" || btn.value == "*" || btn.value == "/" ) {
          result.innerHTML += btn.value;
          startNum = 1;
          pointCheck = false;
          endNum = result.innerHTML.slice(-1);
          console.log("pointcheck ->" + pointCheck + "演算子が入力されました")
        } else {
          console.log(endNum);
          result.innerHTML += btn.value;
          startNum = 1;
          endNum = result.innerHTML.slice(-1);
          console.log("その他が入力されました2 startNum -> " + startNum , " endNum -> " + endNum);
        }
      }
    }
  }
}
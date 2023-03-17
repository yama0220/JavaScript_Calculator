let result = document.getElementById("result");

let startNum = 0;
let firstCount = 0;     // 初回入力がされたかの確認用
let endNum;             // 最後尾の数字チェック
let pointCheck = false; // 小数点の有無チェック用
let resultLength;       // 文字列の長さチェック

function get_calc(btn){
  // 記号が末尾にある時、連続で入力させないための処理
  if ( endNum == "+" || endNum == "-" || endNum == "*" || endNum == "/" || endNum == "." ) {
    // endNumに記号を末尾チェック用に格納
    endNum = result.innerHTML.slice(-1);
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
      if ( startNum == 0 ) {
        result.innerHTML = btn.value;
        endNum = btn.value;
        console.log("startNumが0の時にナンバーが入力されました");
      } else {
        result.innerHTML += btn.value;
        endNum = btn.value;
        console.log("ナンバーが入力されました");
      }
    } else if ( ( endNum == "+" || endNum == "-" || endNum == "*" || endNum == "/" ) && ( btn.value == "+" || btn.value == "-" || btn.value == "*" || btn.value == "/" ) ) {
      if ( (result.innerHTML.slice(1) == "") && ( btn.value == "*" || btn.value == "/" ) ) {
        console.log("先頭が演算子の時に不正な演算子が入力されました" + result.innerHTML.slice(1) + btn.value);
      } else {
        // 一時退避用
        result.innerHTML = result.innerHTML.slice(0, -1);
        result.innerHTML += btn.value;
        endNum = btn.value;
        startNum = 1;
        console.log("演算子を上書きします");
      }
    } else if( btn.value == "AC" ){
      result.innerHTML = "0";
      startNum = 0;
      endNum = 0;
      pointCheck = false;
      console.log("記号が末尾でACが入力されました");
    } else if( pointCheck == false && ( btn.value == "0" || btn.value == "1" || btn.value == "2" || btn.value == "3" || btn.value == "4" || btn.value == "5" || btn.value == "6" || btn.value == "7" || btn.value == "8" || btn.value == "9" ) ) {
      result.innerHTML += btn.value;
      endNum = btn.value;
      console.log(btn.value + "が入力されました");
    } else if( pointCheck == false && btn.value == "00" && endNum == "00" ) {
      endNum = btn.value;
      console.log("無効な00が入力されました");
    } 
  } else if ( btn.value == "AC" ) {
    result.innerHTML = "0";
    startNum = 0;
    endNum = 0;
    pointCheck = false;
    firstCount = 0;
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
    startNum = 1;
    endNum = 0;
    console.log("初回で0または00が入力されました");
  } else if ( startNum == "0" && btn.value == "." && pointCheck == false) {
    // .が最初に押された時に「0.」と省略表示させる
    result.innerHTML = 0 + ".";
    // endNumに小数点を格納して連続で入力出来ない様にする
    endNum = ".";
    startNum = 1;
    pointCheck = true;
    console.log("初回で小数点が入力されました");
  }  else {
    if ( (startNum == "0" && btn.value == "1") || (startNum == "0" && btn.value == "2") || (startNum == "0" && btn.value == "3") || (startNum == "0" && btn.value == "4") || (startNum == "0" && btn.value == "5") || (startNum == "0" && btn.value == "6") ||  (startNum == "0" && btn.value == "7") || (startNum == "0" && btn.value == "8") || (startNum == "0" && btn.value == "9") ) {
      // startNum変数を使用して初回入力のチェック
      result.innerHTML = btn.value;
      startNum = 1;
      firstCount++;
      console.log("ナンバーが入力されました startNum -> " + startNum + " 入力された数字 ->" + btn.value);
    } else if ( (startNum == "0" && btn.value == "+") || (startNum == "0" && btn.value == "-") || (startNum == "0" && btn.value == "*") || (startNum == "0" && btn.value == "/") ) {
      if ( btn.value == "+" || btn.value == "-" ) {
        // 計算記号が最初に押された時の処理
        result.innerHTML += btn.value;
        endNum = btn.value;
        console.log("初回で演算子が押されました -> " + btn.value );
      } else if ( (endNum == "0") && ( btn.value == "*" || btn.value == "/") ) {
        result.innerHTML += btn.value;
        endNum = btn.value;
      } else if ( (result.innerHTML.slice(1) == "") && ( btn.value == "*" || btn.value == "/") ) {
        console.log("初回で不正な演算子が入力されました");
      } else {
        result.innerHTML += btn.value;
        endNum = btn.value;
      }
    } else if (pointCheck == false) {
      // 小数点が押されてない時の処理
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
          resultLength = result.innerHTML;
          if ( resultLength.length < 1 && ( btn.value == "0" || btn.value == "00") ) {
            result.innerHTML = 0;
            startNum = 1;
            endNum = 0;
            console.log("文字列の長さ" + result.innerHTML.length);
          } else if ( resultLength.length < 1 ) {
            if ( btn.value != "+" ||  btn.value != "-" || btn.value != "*" || btn.value != "/" ) {
              console.log("結果が1文字の時に0以外が押されました");
              result.innerHTML = btn.value;
            } else if ( btn.value == "+" || btn.value == "-" || btn.value == "*" || btn.value == "/" ) {
              result.innerHTML += btn.value;
              startNum = 1;
              endNum = result.innerHTML.slice(-1);
              console.log("その他2 startNum -> " + startNum , " endNum -> " + endNum);
            } else {
              result.innerHTML += btn.value;
              startNum = 1;
              endNum = result.innerHTML.slice(-1);
              console.log("ナンバー startNum -> " + startNum , " endNum -> " + endNum);
            }
          } else if ( firstCount == "0" && (btn.value == "0" || btn.value == "00") ) {
            result.innerHTML = 0;
            startNum = 1;
            endNum = 0;
          } else if ( firstCount == "0" && ( btn.value == "1" || btn.value == "2" || btn.value == "3" || btn.value == "4" || btn.value == "5" || btn.value == "6" || btn.value == "7" || btn.value == "8" || btn.value == "9") ) {
            result.innerHTML = btn.value;
            startNum = 1;
            endNum = btn.value;
            firstCount++;
            console.log("0が表示されている時にナンバーが入力されました");
          } else if ( firstCount != "0" && result.innerHTML.length >= 2 ) {
            if ( (result.innerHTML.slice(-2) == "+0" || result.innerHTML.slice(-2) == "-0" || result.innerHTML.slice(-2) == "*0" || result.innerHTML.slice(-2) == "/0") && ( btn.value == "0" || btn.value == !"00") ) {
              result.innerHTML += "." + btn.value;
              startNum = 1;
              firstCount ++;
              endNum = result.innerHTML.slice(-1);
            } else {
              result.innerHTML += btn.value;
              startNum = 1;
              firstCount ++;
              endNum = result.innerHTML.slice(-1);
            }
          } else if ( ( firstCount != 0 && result.innerHTML == "0" ) && ( btn.value == "1" ||  btn.value == "2" || btn.value == "3" || btn.value == "4" || btn.value == "5" || btn.value == "6" || btn.value == "7" || btn.value == "8" || btn.value == "9" ) ) {
            result.innerHTML = btn.value;
            startNum == 1;
            firstCount++;
            endNum = result.innerHTML.slice(-1);
          } else if ( btn.value != "+" ||  btn.value != "-" || btn.value != "*" || btn.value != "/" ){
            if ( (result.innerHTML == "0" ) && ( btn.value == "0" || btn.value == "00" ) ) {
              result.innerHTML = 0;
            } else {
              result.innerHTML += btn.value;
              startNum = 1;
              firstCount ++;
              endNum = result.innerHTML.slice(-1);
              console.log( btn.value  + " が入力されました1 " + endNum);
            }
          } else {
            firstCount++;
          }
        }
      }
    } else {
      if ( pointCheck == true && btn.value == "." ) {
        // 小数点が押されている時の処理
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
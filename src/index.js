import "./styles.css";

// 追加ボタン -------------------------------------
const add_btn = document.querySelector("#add");

// 変数宣言
let done_list;
let del_list;
let back_list;

// 追加ボタン押下時のハンドラ
function addHandler() {
  const ul = document.querySelector(".incomplete-area ul");
  const list = document.querySelector("input");
  const newList = document.createElement("li");

  newList.innerHTML = `
    <div class="list-row">
      <p>${list.value}</p>
      <button class="done">完了</button>
      <button class="del">削除</button>
    </div>
    `;
  ul.appendChild(newList);
  // フォームの入力項目をクリア
  document.querySelector("input").value = "";
  // 未完了リストを取得しておく
  done_list = document.getElementsByClassName("done");
  del_list = document.getElementsByClassName("del");
  back_list = document.getElementsByClassName("back");
  // 未完了リストに対してイベント登録しておく
  registDoneListener();
}
// 追加ボタンのイベントリスナ登録
add_btn.addEventListener("click", addHandler);

// 各イベントリスナ登録処理
function registDoneListener() {
  for (let i = 0; i < done_list.length; i++) {
    done_list[i].addEventListener("click", doneHandler);
  }
  for (let i = 0; i < del_list.length; i++) {
    del_list[i].addEventListener("click", delHandler);
  }
  for (let i = 0; i < back_list.length; i++) {
    back_list[i].addEventListener("click", backHandler);
  }
}
// 完了ボタン押下時のハンドラ
function doneHandler() {
  const ul = document.querySelector(".complete-area ul");
  const doneList = document.createElement("li");

  const doneItem = this.parentElement.querySelector("p").innerHTML;
  doneList.innerHTML = `
    <div class="list-row">
      <p>${doneItem}</p>
      <button class="back">戻す</button>
    </div>
    `;
  this.parentElement.parentElement.remove();
  ul.appendChild(doneList);

  // 完了リストを再取得
  back_list = document.getElementsByClassName("back");
  registDoneListener();
}
// 削除ボタン押下時のハンドラ
function delHandler() {
  this.parentElement.parentElement.remove();
}
// 戻るボタン押下時のハンドラ
function backHandler() {
  const ul = document.querySelector(".incomplete-area ul");
  const backList = document.createElement("li");

  const backItem = this.parentElement.querySelector("p").innerHTML;
  backList.innerHTML = `
    <div class="list-row">
      <p>${backItem}</p>
      <button class="done">完了</button>
      <button class="del">削除</button>
    `;
  this.parentElement.parentElement.remove();
  ul.appendChild(backList);

  // 未完了リストを取得しておく
  done_list = document.getElementsByClassName("done");
  del_list = document.getElementsByClassName("del");
  // 未完了リストに対してイベント登録しておく
  registDoneListener();
}

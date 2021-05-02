import "./styles.css";

/* 
// 自力で実装 
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
*/
// 模範を確認したうえで自力で進める
// 追加ボタン、inputエリアの要素を取得
const inputText = document.getElementById("inputText");
const addBtn = document.getElementById("addBtn");

// 追加ボタン押下時のイベントを登録する。
addBtn.addEventListener("click", () => {
  // 追加したい要素を作成する
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.setAttribute("class", "list-row");
  const p = document.createElement("p");

  // ボタンを作成する
  const backButton = document.createElement("button");
  backButton.setAttribute("id", "backBtn");
  backButton.innerHTML = "戻す";

  const completeButton = document.createElement("button");
  completeButton.setAttribute("id", "doneBtn");
  completeButton.innerHTML = "完了";

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("id", "deleteBtn");
  deleteButton.innerHTML = "削除";

  // 戻るボタン押下時のイベントを作成する
  backButton.addEventListener("click", () => {
    const contents = backButton.parentElement.querySelector("p").innerHTML;
    document
      .getElementById("completeLists")
      .removeChild(backButton.parentElement.parentElement);

    const li = document.createElement("li");
    const div = document.createElement("div");
    div.setAttribute("class", "list-row");
    const p = document.createElement("p");
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);
    // 入力したTODOを設定する
    p.innerHTML = contents;
    document.getElementById("incompleteLists").appendChild(li);
  });

  // 完了ボタン押下時のイベントを作成する
  completeButton.addEventListener("click", () => {
    const contents = completeButton.parentElement.querySelector("p").innerHTML;
    document
      .getElementById("incompleteLists")
      .removeChild(deleteButton.parentElement.parentElement);

    const li = document.createElement("li");
    const div = document.createElement("div");
    div.setAttribute("class", "list-row");
    const p = document.createElement("p");
    div.appendChild(p);
    div.appendChild(backButton);
    li.appendChild(div);
    // 入力したTODOを設定する
    p.innerHTML = contents;
    document.getElementById("completeLists").appendChild(li);
  });

  // 削除ボタン押下時のイベントを作成する
  deleteButton.addEventListener("click", () => {
    document
      .getElementById("incompleteLists")
      .removeChild(deleteButton.parentElement.parentElement);
  });
  // 未完了エリアにリストを追加する
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  // 入力したTODOを設定する
  p.innerHTML = inputText.value;
  // 未完了エリアにTODOを追加する
  document.getElementById("incompleteLists").appendChild(li);
  // インプットエリアのテキストを削除する
  inputText.value = "";
});

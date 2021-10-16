const button = document.getElementById("add-button");
const memo = document.getElementById("memo-input");
const container = document.getElementById("memo-container");

button.onclick = function() {
    console.log(memo.value);
    const card = document.createElement("div");
    card.textContent = memo.value;
    container.append(card);
    const deletebutton = document.createElement("button");
    deletebutton.textContent = "削除";
    card.append(deletebutton);
    memo.value = null;
    deletebutton.onclick = function() {
    card.remove();
    };
};
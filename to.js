
var list = [];

function initializeList() {
    // Read from localstorage
    if(window.localStorage.getItem("todo_list")) {
        list = window.localStorage.getItem("todo_list").split(',');
    }
}

function createHtmlFromList() {
    if(list.length > 0) {
        list.map((elem, index) => {
            appendItemToList(elem, index)
        })
    }
}

// function cv(elem, index) {
//     appendItemToList(elem, index)
// }

function pushListToLocalStorage(item) {
    list.push(item);

    updateLocalStorageList()
    
}

function deleteItemFromList(event) {
    const index = event.target.id

    list.splice(index, 1)

    document.getElementById("todo-list").innerHTML = null
    createHtmlFromList()    

    // update localstorage
    updateLocalStorageList()

}

function addNewItemToList() {
    const x = document.getElementById("new-item")
    const newItem = x.value;

    pushListToLocalStorage(newItem);

    appendItemToList(newItem, list.length - 1);

    x.value = null

}

function appendItemToList(item, index) {
    const ref = document.getElementById('todo-list');

    const newLi = document.createElement("li");
    const textSpan = document.createElement("span");
    const deleteButton = document.createElement("button");

    const newElem = document.createTextNode(item);
    const deleteText = document.createTextNode("X");



    textSpan.appendChild(newElem);
    deleteButton.appendChild(deleteText);

    newLi.setAttribute("id", "li-"+index);

    deleteButton.setAttribute("id", index);

    deleteButton.addEventListener("click", deleteItemFromList);

    newLi.appendChild(textSpan);
    newLi.appendChild(deleteButton);

    ref.appendChild(newLi);
}

function updateLocalStorageList() {
    const listStr = list.join(',');

    window.localStorage.setItem("todo_list", listStr);
}

initializeList();

createHtmlFromList();



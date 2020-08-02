var list = document.getElementById("list");


function addTodo() {
    var todo_item = document.getElementById("todo-item");

    // create li tag with text node
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)


    // create delete button
    var delBtn = document.createElement("button")
    delBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    // var delText = document.createTextNode("Delete")
    delBtn.setAttribute("class", "btn")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    // delBtn.appendChild(delText)
    // var lineBreaker = document.createElement("br")
    // var lineBreaker2 = document.createElement("br")
    // lineBreaker.appendChild(li)
    // lineBreaker2.appendChild(li)


    // create edit button
    var editBtn = document.createElement("button")
    editBtn.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>';
    // var editText = document.createTextNode("Edit")
    // editBtn.appendChild(editText)    
    editBtn.setAttribute("class","editBtn")
    editBtn.setAttribute("onclick", "editItem(this)")



    li.appendChild(delBtn)
    li.appendChild(editBtn)


    todo_item.value = ""
    list.appendChild(li)

    console.log(li)
}

function deleteItem(e) {
    e.parentNode.remove()
}

function editItem(e) {
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter the edit value", val)

    e.parentNode.firstChild.nodeValue = editValue
}



function deleteAll() {
    list.innerHTML = ""
}
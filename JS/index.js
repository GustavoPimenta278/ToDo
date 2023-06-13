const createTaskButton = document.getElementsByClassName("ButtonAdd")
const deleteTaskButton = document.getElementsByClassName("ButtonDelete")
const listContainer = document.getElementById("listContainer")
const inputBox = document.getElementById("inputAddBox")

function createTask() {
  if (inputBox.value === '') {
    alert("O campo de tarefa não pode ser nulo!")

  } else {
    let li = document.createElement("li")
    li.innerHTML = inputBox.value
    listContainer.appendChild(li)

    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    li.appendChild(span)
    
    
  }

  saveData()
  inputBox.value = ""
  inputBox.focus()

}

listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked")

  } else if (e.target.tagName.remove === "SPAN") {
    e.target.parentElement.remove();

  }
}, false)


function saveData() {
  localStorage.setItem("data", listContainer.innerHTML)

}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data")

}

showTask()
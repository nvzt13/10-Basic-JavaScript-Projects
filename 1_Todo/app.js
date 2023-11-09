const form = document.querySelector('#todoAddForm');
const addInput = document.querySelector('#todoName');
const todoList = document.querySelector('.list-group');
const firstCartBody = document.querySelectorAll('.card-body')[0];
const secondCardBody = document.querySelectorAll('.card-body')[1];
const filterButton = document.querySelector('#todoSearch');
const clearButton = document.querySelector('#clearButton');
let todos = []


runEvents()
function runEvents(){
    form.addEventListener('submit',addTodo)
    document.addEventListener('DOMContentLoaded',pageLoaded)
    secondCardBody.addEventListener('click',removeTodo)
    clearButton.addEventListener('click',allTodosEweryWhere)
    filterButton.addEventListener('keyup',filter)
}

function filter(e){
    const filterValue = e.target.value.toLowerCase().trim();
    const todoList = document.querySelectorAll('.list-group-item')
    if(todoList.length > 0){
            todoList.forEach( (todo) => {
                if(todo.textContent.toLowerCase().trim().includes(filterValue)){
                    todo.setAttribute('style','display : block')
                }
                else{todo.setAttribute('style','display : none !important')}
            })
    }
    else{
        showAlert('warning','Filtreleme için en az bir todo olmalıdır')
    }
}

function allTodosEweryWhere(){
        const todoList = document.querySelectorAll('.list-group')
            if(todoList.length > 0){
                    todoList.forEach( (todo) => {
                        todo.remove()
                        showAlert('success','tüm todolar silindi')
                    })
                    todos = []
                    localStorage.setItem('todos',JSON.stringify(todos))
            }
            else{
                showAlert('danger','silinecek todo bulunamadı')
            }
    }


function removeTodo(e){
    // ekrandan silmek
    if(e.target.className == 'fa fa-remove'){
       const todo = e.target.parentElement.parentElement
       todo.remove()
       showAlert('success','todo silindi')
       
       // storageden silmek
       removeTodoToSrorage(todo.textContent)
    }
}

function removeTodoToSrorage(removeTodo){
     checkTodoToStorage()
     todos.forEach( (todo,index) => {
        if(removeTodo == todo ){
            todos.splice(index,1)
        }
     })

     localStorage.setItem('todos',JSON.stringify(todos))
}

function pageLoaded(){
    checkTodoToStorage()
    todos.forEach( (todo) => addTodoToUI(todo))
}

function addTodo(e){
        const inputText = addInput.value.trim()
        if(inputText == null || inputText == ''){
            showAlert('danger','boş bırakma')
        }
        else{
            // arayüze ekleme
            addTodoToUI(inputText)
            // storage ekleme
            addTodoToStorage(inputText)
            // uyarı popup
    

         showAlert('warning','Todo Eklendi')
            
        }
        e.preventDefault()
}
function showAlert(type,message){
        const div = document.createElement('div')
        div.className = `alert alert-${type} mt-4`
        div.textContent = message
        firstCartBody.appendChild(div);
        console.log(div.className)

        setTimeout(() => {
            div.remove()
        }, timeout = 2500);
}

function addTodoToUI(newTodo){

        const li = document.createElement('li')
        li.className = "list-group-item d-flex justify-content-between"
        li.textContent = newTodo
        const a = document.createElement('a')
        a.className = "delete-item"
        a.href = '#'
        const i = document.createElement('i')
        i.className = "fa fa-remove"
        a.appendChild(i)
        li.appendChild(a)
        todoList.appendChild(li)
        addInput.value = ' '

}

function addTodoToStorage(newTodo) {
     checkTodoToStorage()
     todos.push(newTodo)
     localStorage.setItem('todos', JSON.stringify(todos))
}

function checkTodoToStorage() {
      if(localStorage.getItem('todos') === null){
          todos = []
      }
      else{
          todos = JSON.parse(localStorage.getItem('todos'))
      }
};


let state = {
  todos: [
    {
      text: 'Go Shopping',
      completed: false,
    },
    {
      text: 'Work out',
      completed: false,
    },
    {
      text: 'See the doctor',
      completed: true,
    },
  ],
  showCompleted: false,
}

// Actions - functions that just change state
// (and maybe rerender if you want to)
// You can test these functions in the console
// Before you even write any event listeners, or even HTML
function toggleShowCompleted() {
  state.showCompleted = !state.showCompleted
  render()
}

function addTodo(text) {
  if (text.length === 0) return

  let todo = {
    text: text,
    completed: false,
  }
  state.todos.push(todo)
  render()
}

// Q: What are my todos? state.todos
// Q: Can I add a todo? state.todos.push()
// Q: Should I be showing the completed todos? state.showCompleted
// Q: What are my incomplete todos? state.todos.filter(todo => todo.completed === false)
// Q: What are my completed todos? state.todos.filter(todo => todo.completed === true)

// Q: For a single todo. Can I check if it is complete? todo.completed
// Q: For a single todo. What is the task? todo.text

// const renderStuff = () => {} // Not hoisted!!!

// const renderMoreStuff = function () {}

function renderApp() {
  let appEl = document.createElement('div')
  appEl.className = 'app'
  document.body.append(appEl)
}

function renderOptionsSection() {
  let optionsSection = document.createElement('section')
  optionsSection.classList.add('options')

  let optionsTitle = document.createElement('h2')
  optionsTitle.classList.add('section__title')
  optionsTitle.innerText = 'Options'

  let showCompletedLabel = document.createElement('label')

  let showCompletedInput = document.createElement('input')
  showCompletedInput.type = 'checkbox'

  showCompletedLabel.append('Show completed', showCompletedInput)
  optionsSection.append(optionsTitle, showCompletedLabel)

  let appEl = document.querySelector('.app')
  appEl.append(optionsSection)
}

function renderAddTodoSection() {
  //     <section class="add-item">
  //       <h2 class="section__title">Add Item</h2>
  //       <form>
  //         <input type="text" />
  //         <button>Add</button>
  //       </form>
  //     </section>
}

function renderTodoSection() {
  let todoSection = document.createElement('section')

  let titleEl = document.createElement('h2')
  titleEl.className = 'section__title'
  titleEl.innerText = 'Todo'

  let todoListEl = document.createElement('ul')
  todoListEl.className = 'todo-list'

  let incompleTodos = state.todos.filter(todo => todo.completed === false)

  for (let todo of incompleTodos) {
    // START - This code creates a single todo
    let todoItemEl = document.createElement('li')
    todoItemEl.className = 'todo'

    let checkboxEl = document.createElement('input')
    checkboxEl.type = 'checkbox'
    checkboxEl.className = 'todo__checkbox'

    let todoTextEl = document.createElement('p')
    todoTextEl.className = 'todo__text'
    todoTextEl.innerText = todo.text

    let deleteButtonEl = document.createElement('button')
    deleteButtonEl.className = 'todo__delete'
    deleteButtonEl.innerText = 'Delete'

    todoItemEl.append(checkboxEl, todoTextEl, deleteButtonEl)

    todoListEl.append(todoItemEl)
    // END - This code creates a single todo
  }

  todoSection.append(titleEl, todoListEl)

  let appEl = document.querySelector('.app')
  appEl.append(todoSection)
}

function renderCompletedTodosSection() {
  //     <section>
  //       <h2 class="section__title">Completed</h2>
  //       <ul class="completed-todo-list">
  //         <li class="todo completed">
  //           <input type="checkbox" checked />
  //           <p>See the doctor</p>
  //           <button>Delete</button>
  //         </li>
  //       </ul>
  //     </section>
}

function render() {
  document.body.textContent = ''

  renderApp()
  renderOptionsSection()
  renderTodoSection()
}

render()

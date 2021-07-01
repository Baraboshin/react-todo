import React from 'react'
import TodoList from "./ToDo/TodoList";
import AddTodo from "./ToDo/AddTodo";
import Context from "./context";

function App() {
  const [todos, setTodos] = React.useState(
    [
      {
        id: 1,
        completed: false,
        title: 'Создать список дел на React'
      },
      {
        id: 2,
        completed: true,
        title: 'Заказать комплектующие для ПК'
      },
      {
        id: 3,
        completed: false,
        title: 'Собрать ПК'
      },
    ]
  );

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed =!todo.completed;
      }
      return todo;
    }),
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false,
    }]))
  }

  return (
    <Context.Provider value={{removeTodo: removeTodo}}>
      <div className={'wrapper'}>
        <div className={'list'}>
          <header>
            <h1>Список задач</h1>
            <AddTodo onCreate={addTodo}/>
            {!todos.length && <p className={'list-empty'}>Список задач пуст</p>}
          </header>
            <TodoList todos={todos} onToggle={toggleTodo}/>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;

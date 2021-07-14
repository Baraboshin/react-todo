import React from 'react'
import TodoList from "./ToDo/TodoList";
import AddTodo from "./ToDo/AddTodo";
import Context from "./context";
import Modal from 'react-modal';
import _ from 'lodash'

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

  const [todoEdit, setTodoEdit] = React.useState({});

  function markTodoOnEdit(todo) {
    setTodoEdit(todo);
    setInnerTodoEdit(todo)
  }

  const [innerTodoEdit, setInnerTodoEdit] = React.useState(todoEdit);

  function applyTodoChanges() {

    setTodos(todos.map(todo => {
      if (todo.id === innerTodoEdit.id)
        return innerTodoEdit;
      return todo
    }));

    setTodoEdit({});
    setInnerTodoEdit({})
  }

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
    <>
      <Context.Provider value={{removeTodo, markTodoOnEdit}}>
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
      <Modal
        isOpen={ !_.isEmpty(todoEdit) }
        ariaHideApp={ false }
        contentLabel="Example Modal"
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(20, 20, 20, 0.9)'
          },
          content: {
            position: 'static',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px'
          }
        }}
      >
        <h2 style={{marginTop: '0px',  marginBottom: '20px'}}>Редактирование задачи</h2>
        {(todoEdit.title) && <input
          style={{width: '100%', marginBottom: '20px',}}
          type={'text'}
          value={ innerTodoEdit.title }
          onChange={(event) => setInnerTodoEdit({...innerTodoEdit, title: event.target.value})}
          />}
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <button
            onClick={applyTodoChanges}
            className={'btn btn-primary'}
            disabled={_.isEqual(todoEdit, innerTodoEdit)}
          >
            Сохранить
          </button>
          <button
            className={'btn btn-light'}
            onClick={()=>{ setTodoEdit({})}}
          >
            Отмена
          </button>
        </div>
      </Modal>
    </>
  );
}

export default App;

import TodoList from "./ToDo/TodoList";

function App() {
  const todos = [
    {
      id: 1,
      completed: false,
      title: 'Создать список дел на React'
    },
    {
      id: 2,
      completed: false,
      title: 'Собрать ПК'
    },
  ];

  return (
    <div className={'wrapper'}>
      <div className={'list'}>
        <h1>ToDo List</h1>
        <TodoList todos={todos}/>
      </div>
    </div>
  );
}

export default App;

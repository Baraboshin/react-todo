import TodoItem from "./TodoItem";

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  }
}

export default function TodoList(props) {
  return(
    <ul style={styles.ul}>
      {
        props.todos.map((todo, idx) => {
          return (
            <TodoItem todo={todo} index={idx} key={todo.id}/>
          )
        })
      }
    </ul>
  )
}

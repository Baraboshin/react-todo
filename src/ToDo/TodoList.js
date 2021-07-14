import TodoItem from "./TodoItem";
import PropTypes from "prop-types"

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
};

function TodoList(props) {
  return(
    <ul style={styles.ul}>
      {
        props.todos.map((todo) => {
          return (
            <TodoItem todo={todo} key={todo.id} onChange={props.onToggle}/>
          )
        })
      }
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;

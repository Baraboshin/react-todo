import React, { useContext } from 'react'
import PropTypes from "prop-types"
import Context from "../context";

const style = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 0 10px 0',
    padding: '10px',
    background: 'white',
    boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
  },
  input: {
    marginRight: '10px',
  },
  buttonRemove: {
    width: '20px',
    height: '20px',
    marginLeft: '10px',
    border: 'none',
    color: 'white',
    background: 'red',
    borderRadius: '50%',
    cursor: 'pointer',
  }
}

function TodoItem({ todo, index, onChange }) {
const { removeTodo } = useContext(Context)

const classes = ['todo-title'];
if (todo.completed) {
  classes.push('done')
}
 return(
   <li style={style.li}>
     <span>
       <input
         type="checkbox"
         style={style.input}
         checked={todo.completed}
         onChange={() => { onChange(todo.id) }}
       />
     </span>
     <span className={classes.join(' ')}>
       {todo.title}
     </span>
     <span>
       <button
         style={style.buttonRemove}
         onClick={removeTodo.bind(null, todo.id)}
       >
         &times;
       </button>
     </span>
   </li>
 )
}

 TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
   index: PropTypes.number,
   onChange: PropTypes.func.isRequired,
 }

export default TodoItem

import React, { useContext } from 'react'
import PropTypes from "prop-types"
import Context from "../context";
import {faTimes, faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
  buttonEdit: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20px',
    height: '20px',
    marginLeft: '10px',
    border: 'none',
    color: 'white',
    background: 'green',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  buttonRemove: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20px',
    height: '20px',
    marginLeft: '10px',
    border: 'none',
    color: 'white',
    background: 'red',
    borderRadius: '50%',
    cursor: 'pointer',
  }
};

function TodoItem({ todo, index, onChange }) {
  const { removeTodo, markTodoOnEdit } = useContext(Context);

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
     <span style={{display: 'flex',}}>
       <button
         style={style.buttonEdit}
         onClick={markTodoOnEdit.bind(null, todo)}
       >
         <FontAwesomeIcon icon={faPencilAlt} />
       </button>
       <button
         style={style.buttonRemove}
         onClick={removeTodo.bind(null, todo.id)}
       >
         <FontAwesomeIcon icon={faTimes} />
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

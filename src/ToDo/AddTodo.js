import React, { useState } from 'react'
import PropTypes from 'prop-types'

const style = {
  form: {
    display: 'flex',
    margin: '10px 10px 10px 0',
  },
  input: {
    flexGrow: 1,
    padding: '5px',
    height: '30px',
    marginRight: '10px',
  },
  button: {
    height: '30px',
  }
};


function AddTodo({ onCreate }) {
  const [value, setValue] = useState('');

  function submitHandler(event) {
    event.preventDefault()
    if (value.trim()){
      onCreate(value)
      setValue('')
    }
  }

  return(
    <form style={style.form} onSubmit={submitHandler}>
      <input style={style.input} value={value} onChange={event => setValue(event.target.value)}/>
      <button type="submit" className={'btn-primary'} disabled={!value}>Добавить задачу</button>
    </form>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
};

export default AddTodo

import React, { PropTypes } form 'react'
import Todo from './Todo'

const TodoList = ({ todo, onTodoClick}) => (
  <ul>
    {todos.map(todo =>
      <Todo
      key = {todo.id}
      {...todo}
      onClick={() => onTodoClick(todo.id)}
      />
      )}
  </ul>
)
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList

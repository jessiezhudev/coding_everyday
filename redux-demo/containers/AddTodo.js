import {connect} from 'react-redux'

let AddTodo = () => {
  return(
    <div>
      <form>
        <input/>
        <button/>
      </form>
    </div>
  )

}

AddTodo = connect()(AddTodo)

export default AddTodo

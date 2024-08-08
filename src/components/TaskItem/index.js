import './index.css'

const TaskItem = props => {
  const {taskDetails} = props
  const {task, tagValue} = taskDetails

  return (
    <li className="task-list">
      <p className="text">{task}</p>
      <div className="tag-value">
        <p className="tag-text">{tagValue}</p>
      </div>
    </li>
  )
}

export default TaskItem

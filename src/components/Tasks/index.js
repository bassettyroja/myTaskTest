import {Component} from 'react'
import {v4} from 'uuid'
import TagItems from '../TagItems'
import TaskItem from '../TaskItem'
import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class Tasks extends Component {
  state = {
    taskLists: [],
    taskInput: '',
    selectedTag: tagsList[0].displayText,
  }

  onChangeInput = event => {
    this.setState({taskInput: event.target.value})
  }

  onChangeSelectedTag = event => {
    this.setState({selectedTag: event.target.value})
  }

  onSubmitTask = event => {
    event.preventDefault()
    const {taskInput, selectedTag} = this.state
    const newTask = {
      id: v4(),
      task: taskInput,
      tagValue: selectedTag,
    }

    this.setState(prevState => ({
      taskLists: [...prevState.taskLists, newTask],
      taskInput: '',
      selectedTag: tagsList[0].displayText,
    }))
  }

  onClickActiveTag = displayText => {
    const {tasksList} = this.state
    const filteredList = tasksList.filter(each => each.tagValue === displayText)

    this.setState({taskLists: filteredList})
  }

  render() {
    const {taskInput, selectedTag, taskLists} = this.state

    return (
      <div className="app-container">
        <div className="left-part">
          <h1 className="heading">Create a task!</h1>
          <form onSubmit={this.onSubmitTask} className="form-container">
            <label htmlFor="task" className="label">
              Task
            </label>
            <input
              className="input-label"
              onChange={this.onChangeInput}
              type="text"
              placeholder="Enter the task here"
              id="task"
              value={taskInput}
            />
            <label htmlFor="tags" className="label">
              Tags
            </label>
            <select className="input-label" id="tags">
              {tagsList.map(eachTag => (
                <option key={eachTag.optionId} value={eachTag.displayText}>
                  {eachTag.displayText}
                </option>
              ))}
            </select>
            <div className="button-container">
              <button type="submit" className="add-button">
                Add Task
              </button>
            </div>
          </form>
        </div>
        <div className="right-part">
          <h1 className="tags-heading">Tags</h1>
          <ul className="tag-list">
            {tagsList.map(eachTag => (
              <TagItems
                key={eachTag.optionId}
                tagDetails={eachTag}
                activeTagList={this.onClickActiveTag}
                isActive={eachTag.optionId === selectedTag}
              />
            ))}
          </ul>

          <h1 className="tags-heading">Tasks</h1>
          {taskLists.length === 0 ? (
            <div className="no-task">
              <p className="tags-heading">No Tasks Added Yet</p>
            </div>
          ) : (
            <ul className="task-list">
              {taskLists.map(eachTask => (
                <TaskItem key={eachTask.id} taskDetails={eachTask} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Tasks

import './index.css'

const TagItems = props => {
  const {tagDetails, isActive, activeTagList} = props
  const {displayText} = tagDetails

  const activeBtnClassName = isActive ? 'active-btn' : ''

  const onClickTag = () => {
    activeTagList(displayText)
  }

  return (
    <li className="tag-item">
      <button
        className={`button ${activeBtnClassName}`}
        type="button"
        onClick={onClickTag}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TagItems

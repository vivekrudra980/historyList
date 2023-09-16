import './index.css'

const HistoryItem = props => {
  const {itemDetails, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = itemDetails

  const onDeleteItem = () => {
    onDelete(id)
  }

  return (
    <li className="container">
      <p className="time">{timeAccessed}</p>
      <img className="logo" src={logoUrl} alt="domain logo" />
      <p className="title">{title}</p>
      <p className="url">{domainUrl}</p>
      <button
        type="button"
        onClick={onDeleteItem}
        className="deleteIcon"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem

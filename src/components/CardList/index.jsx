import "./index.css";
import { FaTrash } from 'react-icons/fa'

export function Cards({ name, value, typeValue, id, items, setItems }) {
  function removeItem(event) {
    const item = items.filter((item) => item.uuid !== event);
    setItems(item);
  }
  return (
    <li className="card--item">
      <div className="container--content">
        <div className="content--name--value">
          <h2>{name}</h2>
          <span>R$ {value}</span>
        </div>
        <span>{typeValue}</span>
        <button
          className="button--remove"
          id={id}
          type="button"
          onClick={() => removeItem(id)}
          >
          <FaTrash/>
        </button>
      </div>
    </li>
  );
}

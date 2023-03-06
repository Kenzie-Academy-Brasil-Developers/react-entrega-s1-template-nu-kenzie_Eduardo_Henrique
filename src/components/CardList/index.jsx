import "./index.css";
import { FaTrash } from 'react-icons/fa'

export function Cards({ name, value, typeValue, id, items, setItems }) {
  
  function removeItem(idItem) {
    const item = items.filter((item) => item.uuid !== idItem);
    setItems(item);
  }
  
  return (
    <li className="card--item">
      <div className="container--content">
        <div className="content--name--value">
          <h2>{name}</h2>
          <span>R$ {value.toFixed(2)}</span>
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

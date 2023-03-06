import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./index.css";
export function Form({ setItems, items }) {
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);
  const [typeValue, setTypeValue] = useState("Entrada");

  function handleSubmit(event) {
    event.preventDefault();

    const newItem = {
      name: name,
      value: Number(value),
      typeValue: typeValue,
      uuid: uuid(),
    };

    const tempItems = [...items, newItem];
    setItems(tempItems);

  }

  return (
    <form onSubmit={handleSubmit} className="form--content">
      <div className="container--add--description">
        <label htmlFor="Description">Descrição</label>
        <input
          type="text"
          placeholder="Digite aqui sua descrição"
          id="Description"
          onChange={(event) => setName(event.target.value)}
          required={true}
        />
        <span>Ex: Compra de roupas</span>
      </div>
      <div className="container--choice--info">
        <div className="choice--value">
          <label htmlFor="Value">Valor</label>
          <input
            type="number"
            step={0.01}
            placeholder="1,00 R$"
            id="Value"
            onChange={(event) => setValue(event.target.value)}
            required={true}
          />
        </div>
        <div className="choice--type">
          <label htmlFor="TypeValue">Tipo de valor</label>
          <select
            name="TypeValue"
            id="TypeValue"
            onChange={(event) => setTypeValue(event.target.value)}
          >
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>
      </div>
      <button type="submit" className="button--send">
        Inserir valor
      </button>
    </form>
  );
}

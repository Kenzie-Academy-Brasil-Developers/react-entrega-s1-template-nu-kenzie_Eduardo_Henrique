import { useState } from "react";
import { Cards } from "../CardList";
import { CartValue } from "../CartValue";
import { Form } from "../Form";
import "./index.css";

export function Dashboard({ setPage }) {
  const [items, setItems] = useState([]);
  console.log(items.length);
  return (
    <div className="div--container--dashboard">
      <header className="container--header">
        <nav className="nav--menu">
          <img src="../src/assets/NuKenzie2.svg" alt="" />

          <button type="button" onClick={setPage}>
            Inicio
          </button>
        </nav>
      </header>
      <main className="container--dashboard">
        
        <div className="container--form">
          <Form setItems={setItems} items={items} />
          {items.length !== 0 && <CartValue items={items} />}
        </div>

        

         <div className="container--list">
          <h2>Resumo financeiro</h2>
          {items.length !== 0 ? (
            <ul className="list--items">
              {items.map((item) => (
                <Cards
                  key={item.uuid}
                  setItems={setItems}
                  items={items}
                  id={item.uuid}
                  name={item.name}
                  value={item.value}
                  typeValue={item.typeValue}
                />
              ))}
            </ul>
          ) : (
            <div className="message--empty">
              <h3>Você ainda não possui nenhum lançamento</h3>
            </div>
          )}
         </div>
        
      </main>
    </div>
  );
}

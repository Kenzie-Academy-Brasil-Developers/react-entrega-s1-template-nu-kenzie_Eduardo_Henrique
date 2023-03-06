import { CardsExpenses } from "./CardExpenses";
import { CardsEntry } from "./CardEntry";

export function Cards({ name, value, typeValue, id, items, setItems }) {

  return (
    <>
      {typeValue === "Despesa" ? (
        <CardsExpenses
          name={name}
          value={value}
          typeValue={typeValue}
          id={id}
          items={items}
          setItems={setItems}
        />
      ) : (
        <CardsEntry
          name={name}
          value={value}
          typeValue={typeValue}
          id={id}
          items={items}
          setItems={setItems}
        />
      )}
    </>
  );
}

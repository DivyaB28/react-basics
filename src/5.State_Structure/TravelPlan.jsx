import { useState } from "react";
import AddItem from "./AddItem";
import PackingItemsList from "./PackingItemsList";

let nextId = 3;
const INITIAL_ITEMS = [
  { id: 0, title: "Charger", packed: true },
  { id: 1, title: "Bottle", packed: false },
  { id: 2, title: "Food", packed: false },
];
export default function TravelPlans(props) {
  const [items, setItems] = useState(INITIAL_ITEMS);

  const total = items.length;
  const packed = items.filter((item) => item.packed).length;
  const handleAddItem = (title) => {
    setItems([
      ...items,
      {
        id: nextId++,
        title,
        packed: false,
      },
    ]);
  };

  const onChangeItem = (nextItem) => {
    setItems(
      items.map((item) => {
        if (item.id === nextItem.id) {
          return nextItem;
        } else {
          return item;
        }
      })
    );
  };
  const onDeleteItem = (deleteId) => {
    setItems(items.filter((item) => item.id !== deleteId));
  };

  return (
    <div style={{ flexBasis: "300px", paddingTop: "10px" }}>
      <h3>Travel Plans</h3>
      <AddItem onAddItem={handleAddItem} />
      <PackingItemsList
        items={items}
        onChangeItem={onChangeItem}
        onDeleteItem={onDeleteItem}
      />
      <b>
        {packed} out of {total} packed!
      </b>
    </div>
  );
}

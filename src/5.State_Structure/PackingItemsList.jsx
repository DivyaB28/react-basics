const PackingItemsList = ({ items, onChangeItem, onDeleteItem }) => {
  return (
    <ul style={{ margin: "10px 0", padding: "10px 0" }}>
      {items.map((item) => (
        <li key={item.id} style={{ listStyle: "none" }}>
          <label>
            {" "}
            <input
              type="checkbox"
              checked={item.packed}
              onChange={(e) => {
                console.log(e.target.checked);
                onChangeItem({
                  ...item,
                  packed: e.target.checked,
                });
              }}
            />{" "}
            {item.title}
          </label>
          <button
            onClick={() => {
              onDeleteItem(item.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PackingItemsList;

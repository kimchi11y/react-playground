import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem : (item:string) => void;
}
function ListGroup({ items, heading,onSelectItem }: Props) {
  //Hook = data will change overtime
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1 className="text-xl font-bold">{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="border-b">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index ? "bg-blue-600 border-b " : "border-b"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

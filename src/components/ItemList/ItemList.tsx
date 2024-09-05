import { useState } from 'react';

interface ItemListProps {
  items: string[];
}

const ItemList = ({ items }: ItemListProps) => {
  const [list, setList] = useState<string[]>(items);

  const handleDelete = (index: number) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => handleDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;

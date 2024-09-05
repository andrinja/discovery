import Counter from 'components/Counter/Counter';
import './App.css';
import React, { useEffect, useState } from 'react';
import ItemList from 'components/ItemList';

export default function App(){
	const [data, setData] = useState(null);
	const [value, setValue] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const result = await response.json();
    setData(result);
  };

	const items = ['Item 1', 'Item 2', 'Item 3'];

	if (!data) {
    return <div>Loading...</div>;
  }

  const handleChange = (event: any) => {
		setValue(event.target.value);
		console.log(value)
  };
  return (
			<div className="container">
				<p>Data: {JSON.stringify(data)}</p>
				<ItemList items={items}/>
				<input type="text" value={value} onChange={handleChange} />
			</div>
		);
	};

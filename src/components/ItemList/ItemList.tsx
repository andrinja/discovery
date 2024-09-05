import React from 'react';
import {FixedSizeList as List} from 'react-window';

export default function ItemList() {

const Row = ({index, style}: {index: number, style: React.CSSProperties}) => (
	<div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
		Row {index}
	</div>
)

  return (
    <List
				className="List"
				height={150}
				itemCount={1000}
				itemSize={35}
				width={300}
			>
				{Row}
			</List>
  );
};

import React from 'react';
import Item from 'components/item';

const List = ({ items }) => {
  console.log(items);
  return (
    <ul>
      {items.map(item => {
        return <Item item={item} />;
      })}
    </ul>
  )
};

export default List;
